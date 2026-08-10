import { SCENARIOS_128 } from './scenarios128.js';

export const CHARACTER_CLASSES = [
  {
    id: 'prep_power',
    name: '⚡ PrEP-Powered Party Slut',
    description: 'Daily PrEP user who loves wild SoMa night-outs. 99.9% HIV protection when consistent, but prone to late-night forgotten pills.',
    initialPrep: 100,
    initialDoxy: 3,
    initialCondoms: 5,
    polyMembers: ['Primary Anchor'],
    bonusText: '+20% Sex Points on One-Night Encounters'
  },
  {
    id: 'doxy_kink',
    name: '⛓️ Doxy-PEP Kink Enthusiast',
    description: 'Fetish fair regular who carries Doxy-PEP everywhere. High bacterial STI immunity, strict consent negotiations.',
    initialPrep: 80,
    initialDoxy: 10,
    initialCondoms: 8,
    polyMembers: ['Leather Sub'],
    bonusText: '+75% Bacterial STI Protection from Doxy-PEP'
  },
  {
    id: 'poly_anchor',
    name: '💖 Polycule Nesting Anchor',
    description: 'Nurturing polycule hub with an established inner circle. High ingroup intimacy multipliers.',
    initialPrep: 90,
    initialDoxy: 5,
    initialCondoms: 15,
    polyMembers: ['Nesting Partner', 'Secondary Switch'],
    bonusText: 'Starts with 2 Polycule Members (+30% Ingroup Point Multiplier)'
  },
  {
    id: 'bareback_gambler',
    name: '🎲 Bareback Gambler',
    description: 'Chaotic thrill-seeker who lives life on the edge. High point multipliers, but unpredictable medication adherence.',
    initialPrep: 50,
    initialDoxy: 0,
    initialCondoms: 2,
    polyMembers: ['Casual Nestmate'],
    bonusText: '+50% Bonus Sex Points on Raw Encounters'
  }
];

export class CYOAEngine {
  constructor() {
    this.scenarios = SCENARIOS_128;
    this.leaderboardKey = 'sf_trail_cyoa_top10';
    this.characterClass = CHARACTER_CLASSES[0];
    this.resetState();
  }

  selectCharacter(classId) {
    const found = CHARACTER_CLASSES.find(c => c.id === classId);
    if (found) {
      this.characterClass = found;
      this.resetState();
    }
  }

  resetState() {
    this.nodeSequence = this.shuffleArray([...Array(128).keys()]);
    this.sequenceIndex = 0;

    const char = this.characterClass || CHARACTER_CLASSES[0];

    this.state = {
      character: char,
      currentNodeId: this.nodeSequence[0],
      sexScore: 0,
      health: 100,
      prepAdherence: char.initialPrep, // Hidden internal metric
      polyculeMembers: [...char.polyMembers],
      condomsInInventory: char.initialCondoms,
      doxyPepDoses: char.initialDoxy,
      hasHIV: false,
      polyculeInfected: false,
      activeSTIs: [],
      turnsPlayed: 0,
      isGameOver: false,
      gameOverReason: '',
      lastEventMessage: `Character Created: ${char.name}. Ready to explore San Francisco!`,
      history: []
    };
  }

  shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  getCurrentNode() {
    const id = this.nodeSequence[this.sequenceIndex] || 0;
    return this.scenarios[id] || this.scenarios[0];
  }

  playSound(type = 'select') {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (type === 'select') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.1);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === 'score') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.08);
        osc.frequency.setValueAtTime(783.99, now + 0.16);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'danger') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(110, now + 0.3);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      }
    } catch (e) {
      // Audio context policy
    }
  }

  makeChoice(choiceIndex, useCondom = false) {
    if (this.state.isGameOver) return;

    const currentNode = this.getCurrentNode();
    if (!currentNode || !currentNode.choices[choiceIndex]) return;

    const choice = currentNode.choices[choiceIndex];
    this.state.turnsPlayed += 1;
    this.playSound('select');
    let messageLog = [];

    // Clinic Refill
    if (choice.actType === 'clinic') {
      this.state.prepAdherence = 100;
      this.state.doxyPepDoses = 10;
      this.state.condomsInInventory += 10;
      this.state.health = Math.min(100, this.state.health + 30);
      this.state.sexScore += choice.sexPoints;
      this.state.lastEventMessage = "🩺 Magnet SF Visit: Refilled PrEP & Doxy-PEP stock, restored health to max!";
      this.advanceNode();
      return;
    }

    // Condoms & Narrative Breakage
    let actualCondomUsed = false;
    if (useCondom && this.state.condomsInInventory > 0) {
      this.state.condomsInInventory -= 1;
      if (Math.random() < 0.02) {
        messageLog.push("💥 CONDOM RIPPED! Latex barrier failed mid-encounter!");
      } else {
        actualCondomUsed = true;
        messageLog.push("🛡️ Condom held perfectly throughout the act.");
      }
    }

    // Polycule Addition
    if (choice.addsPolyculeMember && this.state.polyculeMembers.length < 12) {
      const partnerName = `Polycule Partner #${this.state.polyculeMembers.length + 1}`;
      this.state.polyculeMembers.push(partnerName);
      messageLog.push(`💖 Welcomed ${partnerName} into your polycule!`);
    }

    // Internal adherence drift (hidden from HUD)
    if (choice.missesPrep) {
      this.state.prepAdherence = Math.max(15, this.state.prepAdherence - 25);
      messageLog.push("⚠️ Party Bender: Forgot your morning PrEP dose!");
    } else if (Math.random() < 0.2) {
      this.state.prepAdherence = Math.max(25, this.state.prepAdherence - 10);
    }

    // Calculate Monte Carlo STI Risk
    const infectionRoll = this.evaluateMonteCarloRisk(choice, actualCondomUsed);

    // Scoring with character multipliers
    let points = choice.sexPoints;
    if (this.state.character.id === 'prep_power' && !choice.isIngroup) points = Math.round(points * 1.2);
    if (this.state.character.id === 'bareback_gambler' && !actualCondomUsed) points = Math.round(points * 1.5);
    
    if (choice.isIngroup) {
      const polyBonus = 1.0 + (this.state.polyculeMembers.length * 0.15);
      points = Math.round(points * polyBonus);
      messageLog.push(`✨ Ingroup Polycule Multiplier (+${Math.round((polyBonus - 1) * 100)}% points)!`);
    }

    this.state.sexScore += points;
    if (points > 0) this.playSound('score');

    // Process Infection Early Game Over Rules
    if (infectionRoll.contractedHIV) {
      this.state.hasHIV = true;
      this.state.isGameOver = true;
      this.state.gameOverReason = `💀 GAME OVER: You contracted HIV! PrEP protection lapsed during unbarrier exposure.`;
      this.playSound('danger');
      return;
    }

    if (infectionRoll.polyculeInfected) {
      this.state.polyculeInfected = true;
      this.state.isGameOver = true;
      this.state.gameOverReason = `💔 GAME OVER: You infected your polycule network of ${this.state.polyculeMembers.length} members with a serious STI!`;
      this.playSound('danger');
      return;
    }

    if (infectionRoll.contractedSTIs.length > 0) {
      this.state.activeSTIs.push(...infectionRoll.contractedSTIs);
      this.state.health = Math.max(10, this.state.health - (25 * infectionRoll.contractedSTIs.length));
      messageLog.push(`⚠️ Contracted ${infectionRoll.contractedSTIs.join(', ')}! Health reduced.`);
      this.playSound('danger');
    }

    this.state.lastEventMessage = messageLog.join(' ') || `Scored +${points} Sex Points!`;
    this.advanceNode();
  }

  advanceNode() {
    this.sequenceIndex += 1;
    if (this.sequenceIndex >= 128) {
      this.state.isGameOver = true;
      this.state.gameOverReason = `👑 TRIUMPH! You conquered all 128 SF encounters with a Sex Score of ${this.state.sexScore} PTS!`;
      this.playSound('score');
      return;
    }
    this.state.currentNodeId = this.nodeSequence[this.sequenceIndex];
  }

  evaluateMonteCarloRisk(choice, condomUsed) {
    const outcome = { contractedHIV: false, contractedSTIs: [], polyculeInfected: false };
    if (choice.riskLevel === 'none' || choice.actType === 'rest') return outcome;

    const baseHIVRisk = choice.actType === 'anal' ? 0.0138 : 0.001;
    const prepEfficacy = (this.state.prepAdherence / 100.0) * 0.999;
    const finalHIVRisk = baseHIVRisk * (1 - prepEfficacy) * (condomUsed ? 0.15 : 1.0);

    if (Math.random() < finalHIVRisk) {
      outcome.contractedHIV = true;
    }

    let bacterialRisk = (choice.actType === 'anal' ? 0.35 : 0.20) * (condomUsed ? 0.20 : 1.0);
    if (this.state.doxyPepDoses > 0) {
      bacterialRisk *= 0.25;
    }

    if (Math.random() < bacterialRisk) {
      const stis = ['Chlamydia', 'Gonorrhea', 'Syphilis'];
      outcome.contractedSTIs.push(stis[Math.floor(Math.random() * stis.length)]);

      const polySpreadRisk = 0.30 + (this.state.polyculeMembers.length * 0.05);
      if (choice.isIngroup && Math.random() < polySpreadRisk) {
        outcome.polyculeInfected = true;
      }
    }

    return outcome;
  }

  getLeaderboard() {
    try {
      const data = localStorage.getItem(this.leaderboardKey);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    return [
      { initials: 'SFX', score: 28500, date: '2026-08-01' },
      { initials: 'BAY', score: 24200, date: '2026-08-02' },
      { initials: 'PLY', score: 21800, date: '2026-08-03' },
      { initials: 'FLS', score: 19400, date: '2026-08-04' },
      { initials: 'DOR', score: 17100, date: '2026-08-05' },
      { initials: 'CST', score: 15200, date: '2026-08-06' },
      { initials: 'MSN', score: 13500, date: '2026-08-07' },
      { initials: 'PRP', score: 11800, date: '2026-08-08' },
      { initials: 'SMA', score: 9900, date: '2026-08-09' },
      { initials: 'SLT', score: 8800, date: '2026-08-10' }
    ];
  }

  saveHighScore(initials) {
    const cleanInitials = (initials || 'XXX').toUpperCase().substring(0, 3);
    const leaderboard = this.getLeaderboard();
    leaderboard.push({
      initials: cleanInitials,
      score: this.state.sexScore,
      date: new Date().toISOString().split('T')[0]
    });
    leaderboard.sort((a, b) => b.score - a.score);
    const top10 = leaderboard.slice(0, 10);
    try {
      localStorage.setItem(this.leaderboardKey, JSON.stringify(top10));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
    return top10;
  }
}
