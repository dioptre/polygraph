/**
 * San Francisco & Oakland Sexual Trail — 128 Audited Master CYOA Scenarios
 * Cleanly divided into 5 Narrative Acts with 32 dedicated 8-Bit Scene Images & Regional Isolation!
 */
window.SF_SCENARIOS_128 = [
  {
    "id": 0,
    "act": "ACT I: MISSION NOCTURNE",
    "neighborhood": "Mission Victorian Loft",
    "image": "./images/mission_loft.jpg",
    "narrative": "Mezcal fumes, cedar incense, and raw sub-bass rattle the floorboards of a sun-drenched Mission Victorian loft. Jax, a leather-vested artist with smoldering eyes, traces a line of spilled lime juice down your forearm before pulling you against a velvet sofa. 'Welcome to San Francisco,' Jax purrs. 'To conquer this city, you must complete five Odyssey Tasks across SF and Oakland: unlock the SoMa Speakeasy, cross the Bay to Oakland, master the Armory Vault, audit your health at Magnet SF, and build a trusted polycule alliance.'",
    "choices": [
      {
        "text": "🎟️ Eavesdrop on the promoters in the corner arguing about the secret Dore Alley VIP Wristband keycard.",
        "targetNodeId": 4,
        "sexPoints": 140,
        "riskLevel": "none",
        "actType": "investigate",
        "isIngroup": true,
        "grantsItem": "vip_soma_wristband",
        "completesQuest": "soma"
      },
      {
        "text": "💖 Draft a formal polycule intimacy pact with Jax over smoky mezcal shots.",
        "targetNodeId": 3,
        "sexPoints": 200,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Jax the Mission Artist",
        "grantsItem": "poly_intimacy_pact"
      },
      {
        "text": "🔥 Drag Jax into the oil-scented back studio for a wild bareback session against the paint easel!",
        "targetNodeId": 1,
        "sexPoints": 360,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false,
        "missesPrep": true
      },
      {
        "text": "🚆 Open the Bay Area Transit Map to travel directly to another neighborhood hub.",
        "targetNodeId": 5,
        "sexPoints": 50,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 1,
    "act": "ACT I: MISSION BACK STUDIO",
    "neighborhood": "Mission Loft Back Studio",
    "image": "./images/mission_loft.jpg",
    "narrative": "Wet acrylic paint shines under dim red lamps. Jax presses your hips against an easel displaying a giant canvas of fog rolling over the Golden Gate. Paint brushes clatter to the floor as his hands slide beneath your clothing, slick with linseed oil and heat.",
    "choices": [
      {
        "text": "🎨 Hold Jax tightly against the canvas easel as oil paint splatters across his bare chest!",
        "targetNodeId": 2,
        "sexPoints": 420,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false,
        "missesPrep": true
      },
      {
        "text": "🛡️ Tear open a latex condom wrapper with your teeth before taking Jax against the studio wall.",
        "targetNodeId": 2,
        "sexPoints": 280,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "📖 Open the leather journal under the workbench to inspect Jax's hand-drawn map of secret play spaces.",
        "targetNodeId": 4,
        "sexPoints": 150,
        "riskLevel": "none",
        "actType": "investigate",
        "isIngroup": true,
        "grantsItem": "vip_soma_wristband"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 2,
    "act": "ACT I: VELVET SOFA SESSION",
    "neighborhood": "Mission Loft Living Room",
    "image": "./images/mission_loft.jpg",
    "narrative": "Jax sighs in pleasure as the latex barrier slides on smoothly. The consent check-in is electric and clear. The two of you share an exquisite, protected play session on the velvet sofa while ambient synth music swirls through the loft.",
    "choices": [
      {
        "text": "🥂 Toast with champagne glasses and welcome Jax as an official anchor in your polycule team!",
        "targetNodeId": 3,
        "sexPoints": 320,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Jax the Mission Artist",
        "grantsItem": "poly_intimacy_pact"
      },
      {
        "text": "💊 Step out onto Valencia Street to visit Magnet SF Clinic on 18th Street for health supplies.",
        "targetNodeId": 8,
        "sexPoints": 100,
        "riskLevel": "none",
        "actType": "clinic",
        "isIngroup": true,
        "grantsItem": "magnet_health_pass"
      },
      {
        "text": "🚶 Grab your leather jacket and stroll toward Dolores Park for the sunset gathering.",
        "targetNodeId": 7,
        "sexPoints": 120,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 3,
    "act": "ACT I: MEZCAL INTIMACY PACT",
    "neighborhood": "Mission Loft Kitchen Island",
    "image": "./images/mission_loft.jpg",
    "narrative": "Jax links arms with you over smoky mezcal shots. 'Polyamory in San Francisco is about uninhibited desire paired with radical transparency,' Jax laughs, pulling you into a passionate kiss across the kitchen island.",
    "choices": [
      {
        "text": "🍸 Lift Jax onto the marble kitchen island for an intense, fluid-bonded midnight hookup!",
        "targetNodeId": 6,
        "sexPoints": 380,
        "riskLevel": "medium",
        "actType": "vaginal",
        "isIngroup": true,
        "addsPolyculeMember": "Jax the Mission Artist",
        "grantsItem": "poly_intimacy_pact"
      },
      {
        "text": "🩺 Propose a joint visit to Magnet SF Clinic tomorrow to get routine STI screening panels together.",
        "targetNodeId": 8,
        "sexPoints": 110,
        "riskLevel": "none",
        "actType": "clinic",
        "isIngroup": true,
        "grantsItem": "magnet_health_pass"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 4,
    "act": "ACT I: MISSION BALCONY KEYCARD",
    "neighborhood": "Mission Loft Balcony",
    "image": "./images/mission_loft.jpg",
    "narrative": "High above Valencia Street under the cool night sky, Jax reaches into his leather vest and hands you a glittering black VIP Wristband embossed with silver foil. 'This unlocks the secret subterranean speakeasy below Dore Alley in SoMa tonight,' Jax whispers into your ear.",
    "choices": [
      {
        "text": "🎟️ Fasten the silver-embossed black VIP Wristband to your wrist and head to Folsom Street!",
        "targetNodeId": 9,
        "sexPoints": 170,
        "riskLevel": "none",
        "actType": "investigate",
        "isIngroup": true,
        "grantsItem": "vip_soma_wristband",
        "completesQuest": "soma"
      },
      {
        "text": "🚆 At Mission Loft Balcony, open the Bay Area Transit Hub map to cross the Bay to Oakland or visit the Castro.",
        "targetNodeId": 5,
        "sexPoints": 60,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 5,
    "act": "BAY AREA REGIONAL TRANSIT HUB",
    "neighborhood": "Valencia Street Transit Hub",
    "image": "./images/mission_loft.jpg",
    "narrative": "San Francisco and the East Bay lie open before you. Muni streetcars rattle along Market Street, BART trains roar beneath the Bay, and fog rolls over Twin Peaks. Where will your adventure lead next?",
    "choices": [
      {
        "text": "🚇 Board the silver BART train at Embarcadero Station to cross under the Bay to Downtown Oakland!",
        "targetNodeId": 25,
        "sexPoints": 100,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true,
        "grantsItem": "eastbay_bart_pass"
      },
      {
        "text": "💊 Travel to Castro District to visit Magnet SF Clinic for a full 14-pathogen STI audit.",
        "targetNodeId": 8,
        "sexPoints": 90,
        "riskLevel": "none",
        "actType": "clinic",
        "isIngroup": true
      },
      {
        "text": "⛓️ Travel to Armory Fortress to inspect the red-brick kink dungeon vaults.",
        "targetNodeId": 16,
        "sexPoints": 90,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      },
      {
        "text": "📍 Travel to SoMa Circuit (Folsom Street Fair & Speakeasy Cellars)",
        "targetNodeId": 9,
        "sexPoints": 80,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      }
    ],
    "isTransitHub": true
  },
  {
    "id": 6,
    "act": "ACT I: 16TH STREET MURAL ALLEY",
    "neighborhood": "Clarion Erotic Mural Alley",
    "image": "./images/clarion_mural.jpg",
    "narrative": "Neon street lamps illuminate vibrant street murals along Clarion Alley. Nico, a paint-splattered muralist with a broad smile, steps up with two spray cans. 'Art and intimacy are both about raw expression without shame,' Nico says, winking at you.",
    "choices": [
      {
        "text": "🎨 Grab a spray can and help Nico paint an erotic mural on the brick alley wall.",
        "targetNodeId": 7,
        "sexPoints": 190,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      },
      {
        "text": "💋 Pull Nico into the shadow of the brick archway for a passionate midnight alleyway encounter!",
        "targetNodeId": 7,
        "sexPoints": 410,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false,
        "missesPrep": true
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 7,
    "act": "ACT I: DOLORES PARK SUNSET PICNIC",
    "neighborhood": "Dolores Park Palm Grove",
    "image": "./images/dolores_picnic.jpg",
    "narrative": "Golden hour sun illuminates the emerald slopes of Dolores Park. Your polycule spreads out a velvet tapestry with iced kombucha, fresh strawberries, and barrier supplies. Zoe, a tattooed rope top, twists jute cord around her hands while discussing tension safety.",
    "choices": [
      {
        "text": "🧺 Share fresh strawberries and lead an affectionate cuddle circle on the velvet picnic blanket.",
        "targetNodeId": 10,
        "sexPoints": 420,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true
      },
      {
        "text": "🪢 Let Zoe tie a custom jute chest harness around your torso while demonstrating safety checks.",
        "targetNodeId": 11,
        "sexPoints": 340,
        "riskLevel": "low",
        "actType": "action",
        "isIngroup": false
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 8,
    "act": "ACT I: MAGNET SF CASTRO CLINIC",
    "neighborhood": "Magnet SF Castro Clinic",
    "image": "./images/castro_clinic.jpg",
    "narrative": "The serene air of Magnet SF on 18th Street provides a sanctuary. Nurse Practitioner Alex greets you warmly, administering a comprehensive 14-pathogen STI PCR screening panel, resetting your PrEP adherence to 100%, and handing you fresh Doxy-PEP packets & condoms.",
    "choices": [
      {
        "text": "🩺 Complete your 14-pathogen STI screening panel, reset PrEP to 100%, and collect fresh supply pouches!",
        "targetNodeId": 9,
        "sexPoints": 160,
        "riskLevel": "none",
        "actType": "clinic",
        "isIngroup": true,
        "grantsItem": "magnet_health_pass",
        "completesQuest": "clinic"
      },
      {
        "text": "💬 Discuss community harm reduction programs and safer-sex workshops with Nurse Alex.",
        "targetNodeId": 17,
        "sexPoints": 130,
        "riskLevel": "none",
        "actType": "dialogue",
        "isIngroup": true
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 9,
    "act": "ACT I: MISSION NOCTURNE",
    "neighborhood": "Castro Theater Marquee Foyer",
    "image": "./images/castro_marquee.jpg",
    "narrative": "The energy inside Castro Theater Marquee Foyer is intoxicating. Historic velvet lounge near the organ balcony. Friends and lovers gather under dim crimson lights to share intimate confessions and plan their next adventure.",
    "choices": [
      {
        "text": "🔥 Lose yourself in heat and sweat on the padded benches of Castro Theater Marquee Foyer!",
        "targetNodeId": 10,
        "sexPoints": 397,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false,
        "missesPrep": true
      },
      {
        "text": "🛡️ Pull a latex barrier from your pouch for a safe, sensual session inside Castro Theater Marquee Foyer.",
        "targetNodeId": 10,
        "sexPoints": 279,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💬 Sit together on the velvet cushions at Castro Theater Marquee Foyer for an honest consent check-in.",
        "targetNodeId": 10,
        "sexPoints": 328,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Castro Theater Marquee Foyer"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 10,
    "act": "ACT I: MISSION NOCTURNE",
    "neighborhood": "Mission Polycule Mansion",
    "image": "./images/mission_loft.jpg",
    "narrative": "The energy inside Mission Polycule Mansion is intoxicating. Shared Victorian library with leather couches and poly calendars. Friends and lovers gather under dim crimson lights to share intimate confessions and plan their next adventure.",
    "choices": [
      {
        "text": "🔥 Pull your partner close against the leather couch at Mission Polycule Mansion for a raw bareback hookup!",
        "targetNodeId": 11,
        "sexPoints": 400,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false,
        "missesPrep": false
      },
      {
        "text": "🛡️ At Mission Polycule Mansion, pull a latex barrier from your pouch for a safe, sensual session inside Mission Polycule Mansion.",
        "targetNodeId": 11,
        "sexPoints": 280,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 Toast champagne flutes and welcome your new partner into the polycule circle at Mission Polycule Mansion!",
        "targetNodeId": 11,
        "sexPoints": 330,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Mission Polycule Mansion"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 11,
    "act": "ACT I: MISSION NOCTURNE",
    "neighborhood": "Dolores Hillside Rope Circle",
    "image": "./images/dolores_picnic.jpg",
    "narrative": "The energy inside Dolores Hillside Rope Circle is intoxicating. Shaded palm grove where kink educators demonstrate suspension ties. Friends and lovers gather under dim crimson lights to share intimate confessions and plan their next adventure.",
    "choices": [
      {
        "text": "🔥 Unbutton your shirt and press your partner against the brick wall of Dolores Hillside Rope Circle in a haze of heat!",
        "targetNodeId": 12,
        "sexPoints": 403,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false,
        "missesPrep": false
      },
      {
        "text": "🛡️ At Dolores Hillside Rope Circle, pull a latex barrier from your pouch for a safe, sensual session inside Dolores Hillside Rope Circle.",
        "targetNodeId": 12,
        "sexPoints": 281,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "📜 Draft an intimacy agreement covering health disclosures while relaxing at Dolores Hillside Rope Circle.",
        "targetNodeId": 12,
        "sexPoints": 332,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Dolores Hillside Rope Circle"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 12,
    "act": "ACT I: MISSION NOCTURNE",
    "neighborhood": "18th Street Coffee Roastery",
    "image": "./images/mission_loft.jpg",
    "narrative": "The energy inside 18th Street Coffee Roastery is intoxicating. Aromas of dark roast coffee and lively morning consent debates. Friends and lovers gather under dim crimson lights to share intimate confessions and plan their next adventure.",
    "choices": [
      {
        "text": "🔥 Slide beneath the warm blankets at 18th Street Coffee Roastery for a midnight bareback session!",
        "targetNodeId": 13,
        "sexPoints": 406,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false,
        "missesPrep": true
      },
      {
        "text": "🛡️ At 18th Street Coffee Roastery, pull a latex barrier from your pouch for a safe, sensual session inside 18th Street Coffee Roastery.",
        "targetNodeId": 13,
        "sexPoints": 282,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "🤝 Exchange a warm hug and align on relationship boundaries at 18th Street Coffee Roastery.",
        "targetNodeId": 13,
        "sexPoints": 334,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at 18th Street Coffee Roastery"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 13,
    "act": "ACT I: MISSION NOCTURNE",
    "neighborhood": "Clarion Alley Erotic Art Walk",
    "image": "./images/clarion_mural.jpg",
    "narrative": "The energy inside Clarion Alley Erotic Art Walk is intoxicating. Radical queer art installations illuminated under street lamps. Friends and lovers gather under dim crimson lights to share intimate confessions and plan their next adventure.",
    "choices": [
      {
        "text": "🔥 Lift your partner onto the mahogany counter at Clarion Alley Erotic Art Walk for an intense bareback encounter!",
        "targetNodeId": 14,
        "sexPoints": 409,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false,
        "missesPrep": false
      },
      {
        "text": "🛡️ At Clarion Alley Erotic Art Walk, pull a latex barrier from your pouch for a safe, sensual session inside Clarion Alley Erotic Art Walk.",
        "targetNodeId": 14,
        "sexPoints": 283,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "🍷 Sip mezcal with your partner while agreeing on fluid-bonding rules at Clarion Alley Erotic Art Walk.",
        "targetNodeId": 14,
        "sexPoints": 336,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Clarion Alley Erotic Art Walk"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 14,
    "act": "ACT I: MISSION NOCTURNE",
    "neighborhood": "Bernal Heights Sunset Vista",
    "image": "./images/twin_peaks.jpg",
    "narrative": "The energy inside Bernal Heights Sunset Vista is intoxicating. Panoramic view of the city skyline as fog rolls over Twin Peaks. Friends and lovers gather under dim crimson lights to share intimate confessions and plan their next adventure.",
    "choices": [
      {
        "text": "🔥 At Bernal Heights Sunset Vista, lose yourself in heat and sweat on the padded benches of Bernal Heights Sunset Vista!",
        "targetNodeId": 15,
        "sexPoints": 412,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false,
        "missesPrep": false
      },
      {
        "text": "🛡️ At Bernal Heights Sunset Vista, pull a latex barrier from your pouch for a safe, sensual session inside Bernal Heights Sunset Vista.",
        "targetNodeId": 15,
        "sexPoints": 284,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💬 Sit together on the velvet cushions at Bernal Heights Sunset Vista for an honest consent check-in.",
        "targetNodeId": 15,
        "sexPoints": 338,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Bernal Heights Sunset Vista"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 15,
    "act": "ACT I: MISSION NOCTURNE",
    "neighborhood": "24th Street Taqueria Rendezvous",
    "image": "./images/mission_loft.jpg",
    "narrative": "The energy inside 24th Street Taqueria Rendezvous is intoxicating. Late-night carnitas tacos, horchata, and flirty post-party chatter. Friends and lovers gather under dim crimson lights to share intimate confessions and plan their next adventure.",
    "choices": [
      {
        "text": "🔥 At 24th Street Taqueria Rendezvous, pull your partner close against the leather couch at 24th Street Taqueria Rendezvous for a raw bareback hookup!",
        "targetNodeId": 16,
        "sexPoints": 415,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false,
        "missesPrep": true
      },
      {
        "text": "🛡️ At 24th Street Taqueria Rendezvous, pull a latex barrier from your pouch for a safe, sensual session inside 24th Street Taqueria Rendezvous.",
        "targetNodeId": 16,
        "sexPoints": 285,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 Toast champagne flutes and welcome your new partner into the polycule circle at 24th Street Taqueria Rendezvous!",
        "targetNodeId": 16,
        "sexPoints": 340,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at 24th Street Taqueria Rendezvous"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 16,
    "act": "ACT I: MISSION NOCTURNE",
    "neighborhood": "Armory Fortress Courtyard",
    "image": "./images/mission_loft.jpg",
    "narrative": "The energy inside Armory Fortress Courtyard is intoxicating. Imposing red-brick arches where kink leather gear displays line the walk. Friends and lovers gather under dim crimson lights to share intimate confessions and plan their next adventure.",
    "choices": [
      {
        "text": "🔥 At Armory Fortress Courtyard, unbutton your shirt and press your partner against the brick wall of Armory Fortress Courtyard in a haze of heat!",
        "targetNodeId": 17,
        "sexPoints": 418,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false,
        "missesPrep": false
      },
      {
        "text": "🛡️ At Armory Fortress Courtyard, pull a latex barrier from your pouch for a safe, sensual session inside Armory Fortress Courtyard.",
        "targetNodeId": 17,
        "sexPoints": 286,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "📜 Draft an intimacy agreement covering health disclosures while relaxing at Armory Fortress Courtyard.",
        "targetNodeId": 17,
        "sexPoints": 342,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Armory Fortress Courtyard"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 17,
    "act": "ACT I: MISSION NOCTURNE",
    "neighborhood": "Armory Velvet Foyer Lounge",
    "image": "./images/mission_loft.jpg",
    "narrative": "The energy inside Armory Velvet Foyer Lounge is intoxicating. Dungeon orientation room with plush velvet chairs and safety rules. Friends and lovers gather under dim crimson lights to share intimate confessions and plan their next adventure.",
    "choices": [
      {
        "text": "🔥 At Armory Velvet Foyer Lounge, slide beneath the warm blankets at Armory Velvet Foyer Lounge for a midnight bareback session!",
        "targetNodeId": 18,
        "sexPoints": 421,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false,
        "missesPrep": false
      },
      {
        "text": "🛡️ At Armory Velvet Foyer Lounge, pull a latex barrier from your pouch for a safe, sensual session inside Armory Velvet Foyer Lounge.",
        "targetNodeId": 18,
        "sexPoints": 287,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "🤝 Exchange a warm hug and align on relationship boundaries at Armory Velvet Foyer Lounge.",
        "targetNodeId": 18,
        "sexPoints": 344,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Armory Velvet Foyer Lounge"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 18,
    "act": "ACT I: MISSION NOCTURNE",
    "neighborhood": "Armory Suspension Rig Hall",
    "image": "./images/mission_loft.jpg",
    "narrative": "The energy inside Armory Suspension Rig Hall is intoxicating. Soaring ceilings with iron suspension beams and padded mats. Friends and lovers gather under dim crimson lights to share intimate confessions and plan their next adventure.",
    "choices": [
      {
        "text": "🔥 At Armory Suspension Rig Hall, lift your partner onto the mahogany counter at Armory Suspension Rig Hall for an intense bareback encounter!",
        "targetNodeId": 19,
        "sexPoints": 424,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false,
        "missesPrep": true
      },
      {
        "text": "🛡️ At Armory Suspension Rig Hall, pull a latex barrier from your pouch for a safe, sensual session inside Armory Suspension Rig Hall.",
        "targetNodeId": 19,
        "sexPoints": 288,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "🍷 Sip mezcal with your partner while agreeing on fluid-bonding rules at Armory Suspension Rig Hall.",
        "targetNodeId": 19,
        "sexPoints": 346,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Armory Suspension Rig Hall"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 19,
    "act": "ACT I: MISSION NOCTURNE",
    "neighborhood": "Armory Dungeon Play Nook",
    "image": "./images/mission_loft.jpg",
    "narrative": "The energy inside Armory Dungeon Play Nook is intoxicating. Private curtained niche for consensual impact and barrier play. Friends and lovers gather under dim crimson lights to share intimate confessions and plan their next adventure.",
    "choices": [
      {
        "text": "🔥 At Armory Dungeon Play Nook, lose yourself in heat and sweat on the padded benches of Armory Dungeon Play Nook!",
        "targetNodeId": 20,
        "sexPoints": 427,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false,
        "missesPrep": false
      },
      {
        "text": "🛡️ At Armory Dungeon Play Nook, pull a latex barrier from your pouch for a safe, sensual session inside Armory Dungeon Play Nook.",
        "targetNodeId": 20,
        "sexPoints": 289,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💬 Sit together on the velvet cushions at Armory Dungeon Play Nook for an honest consent check-in.",
        "targetNodeId": 20,
        "sexPoints": 348,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Armory Dungeon Play Nook"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 20,
    "act": "ACT I: MISSION NOCTURNE",
    "neighborhood": "Mission Creek Kayak Dock",
    "image": "./images/mission_loft.jpg",
    "narrative": "The energy inside Mission Creek Kayak Dock is intoxicating. Quiet water dock where kayaks bob under the moonlight. Friends and lovers gather under dim crimson lights to share intimate confessions and plan their next adventure.",
    "choices": [
      {
        "text": "🔥 At Mission Creek Kayak Dock, pull your partner close against the leather couch at Mission Creek Kayak Dock for a raw bareback hookup!",
        "targetNodeId": 21,
        "sexPoints": 430,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false,
        "missesPrep": false
      },
      {
        "text": "🛡️ At Mission Creek Kayak Dock, pull a latex barrier from your pouch for a safe, sensual session inside Mission Creek Kayak Dock.",
        "targetNodeId": 21,
        "sexPoints": 290,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 Toast champagne flutes and welcome your new partner into the polycule circle at Mission Creek Kayak Dock!",
        "targetNodeId": 21,
        "sexPoints": 350,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Mission Creek Kayak Dock"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 21,
    "act": "ACT I: MISSION NOCTURNE",
    "neighborhood": "Castro Rooftop Cabana Deck",
    "image": "./images/castro_rooftop.jpg",
    "narrative": "The energy inside Castro Rooftop Cabana Deck is intoxicating. Heated swimming cabana overlooking the Castro neighborhood neon. Friends and lovers gather under dim crimson lights to share intimate confessions and plan their next adventure.",
    "choices": [
      {
        "text": "🔥 At Castro Rooftop Cabana Deck, unbutton your shirt and press your partner against the brick wall of Castro Rooftop Cabana Deck in a haze of heat!",
        "targetNodeId": 22,
        "sexPoints": 433,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false,
        "missesPrep": true
      },
      {
        "text": "🛡️ At Castro Rooftop Cabana Deck, pull a latex barrier from your pouch for a safe, sensual session inside Castro Rooftop Cabana Deck.",
        "targetNodeId": 22,
        "sexPoints": 291,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "📜 Draft an intimacy agreement covering health disclosures while relaxing at Castro Rooftop Cabana Deck.",
        "targetNodeId": 22,
        "sexPoints": 352,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Castro Rooftop Cabana Deck"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 22,
    "act": "ACT I: MISSION NOCTURNE",
    "neighborhood": "Mission Disco Vinyl Parlor",
    "image": "./images/mission_loft.jpg",
    "narrative": "The energy inside Mission Disco Vinyl Parlor is intoxicating. 70s disco records spinning on vintage turntables. Friends and lovers gather under dim crimson lights to share intimate confessions and plan their next adventure.",
    "choices": [
      {
        "text": "🔥 At Mission Disco Vinyl Parlor, slide beneath the warm blankets at Mission Disco Vinyl Parlor for a midnight bareback session!",
        "targetNodeId": 23,
        "sexPoints": 436,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false,
        "missesPrep": false
      },
      {
        "text": "🛡️ At Mission Disco Vinyl Parlor, pull a latex barrier from your pouch for a safe, sensual session inside Mission Disco Vinyl Parlor.",
        "targetNodeId": 23,
        "sexPoints": 292,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "🤝 Exchange a warm hug and align on relationship boundaries at Mission Disco Vinyl Parlor.",
        "targetNodeId": 23,
        "sexPoints": 354,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Mission Disco Vinyl Parlor"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 23,
    "act": "ACT I: MISSION NOCTURNE",
    "neighborhood": "Duboce Park Sun Meadow",
    "image": "./images/mission_loft.jpg",
    "narrative": "The energy inside Duboce Park Sun Meadow is intoxicating. Lush grass meadow filled with sunbathers, dogs, and organic tea stands. Friends and lovers gather under dim crimson lights to share intimate confessions and plan their next adventure.",
    "choices": [
      {
        "text": "🔥 At Duboce Park Sun Meadow, lift your partner onto the mahogany counter at Duboce Park Sun Meadow for an intense bareback encounter!",
        "targetNodeId": 24,
        "sexPoints": 439,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false,
        "missesPrep": false
      },
      {
        "text": "🛡️ At Duboce Park Sun Meadow, pull a latex barrier from your pouch for a safe, sensual session inside Duboce Park Sun Meadow.",
        "targetNodeId": 24,
        "sexPoints": 293,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "🍷 Sip mezcal with your partner while agreeing on fluid-bonding rules at Duboce Park Sun Meadow.",
        "targetNodeId": 24,
        "sexPoints": 356,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Duboce Park Sun Meadow"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 24,
    "act": "ACT I: MISSION NOCTURNE",
    "neighborhood": "Valencia Rooftop Fire Pit",
    "image": "./images/castro_rooftop.jpg",
    "narrative": "The energy inside Valencia Rooftop Fire Pit is intoxicating. Crackling wood fire pit with panoramic night views of the Mission. Friends and lovers gather under dim crimson lights to share intimate confessions and plan their next adventure.",
    "choices": [
      {
        "text": "🔥 At Valencia Rooftop Fire Pit, lose yourself in heat and sweat on the padded benches of Valencia Rooftop Fire Pit!",
        "targetNodeId": 25,
        "sexPoints": 442,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false,
        "missesPrep": true
      },
      {
        "text": "🛡️ At Valencia Rooftop Fire Pit, pull a latex barrier from your pouch for a safe, sensual session inside Valencia Rooftop Fire Pit.",
        "targetNodeId": 25,
        "sexPoints": 294,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💬 Sit together on the velvet cushions at Valencia Rooftop Fire Pit for an honest consent check-in.",
        "targetNodeId": 25,
        "sexPoints": 358,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Valencia Rooftop Fire Pit"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 25,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "BART Embarcadero Transit Crossing",
    "image": "./images/oakland_bart.jpg",
    "narrative": "You board the silver BART train under Market Street. The train roars through the dark tube beneath San Francisco Bay. Emerging into warm sunlight in Downtown Oakland, Kai, an East Bay poly educator with an infectious laugh, greets you at the station barrier.",
    "choices": [
      {
        "text": "🌉 Follow Kai to the Telegraph Avenue Intimacy Workshop and acquire the East Bay Intimacy Pact!",
        "targetNodeId": 27,
        "sexPoints": 200,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true,
        "grantsItem": "poly_intimacy_pact",
        "completesQuest": "oakland"
      },
      {
        "text": "🍸 Head to the Grand Lake Theater Speakeasy Parlor for flaming craft mezcal cocktails.",
        "targetNodeId": 28,
        "sexPoints": 160,
        "riskLevel": "none",
        "actType": "investigate",
        "isIngroup": true
      },
      {
        "text": "🌲 Take an express bus to the Berkeley Hills Redwood Chalet Poly Commune.",
        "targetNodeId": 32,
        "sexPoints": 180,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      }
    ],
    "isTransitHub": true
  },
  {
    "id": 26,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "Grand Lake Theater Speakeasy",
    "image": "./images/fox_theater_oakland.jpg",
    "narrative": "Oakland's vibrant art and polyamorous energy comes alive at Grand Lake Theater Speakeasy. Hidden cocktail bar concealed behind a velvet curtain near the movie screen. Deep consent discussions and playful sparks fill the air.",
    "choices": [
      {
        "text": "🔥 At Grand Lake Theater Speakeasy, unbutton your shirt and press your partner against the brick wall of Grand Lake Theater Speakeasy in a haze of heat!",
        "targetNodeId": 27,
        "sexPoints": 462,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ Put on a latex barrier for a safe, sensual session at Grand Lake Theater Speakeasy.",
        "targetNodeId": 27,
        "sexPoints": 316,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "📜 Draft an intimacy agreement covering health disclosures while relaxing at Grand Lake Theater Speakeasy.",
        "targetNodeId": 27,
        "sexPoints": 356,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Grand Lake Theater Speakeasy"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 27,
    "act": "ACT II: TELEGRAPH INTIMACY WORKSHOP",
    "neighborhood": "Telegraph Avenue Intimacy Workshop",
    "image": "./images/telegraph_workshop.jpg",
    "narrative": "Inside a sunlit loft on Telegraph Avenue, fifteen East Bay practitioners sit on meditation cushions. Kai leads a workshop on radical consent and emotional vulnerability, handing you the East Bay Poly Intimacy Pact!",
    "choices": [
      {
        "text": "📜 Sign the East Bay Intimacy Pact and welcome Kai into your Bay Area polycule network!",
        "targetNodeId": 32,
        "sexPoints": 350,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Kai the East Bay Educator",
        "grantsItem": "poly_intimacy_pact",
        "completesQuest": "oakland"
      },
      {
        "text": "💋 Step into Kai's private studio room for an intense, post-workshop hookup!",
        "targetNodeId": 33,
        "sexPoints": 460,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 28,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "Telegraph Art Murals Courtyard",
    "image": "./images/telegraph_workshop.jpg",
    "narrative": "Oakland's vibrant art and polyamorous energy comes alive at Telegraph Art Murals Courtyard. Outdoor mural gallery displaying East Bay radical community art. Deep consent discussions and playful sparks fill the air.",
    "choices": [
      {
        "text": "🔥 At Telegraph Art Murals Courtyard, lift your partner onto the mahogany counter at Telegraph Art Murals Courtyard for an intense bareback encounter!",
        "targetNodeId": 29,
        "sexPoints": 466,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Telegraph Art Murals Courtyard, put on a latex barrier for a safe, sensual session at Telegraph Art Murals Courtyard.",
        "targetNodeId": 29,
        "sexPoints": 318,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "🍷 Sip mezcal with your partner while agreeing on fluid-bonding rules at Telegraph Art Murals Courtyard.",
        "targetNodeId": 29,
        "sexPoints": 358,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Telegraph Art Murals Courtyard"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 29,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "Oakland Polycule Co-Op Kitchen",
    "image": "./images/jack_london_square.jpg",
    "narrative": "Oakland's vibrant art and polyamorous energy comes alive at Oakland Polycule Co-Op Kitchen. Spacious communal kitchen filled with scents of roasted spices and fresh bread. Deep consent discussions and playful sparks fill the air.",
    "choices": [
      {
        "text": "🔥 At Oakland Polycule Co-Op Kitchen, lose yourself in heat and sweat on the padded benches of Oakland Polycule Co-Op Kitchen!",
        "targetNodeId": 30,
        "sexPoints": 468,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Oakland Polycule Co-Op Kitchen, put on a latex barrier for a safe, sensual session at Oakland Polycule Co-Op Kitchen.",
        "targetNodeId": 30,
        "sexPoints": 319,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💬 Sit together on the velvet cushions at Oakland Polycule Co-Op Kitchen for an honest consent check-in.",
        "targetNodeId": 30,
        "sexPoints": 359,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Oakland Polycule Co-Op Kitchen"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 30,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "Berkeley Commune Library Study",
    "image": "./images/berkeley_commune.jpg",
    "narrative": "Oakland's vibrant art and polyamorous energy comes alive at Berkeley Commune Library Study. Cozy wood-paneled study filled with books on open relationships and ethics. Deep consent discussions and playful sparks fill the air.",
    "choices": [
      {
        "text": "🔥 At Berkeley Commune Library Study, pull your partner close against the leather couch at Berkeley Commune Library Study for a raw bareback hookup!",
        "targetNodeId": 31,
        "sexPoints": 470,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Berkeley Commune Library Study, put on a latex barrier for a safe, sensual session at Berkeley Commune Library Study.",
        "targetNodeId": 31,
        "sexPoints": 320,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 Toast champagne flutes and welcome your new partner into the polycule circle at Berkeley Commune Library Study!",
        "targetNodeId": 31,
        "sexPoints": 360,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Berkeley Commune Library Study"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 31,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "Redwood Regional Park Forest Trail",
    "image": "./images/berkeley_telegraph.jpg",
    "narrative": "Oakland's vibrant art and polyamorous energy comes alive at Redwood Regional Park Forest Trail. Towering redwood canopy filtered by golden morning sunbeams. Deep consent discussions and playful sparks fill the air.",
    "choices": [
      {
        "text": "🔥 At Redwood Regional Park Forest Trail, unbutton your shirt and press your partner against the brick wall of Redwood Regional Park Forest Trail in a haze of heat!",
        "targetNodeId": 32,
        "sexPoints": 472,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Redwood Regional Park Forest Trail, put on a latex barrier for a safe, sensual session at Redwood Regional Park Forest Trail.",
        "targetNodeId": 32,
        "sexPoints": 321,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "📜 Draft an intimacy agreement covering health disclosures while relaxing at Redwood Regional Park Forest Trail.",
        "targetNodeId": 32,
        "sexPoints": 361,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Redwood Regional Park Forest Trail"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 32,
    "act": "ACT II: BERKELEY REDWOOD COMMUNE",
    "neighborhood": "Berkeley Hills Redwood Chalet",
    "image": "./images/berkeley_commune.jpg",
    "narrative": "A sprawling redwood chalet overlooking San Francisco Bay. Eight polycule members gather around an outdoor cedar hot tub under coastal pines while acoustic music plays softly.",
    "choices": [
      {
        "text": "🛁 Slip into the bubbling cedar hot tub for a multi-partner fluid-bonded play session!",
        "targetNodeId": 33,
        "sexPoints": 580,
        "riskLevel": "medium",
        "actType": "vaginal",
        "isIngroup": true
      },
      {
        "text": "💊 Review PrEP adherence schedules and distribute Doxy-PEP doses to all commune members.",
        "targetNodeId": 8,
        "sexPoints": 130,
        "riskLevel": "none",
        "actType": "clinic",
        "isIngroup": true
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 33,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "Jack London Waterfront Pier",
    "image": "./images/jack_london_square.jpg",
    "narrative": "Oakland's vibrant art and polyamorous energy comes alive at Jack London Waterfront Pier. Estuary pier watching glowing cargo ships glide past under starry skies. Deep consent discussions and playful sparks fill the air.",
    "choices": [
      {
        "text": "🔥 At Jack London Waterfront Pier, lift your partner onto the mahogany counter at Jack London Waterfront Pier for an intense bareback encounter!",
        "targetNodeId": 34,
        "sexPoints": 476,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Jack London Waterfront Pier, put on a latex barrier for a safe, sensual session at Jack London Waterfront Pier.",
        "targetNodeId": 34,
        "sexPoints": 323,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "🍷 Sip mezcal with your partner while agreeing on fluid-bonding rules at Jack London Waterfront Pier.",
        "targetNodeId": 34,
        "sexPoints": 363,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Jack London Waterfront Pier"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 34,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "Oakland Underground Soundstage",
    "image": "./images/lake_merritt.jpg",
    "narrative": "Oakland's vibrant art and polyamorous energy comes alive at Oakland Underground Soundstage. Warehouse space vibrating with deep techno bass and laser lights. Deep consent discussions and playful sparks fill the air.",
    "choices": [
      {
        "text": "🔥 At Oakland Underground Soundstage, lose yourself in heat and sweat on the padded benches of Oakland Underground Soundstage!",
        "targetNodeId": 35,
        "sexPoints": 478,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Oakland Underground Soundstage, put on a latex barrier for a safe, sensual session at Oakland Underground Soundstage.",
        "targetNodeId": 35,
        "sexPoints": 324,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💬 Sit together on the velvet cushions at Oakland Underground Soundstage for an honest consent check-in.",
        "targetNodeId": 35,
        "sexPoints": 364,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Oakland Underground Soundstage"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 35,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "Uptown Oakland Velvet Lounge",
    "image": "./images/grand_lake_speakeasy.jpg",
    "narrative": "Oakland's vibrant art and polyamorous energy comes alive at Uptown Oakland Velvet Lounge. Plush leather booths and vintage vinyl soul records playing. Deep consent discussions and playful sparks fill the air.",
    "choices": [
      {
        "text": "🔥 At Uptown Oakland Velvet Lounge, pull your partner close against the leather couch at Uptown Oakland Velvet Lounge for a raw bareback hookup!",
        "targetNodeId": 36,
        "sexPoints": 480,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Uptown Oakland Velvet Lounge, put on a latex barrier for a safe, sensual session at Uptown Oakland Velvet Lounge.",
        "targetNodeId": 36,
        "sexPoints": 325,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 Toast champagne flutes and welcome your new partner into the polycule circle at Uptown Oakland Velvet Lounge!",
        "targetNodeId": 36,
        "sexPoints": 365,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Uptown Oakland Velvet Lounge"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 36,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "Berkeley Hills Telescope Deck",
    "image": "./images/berkeley_commune.jpg",
    "narrative": "Oakland's vibrant art and polyamorous energy comes alive at Berkeley Hills Telescope Deck. High-altitude deck equipped with a telescope overlooking the Bay Bridge. Deep consent discussions and playful sparks fill the air.",
    "choices": [
      {
        "text": "🔥 At Berkeley Hills Telescope Deck, unbutton your shirt and press your partner against the brick wall of Berkeley Hills Telescope Deck in a haze of heat!",
        "targetNodeId": 37,
        "sexPoints": 482,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Berkeley Hills Telescope Deck, put on a latex barrier for a safe, sensual session at Berkeley Hills Telescope Deck.",
        "targetNodeId": 37,
        "sexPoints": 326,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "📜 Draft an intimacy agreement covering health disclosures while relaxing at Berkeley Hills Telescope Deck.",
        "targetNodeId": 37,
        "sexPoints": 366,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Berkeley Hills Telescope Deck"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 37,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "Fruitvale Cultural Art Center",
    "image": "./images/jack_london_square.jpg",
    "narrative": "Oakland's vibrant art and polyamorous energy comes alive at Fruitvale Cultural Art Center. Vibrant gallery showcasing Latinx queer artists and live music. Deep consent discussions and playful sparks fill the air.",
    "choices": [
      {
        "text": "🔥 At Fruitvale Cultural Art Center, slide beneath the warm blankets at Fruitvale Cultural Art Center for a midnight bareback session!",
        "targetNodeId": 38,
        "sexPoints": 484,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Fruitvale Cultural Art Center, put on a latex barrier for a safe, sensual session at Fruitvale Cultural Art Center.",
        "targetNodeId": 38,
        "sexPoints": 327,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "🤝 Exchange a warm hug and align on relationship boundaries at Fruitvale Cultural Art Center.",
        "targetNodeId": 38,
        "sexPoints": 367,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Fruitvale Cultural Art Center"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 38,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "Piedmont Avenue Tea Sanctuary",
    "image": "./images/berkeley_commune.jpg",
    "narrative": "Oakland's vibrant art and polyamorous energy comes alive at Piedmont Avenue Tea Sanctuary. Peaceful Japanese tea garden with bamboo fountains and koi ponds. Deep consent discussions and playful sparks fill the air.",
    "choices": [
      {
        "text": "🔥 At Piedmont Avenue Tea Sanctuary, lift your partner onto the mahogany counter at Piedmont Avenue Tea Sanctuary for an intense bareback encounter!",
        "targetNodeId": 39,
        "sexPoints": 486,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Piedmont Avenue Tea Sanctuary, put on a latex barrier for a safe, sensual session at Piedmont Avenue Tea Sanctuary.",
        "targetNodeId": 39,
        "sexPoints": 328,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "🍷 Sip mezcal with your partner while agreeing on fluid-bonding rules at Piedmont Avenue Tea Sanctuary.",
        "targetNodeId": 39,
        "sexPoints": 368,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Piedmont Avenue Tea Sanctuary"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 39,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "Oakland Greenhouse Solarium",
    "image": "./images/berkeley_telegraph.jpg",
    "narrative": "Oakland's vibrant art and polyamorous energy comes alive at Oakland Greenhouse Solarium. Humid glass conservatory filled with tropical orchids and plush lounges. Deep consent discussions and playful sparks fill the air.",
    "choices": [
      {
        "text": "🔥 At Oakland Greenhouse Solarium, lose yourself in heat and sweat on the padded benches of Oakland Greenhouse Solarium!",
        "targetNodeId": 40,
        "sexPoints": 488,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Oakland Greenhouse Solarium, put on a latex barrier for a safe, sensual session at Oakland Greenhouse Solarium.",
        "targetNodeId": 40,
        "sexPoints": 329,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💬 Sit together on the velvet cushions at Oakland Greenhouse Solarium for an honest consent check-in.",
        "targetNodeId": 40,
        "sexPoints": 369,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Oakland Greenhouse Solarium"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 40,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "Berkeley Redwood Cabin Loft",
    "image": "./images/berkeley_commune.jpg",
    "narrative": "Oakland's vibrant art and polyamorous energy comes alive at Berkeley Redwood Cabin Loft. Rustic wood-burning stove warming a cozy loft under the pine trees. Deep consent discussions and playful sparks fill the air.",
    "choices": [
      {
        "text": "🔥 At Berkeley Redwood Cabin Loft, pull your partner close against the leather couch at Berkeley Redwood Cabin Loft for a raw bareback hookup!",
        "targetNodeId": 41,
        "sexPoints": 490,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Berkeley Redwood Cabin Loft, put on a latex barrier for a safe, sensual session at Berkeley Redwood Cabin Loft.",
        "targetNodeId": 41,
        "sexPoints": 330,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 Toast champagne flutes and welcome your new partner into the polycule circle at Berkeley Redwood Cabin Loft!",
        "targetNodeId": 41,
        "sexPoints": 370,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Berkeley Redwood Cabin Loft"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 41,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "Lake Merritt Boathouse Terrace",
    "image": "./images/lake_merritt.jpg",
    "narrative": "Oakland's vibrant art and polyamorous energy comes alive at Lake Merritt Boathouse Terrace. Nighttime pedal boat rentals gliding across tranquil waters. Deep consent discussions and playful sparks fill the air.",
    "choices": [
      {
        "text": "🔥 At Lake Merritt Boathouse Terrace, unbutton your shirt and press your partner against the brick wall of Lake Merritt Boathouse Terrace in a haze of heat!",
        "targetNodeId": 42,
        "sexPoints": 492,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Lake Merritt Boathouse Terrace, put on a latex barrier for a safe, sensual session at Lake Merritt Boathouse Terrace.",
        "targetNodeId": 42,
        "sexPoints": 331,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "📜 Draft an intimacy agreement covering health disclosures while relaxing at Lake Merritt Boathouse Terrace.",
        "targetNodeId": 42,
        "sexPoints": 371,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Lake Merritt Boathouse Terrace"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 42,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "Telegraph Avenue Synth Lab",
    "image": "./images/telegraph_workshop.jpg",
    "narrative": "Oakland's vibrant art and polyamorous energy comes alive at Telegraph Avenue Synth Lab. Modular synthesizer studio where electronic artists craft ambient soundscapes. Deep consent discussions and playful sparks fill the air.",
    "choices": [
      {
        "text": "🔥 At Telegraph Avenue Synth Lab, slide beneath the warm blankets at Telegraph Avenue Synth Lab for a midnight bareback session!",
        "targetNodeId": 43,
        "sexPoints": 494,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Telegraph Avenue Synth Lab, put on a latex barrier for a safe, sensual session at Telegraph Avenue Synth Lab.",
        "targetNodeId": 43,
        "sexPoints": 332,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "🤝 Exchange a warm hug and align on relationship boundaries at Telegraph Avenue Synth Lab.",
        "targetNodeId": 43,
        "sexPoints": 372,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Telegraph Avenue Synth Lab"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 43,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "Grand Lake Rooftop Garden",
    "image": "./images/grand_lake_speakeasy.jpg",
    "narrative": "Oakland's vibrant art and polyamorous energy comes alive at Grand Lake Rooftop Garden. Private rooftop garden offering panoramic evening views of Lake Merritt. Deep consent discussions and playful sparks fill the air.",
    "choices": [
      {
        "text": "🔥 At Grand Lake Rooftop Garden, lift your partner onto the mahogany counter at Grand Lake Rooftop Garden for an intense bareback encounter!",
        "targetNodeId": 44,
        "sexPoints": 496,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Grand Lake Rooftop Garden, put on a latex barrier for a safe, sensual session at Grand Lake Rooftop Garden.",
        "targetNodeId": 44,
        "sexPoints": 333,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "🍷 Sip mezcal with your partner while agreeing on fluid-bonding rules at Grand Lake Rooftop Garden.",
        "targetNodeId": 44,
        "sexPoints": 373,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Grand Lake Rooftop Garden"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 44,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "East Bay Harm Reduction Collective",
    "image": "./images/temescal_alley.jpg",
    "narrative": "Oakland's vibrant art and polyamorous energy comes alive at East Bay Harm Reduction Collective. Volunteer hub packaging safer-sex kits and barrier supplies. Deep consent discussions and playful sparks fill the air.",
    "choices": [
      {
        "text": "🔥 At East Bay Harm Reduction Collective, lose yourself in heat and sweat on the padded benches of East Bay Harm Reduction Collective!",
        "targetNodeId": 45,
        "sexPoints": 498,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At East Bay Harm Reduction Collective, put on a latex barrier for a safe, sensual session at East Bay Harm Reduction Collective.",
        "targetNodeId": 45,
        "sexPoints": 334,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💬 Sit together on the velvet cushions at East Bay Harm Reduction Collective for an honest consent check-in.",
        "targetNodeId": 45,
        "sexPoints": 374,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at East Bay Harm Reduction Collective"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 45,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "Oakland West BART Return Platform",
    "image": "./images/oakland_bart.jpg",
    "narrative": "Oakland's vibrant art and polyamorous energy comes alive at Oakland West BART Return Platform. BART platform illuminated by night lights as trains head back to SF. Deep consent discussions and playful sparks fill the air.",
    "choices": [
      {
        "text": "🔥 At Oakland West BART Return Platform, pull your partner close against the leather couch at Oakland West BART Return Platform for a raw bareback hookup!",
        "targetNodeId": 46,
        "sexPoints": 500,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Oakland West BART Return Platform, put on a latex barrier for a safe, sensual session at Oakland West BART Return Platform.",
        "targetNodeId": 46,
        "sexPoints": 335,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 Toast champagne flutes and welcome your new partner into the polycule circle at Oakland West BART Return Platform!",
        "targetNodeId": 46,
        "sexPoints": 375,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Oakland West BART Return Platform"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 46,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "12th Street Oakland Plaza",
    "image": "./images/oakland_bart.jpg",
    "narrative": "Oakland's vibrant art and polyamorous energy comes alive at 12th Street Oakland Plaza. Open plaza filled with food trucks, street musicians, and warm sunlight. Deep consent discussions and playful sparks fill the air.",
    "choices": [
      {
        "text": "🔥 At 12th Street Oakland Plaza, unbutton your shirt and press your partner against the brick wall of 12th Street Oakland Plaza in a haze of heat!",
        "targetNodeId": 47,
        "sexPoints": 502,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At 12th Street Oakland Plaza, put on a latex barrier for a safe, sensual session at 12th Street Oakland Plaza.",
        "targetNodeId": 47,
        "sexPoints": 336,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "📜 Draft an intimacy agreement covering health disclosures while relaxing at 12th Street Oakland Plaza.",
        "targetNodeId": 47,
        "sexPoints": 376,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at 12th Street Oakland Plaza"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 47,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "Grand Lake Theater Speakeasy",
    "image": "./images/fox_theater_oakland.jpg",
    "narrative": "Oakland's vibrant art and polyamorous energy comes alive at Grand Lake Theater Speakeasy. Hidden cocktail bar concealed behind a velvet curtain near the movie screen. Deep consent discussions and playful sparks fill the air.",
    "choices": [
      {
        "text": "🔥 At Grand Lake Theater Speakeasy, slide beneath the warm blankets at Grand Lake Theater Speakeasy for a midnight bareback session!",
        "targetNodeId": 48,
        "sexPoints": 504,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Grand Lake Theater Speakeasy, put on a latex barrier for a safe, sensual session at Grand Lake Theater Speakeasy. [Grand Lake Theater Speakeasy]",
        "targetNodeId": 48,
        "sexPoints": 337,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "🤝 Exchange a warm hug and align on relationship boundaries at Grand Lake Theater Speakeasy.",
        "targetNodeId": 48,
        "sexPoints": 377,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Grand Lake Theater Speakeasy"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 48,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "Lake Merritt Pergola Promenade",
    "image": "./images/lake_merritt.jpg",
    "narrative": "Oakland's vibrant art and polyamorous energy comes alive at Lake Merritt Pergola Promenade. Illuminated shoreline path decorated with glowing fairy lights. Deep consent discussions and playful sparks fill the air.",
    "choices": [
      {
        "text": "🔥 At Lake Merritt Pergola Promenade, lift your partner onto the mahogany counter at Lake Merritt Pergola Promenade for an intense bareback encounter!",
        "targetNodeId": 49,
        "sexPoints": 506,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Lake Merritt Pergola Promenade, put on a latex barrier for a safe, sensual session at Lake Merritt Pergola Promenade.",
        "targetNodeId": 49,
        "sexPoints": 338,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "🍷 Sip mezcal with your partner while agreeing on fluid-bonding rules at Lake Merritt Pergola Promenade.",
        "targetNodeId": 49,
        "sexPoints": 378,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Lake Merritt Pergola Promenade"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 49,
    "act": "ACT II: OAKLAND DAY-TRIP",
    "neighborhood": "Telegraph Art Murals Courtyard",
    "image": "./images/telegraph_workshop.jpg",
    "narrative": "Oakland's vibrant art and polyamorous energy comes alive at Telegraph Art Murals Courtyard. Outdoor mural gallery displaying East Bay radical community art. Deep consent discussions and playful sparks fill the air.",
    "choices": [
      {
        "text": "🔥 At Telegraph Art Murals Courtyard, lose yourself in heat and sweat on the padded benches of Telegraph Art Murals Courtyard!",
        "targetNodeId": 50,
        "sexPoints": 508,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Telegraph Art Murals Courtyard, put on a latex barrier for a safe, sensual session at Telegraph Art Murals Courtyard. [Telegraph Art Murals Courtyard]",
        "targetNodeId": 50,
        "sexPoints": 339,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💬 Sit together on the velvet cushions at Telegraph Art Murals Courtyard for an honest consent check-in.",
        "targetNodeId": 50,
        "sexPoints": 379,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Telegraph Art Murals Courtyard"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 50,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "SoMa 10th Street Transit Hub",
    "image": "./images/lake_merritt.jpg",
    "narrative": "Returning across the Bay, San Francisco's SoMa district pulsates with heavy industrial bass and neon signs. Flashing motorcycle headlights pierce through ambient fog as partygoers converge on Folsom and Dore Alley.",
    "choices": [
      {
        "text": "🎟️ Show your silver-embossed VIP Wristband to enter the subterranean Dore Alley Speakeasy!",
        "targetNodeId": 55,
        "sexPoints": 520,
        "riskLevel": "medium",
        "actType": "investigate",
        "isIngroup": false,
        "requiresItem": "vip_soma_wristband"
      },
      {
        "text": "♨️ Walk into SoMa Steamworks Bathhouse for a steamy cedar sauna session.",
        "targetNodeId": 58,
        "sexPoints": 400,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "⛓️ At SoMa 10th Street Transit Hub, travel to Armory Kink Castle Dungeon to inspect the suspension vaults.",
        "targetNodeId": 62,
        "sexPoints": 300,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      }
    ],
    "isTransitHub": true
  },
  {
    "id": 51,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "Folsom Leather Corner Stage",
    "image": "./images/grand_lake_speakeasy.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at Folsom Leather Corner Stage. Stage showcasing custom leather harnesses and gear craft. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At Folsom Leather Corner Stage, unbutton your shirt and press your partner against the brick wall of Folsom Leather Corner Stage in a haze of heat!",
        "targetNodeId": 52,
        "sexPoints": 532,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ Use a latex condom for a safe, sensual session inside Folsom Leather Corner Stage.",
        "targetNodeId": 52,
        "sexPoints": 361,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 Invite a trusted SoMa partner from Folsom Leather Corner Stage into your polycule network!",
        "targetNodeId": 52,
        "sexPoints": 401,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Folsom Leather Corner Stage"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 52,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "Folsom VIP Play Pen",
    "image": "./images/temescal_alley.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at Folsom VIP Play Pen. Enclosed outdoor play arena equipped with padded benches. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At Folsom VIP Play Pen, slide beneath the warm blankets at Folsom VIP Play Pen for a midnight bareback session!",
        "targetNodeId": 53,
        "sexPoints": 534,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Folsom VIP Play Pen, use a latex condom for a safe, sensual session inside Folsom VIP Play Pen.",
        "targetNodeId": 53,
        "sexPoints": 362,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Folsom VIP Play Pen, invite a trusted SoMa partner from Folsom VIP Play Pen into your polycule network!",
        "targetNodeId": 53,
        "sexPoints": 402,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Folsom VIP Play Pen"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 53,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "Dore Alley Brick Archway",
    "image": "./images/temescal_alley.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at Dore Alley Brick Archway. Dark brick alleyway humming with industrial techno and fog machines. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At Dore Alley Brick Archway, lift your partner onto the mahogany counter at Dore Alley Brick Archway for an intense bareback encounter!",
        "targetNodeId": 54,
        "sexPoints": 536,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Dore Alley Brick Archway, use a latex condom for a safe, sensual session inside Dore Alley Brick Archway.",
        "targetNodeId": 54,
        "sexPoints": 363,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Dore Alley Brick Archway, invite a trusted SoMa partner from Dore Alley Brick Archway into your polycule network!",
        "targetNodeId": 54,
        "sexPoints": 403,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Dore Alley Brick Archway"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 54,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "Speakeasy Velvet Chaise Lounge",
    "image": "./images/grand_lake_speakeasy.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at Speakeasy Velvet Chaise Lounge. Opulent velvet lounge decorated with vintage mirrors and champagne ice buckets. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At Speakeasy Velvet Chaise Lounge, lose yourself in heat and sweat on the padded benches of Speakeasy Velvet Chaise Lounge!",
        "targetNodeId": 55,
        "sexPoints": 538,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Speakeasy Velvet Chaise Lounge, use a latex condom for a safe, sensual session inside Speakeasy Velvet Chaise Lounge.",
        "targetNodeId": 55,
        "sexPoints": 364,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Speakeasy Velvet Chaise Lounge, invite a trusted SoMa partner from Speakeasy Velvet Chaise Lounge into your polycule network!",
        "targetNodeId": 55,
        "sexPoints": 404,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Speakeasy Velvet Chaise Lounge"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 55,
    "act": "ACT III: DORE ALLEY SPEAKEASY CELLAR",
    "neighborhood": "Subterranean Dore Alley Speakeasy",
    "image": "./images/temescal_alley.jpg",
    "narrative": "Flashing your silver-embossed black VIP Wristband opens a hidden heavy oak door below Dore Alley. Down polished stone steps lies an exclusive subterranean speakeasy with crystal chandeliers, velvet lounges, and champagne bars.",
    "choices": [
      {
        "text": "🍾 Lounge on the velvet chaise with the speakeasy host for an uninhibited private room session!",
        "targetNodeId": 56,
        "sexPoints": 580,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ Unroll a condom quickly as pulse-pounding sub-bass echoes across Subterranean Dore Alley Speakeasy.",
        "targetNodeId": 56,
        "sexPoints": 380,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true,
        "grantsItem": "doxy_pouch"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 56,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "SoMa Steamworks Reception",
    "image": "./images/telegraph_workshop.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at SoMa Steamworks Reception. Keycard check-in desk providing fresh towels and locker keys. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At SoMa Steamworks Reception, unbutton your shirt and press your partner against the brick wall of SoMa Steamworks Reception in a haze of heat!",
        "targetNodeId": 57,
        "sexPoints": 542,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At SoMa Steamworks Reception, use a latex condom for a safe, sensual session inside SoMa Steamworks Reception.",
        "targetNodeId": 57,
        "sexPoints": 366,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At SoMa Steamworks Reception, invite a trusted SoMa partner from SoMa Steamworks Reception into your polycule network!",
        "targetNodeId": 57,
        "sexPoints": 406,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at SoMa Steamworks Reception"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 57,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "SoMa Steamworks Plunge Pool",
    "image": "./images/fox_theater_oakland.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at SoMa Steamworks Plunge Pool. Chilled plunge pool surrounded by cedar benches and cucumber water. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At SoMa Steamworks Plunge Pool, slide beneath the warm blankets at SoMa Steamworks Plunge Pool for a midnight bareback session!",
        "targetNodeId": 58,
        "sexPoints": 544,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At SoMa Steamworks Plunge Pool, use a latex condom for a safe, sensual session inside SoMa Steamworks Plunge Pool.",
        "targetNodeId": 58,
        "sexPoints": 367,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At SoMa Steamworks Plunge Pool, invite a trusted SoMa partner from SoMa Steamworks Plunge Pool into your polycule network!",
        "targetNodeId": 58,
        "sexPoints": 407,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at SoMa Steamworks Plunge Pool"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 58,
    "act": "ACT III: SOMA STEAMWORKS SAUNA",
    "neighborhood": "SoMa Bathhouse Steamroom",
    "image": "./images/lake_merritt.jpg",
    "narrative": "Thick cedar steam rolls across private sauna cabins. Julian, a sculpted Castro gym instructor, drops his towel onto the bench, his sweat-glistening chest rising and falling in rhythm to ambient synth beats.",
    "choices": [
      {
        "text": "💦 Sit beside Julian on the top cedar bench for an intense, steamy bareback session!",
        "targetNodeId": 59,
        "sexPoints": 500,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false,
        "missesPrep": true
      },
      {
        "text": "🛡️ Unwrap a condom from your locker pouch before sliding onto the bench next to Julian.",
        "targetNodeId": 59,
        "sexPoints": 320,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 59,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "Armory Fortress Master Gate",
    "image": "./images/grand_lake_speakeasy.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at Armory Fortress Master Gate. Historic castle gate entry with massive iron doors. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At Armory Fortress Master Gate, lose yourself in heat and sweat on the padded benches of Armory Fortress Master Gate!",
        "targetNodeId": 60,
        "sexPoints": 548,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Armory Fortress Master Gate, use a latex condom for a safe, sensual session inside Armory Fortress Master Gate.",
        "targetNodeId": 60,
        "sexPoints": 369,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Armory Fortress Master Gate, invite a trusted SoMa partner from Armory Fortress Master Gate into your polycule network!",
        "targetNodeId": 60,
        "sexPoints": 409,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Armory Fortress Master Gate"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 60,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "Armory Leather Bench Corridor",
    "image": "./images/temescal_alley.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at Armory Leather Bench Corridor. Play benches equipped with leather restraints and safety check stations. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At Armory Leather Bench Corridor, pull your partner close against the leather couch at Armory Leather Bench Corridor for a raw bareback hookup!",
        "targetNodeId": 61,
        "sexPoints": 550,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Armory Leather Bench Corridor, use a latex condom for a safe, sensual session inside Armory Leather Bench Corridor.",
        "targetNodeId": 61,
        "sexPoints": 370,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Armory Leather Bench Corridor, invite a trusted SoMa partner from Armory Leather Bench Corridor into your polycule network!",
        "targetNodeId": 61,
        "sexPoints": 410,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Armory Leather Bench Corridor"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 61,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "SoMa Industrial Rooftop Garden",
    "image": "./images/jack_london_square.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at SoMa Industrial Rooftop Garden. Urban oasis overlooking the neon cityscape of SoMa. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At SoMa Industrial Rooftop Garden, unbutton your shirt and press your partner against the brick wall of SoMa Industrial Rooftop Garden in a haze of heat!",
        "targetNodeId": 62,
        "sexPoints": 552,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At SoMa Industrial Rooftop Garden, use a latex condom for a safe, sensual session inside SoMa Industrial Rooftop Garden.",
        "targetNodeId": 62,
        "sexPoints": 371,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At SoMa Industrial Rooftop Garden, invite a trusted SoMa partner from SoMa Industrial Rooftop Garden into your polycule network!",
        "targetNodeId": 62,
        "sexPoints": 411,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at SoMa Industrial Rooftop Garden"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 62,
    "act": "ACT III: ARMORY MASTER VAULT",
    "neighborhood": "Armory Kink Castle Dungeon",
    "image": "./images/berkeley_commune.jpg",
    "narrative": "Inside the red-brick fortress of the Armory, heavy velvet drapes isolate the private master vault. Unlocking the vault door with the `armory_master_key`, Sienna welcomes you to an exclusive suspension rope play session.",
    "choices": [
      {
        "text": "⛓️ Surrender to Sienna's master rope ties suspended from the iron vault ceiling!",
        "targetNodeId": 63,
        "sexPoints": 640,
        "riskLevel": "high",
        "actType": "action",
        "isIngroup": false,
        "requiresItem": "armory_master_key"
      },
      {
        "text": "🛡️ Confirm safe-words and use latex gloves for precision rope play on the main floor.",
        "targetNodeId": 63,
        "sexPoints": 360,
        "riskLevel": "low",
        "actType": "skin",
        "isIngroup": false,
        "usesCondom": true
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 63,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "Howard Street Speakeasy Courtyard",
    "image": "./images/grand_lake_speakeasy.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at Howard Street Speakeasy Courtyard. Secluded brick patio serving artisanal mezcal and craft cocktails. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At Howard Street Speakeasy Courtyard, lift your partner onto the mahogany counter at Howard Street Speakeasy Courtyard for an intense bareback encounter!",
        "targetNodeId": 64,
        "sexPoints": 556,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Howard Street Speakeasy Courtyard, use a latex condom for a safe, sensual session inside Howard Street Speakeasy Courtyard.",
        "targetNodeId": 64,
        "sexPoints": 373,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Howard Street Speakeasy Courtyard, invite a trusted SoMa partner from Howard Street Speakeasy Courtyard into your polycule network!",
        "targetNodeId": 64,
        "sexPoints": 413,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Howard Street Speakeasy Courtyard"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 64,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "SoMa After-Hours Soundcheck Loft",
    "image": "./images/telegraph_workshop.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at SoMa After-Hours Soundcheck Loft. Vibrant warehouse loft where local DJs play deep underground house. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At SoMa After-Hours Soundcheck Loft, lose yourself in heat and sweat on the padded benches of SoMa After-Hours Soundcheck Loft!",
        "targetNodeId": 65,
        "sexPoints": 558,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At SoMa After-Hours Soundcheck Loft, use a latex condom for a safe, sensual session inside SoMa After-Hours Soundcheck Loft.",
        "targetNodeId": 65,
        "sexPoints": 374,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At SoMa After-Hours Soundcheck Loft, invite a trusted SoMa partner from SoMa After-Hours Soundcheck Loft into your polycule network!",
        "targetNodeId": 65,
        "sexPoints": 414,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at SoMa After-Hours Soundcheck Loft"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 65,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "Harrison Street Art Gallery",
    "image": "./images/fox_theater_oakland.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at Harrison Street Art Gallery. Exhibition displaying radical queer erotic portraiture. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At Harrison Street Art Gallery, pull your partner close against the leather couch at Harrison Street Art Gallery for a raw bareback hookup!",
        "targetNodeId": 66,
        "sexPoints": 560,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Harrison Street Art Gallery, use a latex condom for a safe, sensual session inside Harrison Street Art Gallery.",
        "targetNodeId": 66,
        "sexPoints": 375,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Harrison Street Art Gallery, invite a trusted SoMa partner from Harrison Street Art Gallery into your polycule network!",
        "targetNodeId": 66,
        "sexPoints": 415,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Harrison Street Art Gallery"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 66,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "SoMa Polycule Co-Op Penthouse",
    "image": "./images/lake_merritt.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at SoMa Polycule Co-Op Penthouse. Spacious penthouse hosting a joint SF & East Bay polycule mixer. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At SoMa Polycule Co-Op Penthouse, unbutton your shirt and press your partner against the brick wall of SoMa Polycule Co-Op Penthouse in a haze of heat!",
        "targetNodeId": 67,
        "sexPoints": 562,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At SoMa Polycule Co-Op Penthouse, use a latex condom for a safe, sensual session inside SoMa Polycule Co-Op Penthouse.",
        "targetNodeId": 67,
        "sexPoints": 376,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At SoMa Polycule Co-Op Penthouse, invite a trusted SoMa partner from SoMa Polycule Co-Op Penthouse into your polycule network!",
        "targetNodeId": 67,
        "sexPoints": 416,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at SoMa Polycule Co-Op Penthouse"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 67,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "Folsom Street Photo Exhibition",
    "image": "./images/grand_lake_speakeasy.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at Folsom Street Photo Exhibition. Archival gallery showcasing 1970s San Francisco leather history. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At Folsom Street Photo Exhibition, slide beneath the warm blankets at Folsom Street Photo Exhibition for a midnight bareback session!",
        "targetNodeId": 68,
        "sexPoints": 564,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Folsom Street Photo Exhibition, use a latex condom for a safe, sensual session inside Folsom Street Photo Exhibition.",
        "targetNodeId": 68,
        "sexPoints": 377,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Folsom Street Photo Exhibition, invite a trusted SoMa partner from Folsom Street Photo Exhibition into your polycule network!",
        "targetNodeId": 68,
        "sexPoints": 417,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Folsom Street Photo Exhibition"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 68,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "SoMa Darkroom Sensory Tunnel",
    "image": "./images/temescal_alley.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at SoMa Darkroom Sensory Tunnel. Sensory play tunnel immersed in complete darkness and ambient bass. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At SoMa Darkroom Sensory Tunnel, lift your partner onto the mahogany counter at SoMa Darkroom Sensory Tunnel for an intense bareback encounter!",
        "targetNodeId": 69,
        "sexPoints": 566,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At SoMa Darkroom Sensory Tunnel, use a latex condom for a safe, sensual session inside SoMa Darkroom Sensory Tunnel.",
        "targetNodeId": 69,
        "sexPoints": 378,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At SoMa Darkroom Sensory Tunnel, invite a trusted SoMa partner from SoMa Darkroom Sensory Tunnel into your polycule network!",
        "targetNodeId": 69,
        "sexPoints": 418,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at SoMa Darkroom Sensory Tunnel"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 69,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "11th Street VIP Promoter Booth",
    "image": "./images/jack_london_square.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at 11th Street VIP Promoter Booth. VIP booth where nightlife organizers toast with cold champagne. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At 11th Street VIP Promoter Booth, lose yourself in heat and sweat on the padded benches of 11th Street VIP Promoter Booth!",
        "targetNodeId": 70,
        "sexPoints": 568,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At 11th Street VIP Promoter Booth, use a latex condom for a safe, sensual session inside 11th Street VIP Promoter Booth.",
        "targetNodeId": 70,
        "sexPoints": 379,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At 11th Street VIP Promoter Booth, invite a trusted SoMa partner from 11th Street VIP Promoter Booth into your polycule network!",
        "targetNodeId": 70,
        "sexPoints": 419,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at 11th Street VIP Promoter Booth"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 70,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "SoMa Midnight Taco Truck",
    "image": "./images/berkeley_commune.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at SoMa Midnight Taco Truck. Late-night street food stand surrounded by happy clubgoers. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At SoMa Midnight Taco Truck, pull your partner close against the leather couch at SoMa Midnight Taco Truck for a raw bareback hookup!",
        "targetNodeId": 71,
        "sexPoints": 570,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At SoMa Midnight Taco Truck, use a latex condom for a safe, sensual session inside SoMa Midnight Taco Truck.",
        "targetNodeId": 71,
        "sexPoints": 380,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At SoMa Midnight Taco Truck, invite a trusted SoMa partner from SoMa Midnight Taco Truck into your polycule network!",
        "targetNodeId": 71,
        "sexPoints": 420,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at SoMa Midnight Taco Truck"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 71,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "SoMa Acoustic Guitar Lounge",
    "image": "./images/berkeley_telegraph.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at SoMa Acoustic Guitar Lounge. Unplugged song circle featuring traveling polycule musicians. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At SoMa Acoustic Guitar Lounge, unbutton your shirt and press your partner against the brick wall of SoMa Acoustic Guitar Lounge in a haze of heat!",
        "targetNodeId": 72,
        "sexPoints": 572,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At SoMa Acoustic Guitar Lounge, use a latex condom for a safe, sensual session inside SoMa Acoustic Guitar Lounge.",
        "targetNodeId": 72,
        "sexPoints": 381,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At SoMa Acoustic Guitar Lounge, invite a trusted SoMa partner from SoMa Acoustic Guitar Lounge into your polycule network!",
        "targetNodeId": 72,
        "sexPoints": 421,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at SoMa Acoustic Guitar Lounge"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 72,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "Howard Leather Craft Studio",
    "image": "./images/telegraph_workshop.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at Howard Leather Craft Studio. Workshop bench for custom leather fittings and harness craft. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At Howard Leather Craft Studio, slide beneath the warm blankets at Howard Leather Craft Studio for a midnight bareback session!",
        "targetNodeId": 73,
        "sexPoints": 574,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Howard Leather Craft Studio, use a latex condom for a safe, sensual session inside Howard Leather Craft Studio.",
        "targetNodeId": 73,
        "sexPoints": 382,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Howard Leather Craft Studio, invite a trusted SoMa partner from Howard Leather Craft Studio into your polycule network!",
        "targetNodeId": 73,
        "sexPoints": 422,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Howard Leather Craft Studio"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 73,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "SoMa Neon Alley Arcade Bar",
    "image": "./images/temescal_alley.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at SoMa Neon Alley Arcade Bar. Retro arcade venue featuring 16-bit video games and craft beers. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At SoMa Neon Alley Arcade Bar, lift your partner onto the mahogany counter at SoMa Neon Alley Arcade Bar for an intense bareback encounter!",
        "targetNodeId": 74,
        "sexPoints": 576,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At SoMa Neon Alley Arcade Bar, use a latex condom for a safe, sensual session inside SoMa Neon Alley Arcade Bar.",
        "targetNodeId": 74,
        "sexPoints": 383,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At SoMa Neon Alley Arcade Bar, invite a trusted SoMa partner from SoMa Neon Alley Arcade Bar into your polycule network!",
        "targetNodeId": 74,
        "sexPoints": 423,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at SoMa Neon Alley Arcade Bar"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 74,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "Folsom Street Gear Exchange",
    "image": "./images/lake_merritt.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at Folsom Street Gear Exchange. Community trade station for leather gear, boots, and barrier supplies. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At Folsom Street Gear Exchange, lose yourself in heat and sweat on the padded benches of Folsom Street Gear Exchange!",
        "targetNodeId": 75,
        "sexPoints": 578,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Folsom Street Gear Exchange, use a latex condom for a safe, sensual session inside Folsom Street Gear Exchange.",
        "targetNodeId": 75,
        "sexPoints": 384,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Folsom Street Gear Exchange, invite a trusted SoMa partner from Folsom Street Gear Exchange into your polycule network!",
        "targetNodeId": 75,
        "sexPoints": 424,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Folsom Street Gear Exchange"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 75,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "SoMa Solarium Cuddle Deck",
    "image": "./images/grand_lake_speakeasy.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at SoMa Solarium Cuddle Deck. Cushioned rooftop lounge under starry midnight skies. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At SoMa Solarium Cuddle Deck, pull your partner close against the leather couch at SoMa Solarium Cuddle Deck for a raw bareback hookup!",
        "targetNodeId": 76,
        "sexPoints": 580,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At SoMa Solarium Cuddle Deck, use a latex condom for a safe, sensual session inside SoMa Solarium Cuddle Deck.",
        "targetNodeId": 76,
        "sexPoints": 385,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At SoMa Solarium Cuddle Deck, invite a trusted SoMa partner from SoMa Solarium Cuddle Deck into your polycule network!",
        "targetNodeId": 76,
        "sexPoints": 425,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at SoMa Solarium Cuddle Deck"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 76,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "SoMa Harm Reduction Tent",
    "image": "./images/temescal_alley.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at SoMa Harm Reduction Tent. Outreach station distributing free STI literature and Doxy-PEP info. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At SoMa Harm Reduction Tent, unbutton your shirt and press your partner against the brick wall of SoMa Harm Reduction Tent in a haze of heat!",
        "targetNodeId": 77,
        "sexPoints": 582,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At SoMa Harm Reduction Tent, use a latex condom for a safe, sensual session inside SoMa Harm Reduction Tent.",
        "targetNodeId": 77,
        "sexPoints": 386,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At SoMa Harm Reduction Tent, invite a trusted SoMa partner from SoMa Harm Reduction Tent into your polycule network!",
        "targetNodeId": 77,
        "sexPoints": 426,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at SoMa Harm Reduction Tent"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 77,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "Howard Underground Sound Vault",
    "image": "./images/jack_london_square.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at Howard Underground Sound Vault. Subterranean vault vibrating with experimental industrial synth. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At Howard Underground Sound Vault, slide beneath the warm blankets at Howard Underground Sound Vault for a midnight bareback session!",
        "targetNodeId": 78,
        "sexPoints": 584,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Howard Underground Sound Vault, use a latex condom for a safe, sensual session inside Howard Underground Sound Vault.",
        "targetNodeId": 78,
        "sexPoints": 387,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Howard Underground Sound Vault, invite a trusted SoMa partner from Howard Underground Sound Vault into your polycule network!",
        "targetNodeId": 78,
        "sexPoints": 427,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Howard Underground Sound Vault"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 78,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "SoMa Roof Garden Fire Pit",
    "image": "./images/berkeley_commune.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at SoMa Roof Garden Fire Pit. Open-air fire pit where lovers roast marshmallows and share stories. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At SoMa Roof Garden Fire Pit, lift your partner onto the mahogany counter at SoMa Roof Garden Fire Pit for an intense bareback encounter!",
        "targetNodeId": 79,
        "sexPoints": 586,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At SoMa Roof Garden Fire Pit, use a latex condom for a safe, sensual session inside SoMa Roof Garden Fire Pit.",
        "targetNodeId": 79,
        "sexPoints": 388,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At SoMa Roof Garden Fire Pit, invite a trusted SoMa partner from SoMa Roof Garden Fire Pit into your polycule network!",
        "targetNodeId": 79,
        "sexPoints": 428,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at SoMa Roof Garden Fire Pit"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 79,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "SoMa Midnight Espresso Parlor",
    "image": "./images/grand_lake_speakeasy.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at SoMa Midnight Espresso Parlor. Late-night cafe serving double espressos and consent advice. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At SoMa Midnight Espresso Parlor, lose yourself in heat and sweat on the padded benches of SoMa Midnight Espresso Parlor!",
        "targetNodeId": 80,
        "sexPoints": 588,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At SoMa Midnight Espresso Parlor, use a latex condom for a safe, sensual session inside SoMa Midnight Espresso Parlor.",
        "targetNodeId": 80,
        "sexPoints": 389,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At SoMa Midnight Espresso Parlor, invite a trusted SoMa partner from SoMa Midnight Espresso Parlor into your polycule network!",
        "targetNodeId": 80,
        "sexPoints": 429,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at SoMa Midnight Espresso Parlor"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 80,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "Embarcadero Pier Ferry Departure",
    "image": "./images/jack_london_square.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at Embarcadero Pier Ferry Departure. Waterfront ferry pier under glowing streetlights preparing for Marin. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At Embarcadero Pier Ferry Departure, pull your partner close against the leather couch at Embarcadero Pier Ferry Departure for a raw bareback hookup!",
        "targetNodeId": 81,
        "sexPoints": 590,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Embarcadero Pier Ferry Departure, use a latex condom for a safe, sensual session inside Embarcadero Pier Ferry Departure.",
        "targetNodeId": 81,
        "sexPoints": 390,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Embarcadero Pier Ferry Departure, invite a trusted SoMa partner from Embarcadero Pier Ferry Departure into your polycule network!",
        "targetNodeId": 81,
        "sexPoints": 430,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Embarcadero Pier Ferry Departure"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 81,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "Folsom Street Fair Entrance",
    "image": "./images/fox_theater_oakland.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at Folsom Street Fair Entrance. Epic leather festival gates crowded with gear enthusiasts under the sun. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At Folsom Street Fair Entrance, unbutton your shirt and press your partner against the brick wall of Folsom Street Fair Entrance in a haze of heat!",
        "targetNodeId": 82,
        "sexPoints": 592,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Folsom Street Fair Entrance, use a latex condom for a safe, sensual session inside Folsom Street Fair Entrance.",
        "targetNodeId": 82,
        "sexPoints": 391,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Folsom Street Fair Entrance, invite a trusted SoMa partner from Folsom Street Fair Entrance into your polycule network!",
        "targetNodeId": 82,
        "sexPoints": 431,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Folsom Street Fair Entrance"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 82,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "Folsom Leather Corner Stage",
    "image": "./images/lake_merritt.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at Folsom Leather Corner Stage. Stage showcasing custom leather harnesses and gear craft. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At Folsom Leather Corner Stage, slide beneath the warm blankets at Folsom Leather Corner Stage for a midnight bareback session!",
        "targetNodeId": 83,
        "sexPoints": 594,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Folsom Leather Corner Stage, use a latex condom for a safe, sensual session inside Folsom Leather Corner Stage. [Folsom Leather Corner Stage]",
        "targetNodeId": 83,
        "sexPoints": 392,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Folsom Leather Corner Stage, invite a trusted SoMa partner from Folsom Leather Corner Stage into your polycule network! [Folsom Leather Corner Stage]",
        "targetNodeId": 83,
        "sexPoints": 432,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Folsom Leather Corner Stage"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 83,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "Folsom VIP Play Pen",
    "image": "./images/grand_lake_speakeasy.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at Folsom VIP Play Pen. Enclosed outdoor play arena equipped with padded benches. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At Folsom VIP Play Pen, lift your partner onto the mahogany counter at Folsom VIP Play Pen for an intense bareback encounter!",
        "targetNodeId": 84,
        "sexPoints": 596,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Folsom VIP Play Pen, use a latex condom for a safe, sensual session inside Folsom VIP Play Pen. [Folsom VIP Play Pen]",
        "targetNodeId": 84,
        "sexPoints": 393,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Folsom VIP Play Pen, invite a trusted SoMa partner from Folsom VIP Play Pen into your polycule network! [Folsom VIP Play Pen]",
        "targetNodeId": 84,
        "sexPoints": 433,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Folsom VIP Play Pen"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 84,
    "act": "ACT III: DEEP SOMA CIRCUIT",
    "neighborhood": "Dore Alley Brick Archway",
    "image": "./images/temescal_alley.jpg",
    "narrative": "The pulse of SoMa's industrial circuit is intense at Dore Alley Brick Archway. Dark brick alleyway humming with industrial techno and fog machines. Heavy sub-bass and leather gear frame passionate encounters.",
    "choices": [
      {
        "text": "🔥 At Dore Alley Brick Archway, lose yourself in heat and sweat on the padded benches of Dore Alley Brick Archway!",
        "targetNodeId": 85,
        "sexPoints": 598,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Dore Alley Brick Archway, use a latex condom for a safe, sensual session inside Dore Alley Brick Archway. [Dore Alley Brick Archway]",
        "targetNodeId": 85,
        "sexPoints": 394,
        "riskLevel": "low",
        "actType": "anal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Dore Alley Brick Archway, invite a trusted SoMa partner from Dore Alley Brick Archway into your polycule network! [Dore Alley Brick Archway]",
        "targetNodeId": 85,
        "sexPoints": 434,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Dore Alley Brick Archway"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 85,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Sausalito Ferry Pier Transit Hub",
    "image": "./images/mission_loft.jpg",
    "narrative": "Salt spray hits your face as the ferry glides past Alcatraz toward Sausalito and Marin. Golden Gate Bridge towers gleam in the afternoon sun against rugged coastal bluffs.",
    "choices": [
      {
        "text": "🌊 Head to Baker Beach sunset dunes for a clothing-optional bonfire session.",
        "targetNodeId": 90,
        "sexPoints": 360,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      },
      {
        "text": "🚢 Visit the floating houseboat community in Sausalito for a waterfront solarium party.",
        "targetNodeId": 86,
        "sexPoints": 300,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      },
      {
        "text": "📍 Return to SF Civic Center Plaza to prepare for the final City Hall Gala.",
        "targetNodeId": 114,
        "sexPoints": 100,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      }
    ],
    "isTransitHub": true
  },
  {
    "id": 86,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Sausalito Houseboat Solarium Cabin",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Sausalito Houseboat Solarium Cabin. Sunlit plant conservatory aboard a historic wooden houseboat. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Sausalito Houseboat Solarium Cabin, unbutton your shirt and press your partner against the brick wall of Sausalito Houseboat Solarium Cabin in a haze of heat!",
        "targetNodeId": 87,
        "sexPoints": 622,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ Slip on a latex barrier with smooth precision for a safe, thrilling play session in Sausalito Houseboat Solarium Cabin.",
        "targetNodeId": 87,
        "sexPoints": 406,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 Invite a coastal companion from Sausalito Houseboat Solarium Cabin into your polycule team!",
        "targetNodeId": 87,
        "sexPoints": 446,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Sausalito Houseboat Solarium Cabin"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 87,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Marin Headlands Vista Point",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Marin Headlands Vista Point. High ocean cliff offering breathtaking views of the Golden Gate Bridge. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Marin Headlands Vista Point, slide beneath the warm blankets at Marin Headlands Vista Point for a midnight bareback session!",
        "targetNodeId": 88,
        "sexPoints": 624,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ Smooth a condom over your shaft before sliding into your partner against the velvet seating at Marin Headlands Vista Point.",
        "targetNodeId": 88,
        "sexPoints": 407,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Marin Headlands Vista Point, invite a coastal companion from Marin Headlands Vista Point into your polycule team!",
        "targetNodeId": 88,
        "sexPoints": 447,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Marin Headlands Vista Point"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 88,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Point Bonita Lighthouse Terrace",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Point Bonita Lighthouse Terrace. Suspension bridge path leading to a dramatic ocean lighthouse cliff. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Point Bonita Lighthouse Terrace, lift your partner onto the mahogany counter at Point Bonita Lighthouse Terrace for an intense bareback encounter!",
        "targetNodeId": 89,
        "sexPoints": 626,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ Snap a latex condom into place for a passionate, fully protected hookup in Point Bonita Lighthouse Terrace.",
        "targetNodeId": 89,
        "sexPoints": 408,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Point Bonita Lighthouse Terrace, invite a coastal companion from Point Bonita Lighthouse Terrace into your polycule team!",
        "targetNodeId": 89,
        "sexPoints": 448,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Point Bonita Lighthouse Terrace"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 89,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Baker Beach Bonfire Circle",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Baker Beach Bonfire Circle. Crackling driftwood bonfire surrounded by ocean waves and starlight. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Baker Beach Bonfire Circle, lose yourself in heat and sweat on the padded benches of Baker Beach Bonfire Circle!",
        "targetNodeId": 90,
        "sexPoints": 628,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Baker Beach Bonfire Circle, tear open a latex barrier packet with your teeth and take your partner right here at Baker Beach Bonfire Circle.",
        "targetNodeId": 90,
        "sexPoints": 409,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Baker Beach Bonfire Circle, invite a coastal companion from Baker Beach Bonfire Circle into your polycule team!",
        "targetNodeId": 90,
        "sexPoints": 449,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Baker Beach Bonfire Circle"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 90,
    "act": "ACT IV: BAKER BEACH SUNSET DUNES",
    "neighborhood": "Baker Beach Clothing-Optional",
    "image": "./images/mission_loft.jpg",
    "narrative": "Salt spray hits your face as a bonfire crackles against the Golden Gate Bridge skyline. The crowd is uninhibited, bare skin glowing red in the firelight embers.",
    "choices": [
      {
        "text": "🔥 Wrap up under a wool blanket on the dune sand for a wild beach bonfire hookup!",
        "targetNodeId": 91,
        "sexPoints": 560,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ Use a condom under the blanket for a safe, romantic sunset encounter.",
        "targetNodeId": 91,
        "sexPoints": 380,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 91,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Mount Tamalpais Starlight Ridge",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Mount Tamalpais Starlight Ridge. Mountain peak overlooking a sea of fog illuminated by moonlight. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Mount Tamalpais Starlight Ridge, unbutton your shirt and press your partner against the brick wall of Mount Tamalpais Starlight Ridge in a haze of heat!",
        "targetNodeId": 92,
        "sexPoints": 632,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Mount Tamalpais Starlight Ridge, slip on a latex barrier with smooth precision for a safe, thrilling play session in Mount Tamalpais Starlight Ridge.",
        "targetNodeId": 92,
        "sexPoints": 411,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Mount Tamalpais Starlight Ridge, invite a coastal companion from Mount Tamalpais Starlight Ridge into your polycule team!",
        "targetNodeId": 92,
        "sexPoints": 451,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Mount Tamalpais Starlight Ridge"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 92,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Marin Redwood Solarium Cabin",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Marin Redwood Solarium Cabin. Rustic mountain chalet featuring an outdoor cedar hot tub under pine trees. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Marin Redwood Solarium Cabin, slide beneath the warm blankets at Marin Redwood Solarium Cabin for a midnight bareback session!",
        "targetNodeId": 93,
        "sexPoints": 634,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Marin Redwood Solarium Cabin, smooth a condom over your shaft before sliding into your partner against the velvet seating at Marin Redwood Solarium Cabin.",
        "targetNodeId": 93,
        "sexPoints": 412,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Marin Redwood Solarium Cabin, invite a coastal companion from Marin Redwood Solarium Cabin into your polycule team!",
        "targetNodeId": 93,
        "sexPoints": 452,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Marin Redwood Solarium Cabin"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 93,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Presidio Officers Club Grand Foyer",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Presidio Officers Club Grand Foyer. Historic spanish tile foyer surrounded by fragrant eucalyptus groves. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Presidio Officers Club Grand Foyer, lift your partner onto the mahogany counter at Presidio Officers Club Grand Foyer for an intense bareback encounter!",
        "targetNodeId": 94,
        "sexPoints": 636,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Presidio Officers Club Grand Foyer, snap a latex condom into place for a passionate, fully protected hookup in Presidio Officers Club Grand Foyer.",
        "targetNodeId": 94,
        "sexPoints": 413,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Presidio Officers Club Grand Foyer, invite a coastal companion from Presidio Officers Club Grand Foyer into your polycule team!",
        "targetNodeId": 94,
        "sexPoints": 453,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Presidio Officers Club Grand Foyer"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 94,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Presidio Redwood Grove Sanctuary",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Presidio Redwood Grove Sanctuary. Tranquil forest walking trail shaded by ancient redwood trees. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Presidio Redwood Grove Sanctuary, lose yourself in heat and sweat on the padded benches of Presidio Redwood Grove Sanctuary!",
        "targetNodeId": 95,
        "sexPoints": 638,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Presidio Redwood Grove Sanctuary, tear open a latex barrier packet with your teeth and take your partner right here at Presidio Redwood Grove Sanctuary.",
        "targetNodeId": 95,
        "sexPoints": 414,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Presidio Redwood Grove Sanctuary, invite a coastal companion from Presidio Redwood Grove Sanctuary into your polycule team!",
        "targetNodeId": 95,
        "sexPoints": 454,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Presidio Redwood Grove Sanctuary"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 95,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Presidio Lawn Sunshine Tapestry",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Presidio Lawn Sunshine Tapestry. Sunlit lawn picnic featuring champagne flutes and polycule friends. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Presidio Lawn Sunshine Tapestry, pull your partner close against the leather couch at Presidio Lawn Sunshine Tapestry for a raw bareback hookup!",
        "targetNodeId": 96,
        "sexPoints": 640,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Presidio Lawn Sunshine Tapestry, unroll a condom quickly as pulse-pounding sub-bass echoes across Presidio Lawn Sunshine Tapestry.",
        "targetNodeId": 96,
        "sexPoints": 415,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Presidio Lawn Sunshine Tapestry, invite a coastal companion from Presidio Lawn Sunshine Tapestry into your polycule team!",
        "targetNodeId": 96,
        "sexPoints": 455,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Presidio Lawn Sunshine Tapestry"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 96,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Ocean Beach Sunset Dunes",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Ocean Beach Sunset Dunes. Expansive sandy beach where Pacific Ocean waves crash against the shore. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Ocean Beach Sunset Dunes, unbutton your shirt and press your partner against the brick wall of Ocean Beach Sunset Dunes in a haze of heat!",
        "targetNodeId": 97,
        "sexPoints": 642,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Ocean Beach Sunset Dunes, slip on a latex barrier with smooth precision for a safe, thrilling play session in Ocean Beach Sunset Dunes.",
        "targetNodeId": 97,
        "sexPoints": 416,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Ocean Beach Sunset Dunes, invite a coastal companion from Ocean Beach Sunset Dunes into your polycule team!",
        "targetNodeId": 97,
        "sexPoints": 456,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Ocean Beach Sunset Dunes"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 97,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Ocean Beach Coastal Pavilion",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Ocean Beach Coastal Pavilion. Covered pavilion offering panoramic views of the Pacific horizon. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Ocean Beach Coastal Pavilion, slide beneath the warm blankets at Ocean Beach Coastal Pavilion for a midnight bareback session!",
        "targetNodeId": 98,
        "sexPoints": 644,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Ocean Beach Coastal Pavilion, smooth a condom over your shaft before sliding into your partner against the velvet seating at Ocean Beach Coastal Pavilion.",
        "targetNodeId": 98,
        "sexPoints": 417,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Ocean Beach Coastal Pavilion, invite a coastal companion from Ocean Beach Coastal Pavilion into your polycule team!",
        "targetNodeId": 98,
        "sexPoints": 457,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Ocean Beach Coastal Pavilion"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 98,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Ocean Beach Dawn Bonfire",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Ocean Beach Dawn Bonfire. Early morning bonfire embers warming early risers as the sun crests. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Ocean Beach Dawn Bonfire, lift your partner onto the mahogany counter at Ocean Beach Dawn Bonfire for an intense bareback encounter!",
        "targetNodeId": 99,
        "sexPoints": 646,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Ocean Beach Dawn Bonfire, snap a latex condom into place for a passionate, fully protected hookup in Ocean Beach Dawn Bonfire.",
        "targetNodeId": 99,
        "sexPoints": 418,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Ocean Beach Dawn Bonfire, invite a coastal companion from Ocean Beach Dawn Bonfire into your polycule team!",
        "targetNodeId": 99,
        "sexPoints": 458,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Ocean Beach Dawn Bonfire"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 99,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Sausalito Harbor Seafood Lounge",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Sausalito Harbor Seafood Lounge. Waterfront restaurant serving oysters and sparkling wine. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Sausalito Harbor Seafood Lounge, lose yourself in heat and sweat on the padded benches of Sausalito Harbor Seafood Lounge!",
        "targetNodeId": 100,
        "sexPoints": 648,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Sausalito Harbor Seafood Lounge, tear open a latex barrier packet with your teeth and take your partner right here at Sausalito Harbor Seafood Lounge.",
        "targetNodeId": 100,
        "sexPoints": 419,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Sausalito Harbor Seafood Lounge, invite a coastal companion from Sausalito Harbor Seafood Lounge into your polycule team!",
        "targetNodeId": 100,
        "sexPoints": 459,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Sausalito Harbor Seafood Lounge"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 100,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Marin Headlands Night Observatory",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Marin Headlands Night Observatory. Stargazing terrace high above the Pacific Ocean bluffs. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Marin Headlands Night Observatory, pull your partner close against the leather couch at Marin Headlands Night Observatory for a raw bareback hookup!",
        "targetNodeId": 101,
        "sexPoints": 650,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Marin Headlands Night Observatory, unroll a condom quickly as pulse-pounding sub-bass echoes across Marin Headlands Night Observatory.",
        "targetNodeId": 101,
        "sexPoints": 420,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Marin Headlands Night Observatory, invite a coastal companion from Marin Headlands Night Observatory into your polycule team!",
        "targetNodeId": 101,
        "sexPoints": 460,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Marin Headlands Night Observatory"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 101,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Presidio Historic Ballroom Stage",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Presidio Historic Ballroom Stage. Elegant wooden floor ballroom preparing for evening galas. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Presidio Historic Ballroom Stage, unbutton your shirt and press your partner against the brick wall of Presidio Historic Ballroom Stage in a haze of heat!",
        "targetNodeId": 102,
        "sexPoints": 652,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Presidio Historic Ballroom Stage, slip on a latex barrier with smooth precision for a safe, thrilling play session in Presidio Historic Ballroom Stage.",
        "targetNodeId": 102,
        "sexPoints": 421,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Presidio Historic Ballroom Stage, invite a coastal companion from Presidio Historic Ballroom Stage into your polycule team!",
        "targetNodeId": 102,
        "sexPoints": 461,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Presidio Historic Ballroom Stage"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 102,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Ocean Beach Pacific Horizon",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Ocean Beach Pacific Horizon. Shoreline walk along the wet sand tide line. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Ocean Beach Pacific Horizon, slide beneath the warm blankets at Ocean Beach Pacific Horizon for a midnight bareback session!",
        "targetNodeId": 103,
        "sexPoints": 654,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Ocean Beach Pacific Horizon, smooth a condom over your shaft before sliding into your partner against the velvet seating at Ocean Beach Pacific Horizon.",
        "targetNodeId": 103,
        "sexPoints": 422,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Ocean Beach Pacific Horizon, invite a coastal companion from Ocean Beach Pacific Horizon into your polycule team!",
        "targetNodeId": 103,
        "sexPoints": 462,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Ocean Beach Pacific Horizon"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 103,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Sausalito Pier Sunset Lounge",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Sausalito Pier Sunset Lounge. Pier bar overlooking the evening lights of San Francisco. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Sausalito Pier Sunset Lounge, lift your partner onto the mahogany counter at Sausalito Pier Sunset Lounge for an intense bareback encounter!",
        "targetNodeId": 104,
        "sexPoints": 656,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Sausalito Pier Sunset Lounge, snap a latex condom into place for a passionate, fully protected hookup in Sausalito Pier Sunset Lounge.",
        "targetNodeId": 104,
        "sexPoints": 423,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Sausalito Pier Sunset Lounge, invite a coastal companion from Sausalito Pier Sunset Lounge into your polycule team!",
        "targetNodeId": 104,
        "sexPoints": 463,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Sausalito Pier Sunset Lounge"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 104,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Marin Redwood Sauna Cabin",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Marin Redwood Sauna Cabin. Eucalyptus steam sauna tucked into a redwood ravine. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Marin Redwood Sauna Cabin, lose yourself in heat and sweat on the padded benches of Marin Redwood Sauna Cabin!",
        "targetNodeId": 105,
        "sexPoints": 658,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Marin Redwood Sauna Cabin, tear open a latex barrier packet with your teeth and take your partner right here at Marin Redwood Sauna Cabin.",
        "targetNodeId": 105,
        "sexPoints": 424,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Marin Redwood Sauna Cabin, invite a coastal companion from Marin Redwood Sauna Cabin into your polycule team!",
        "targetNodeId": 105,
        "sexPoints": 464,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Marin Redwood Sauna Cabin"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 105,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Baker Beach Sunrise Dunes",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Baker Beach Sunrise Dunes. Pink dawn sky reflecting off wet ocean sands. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Baker Beach Sunrise Dunes, pull your partner close against the leather couch at Baker Beach Sunrise Dunes for a raw bareback hookup!",
        "targetNodeId": 106,
        "sexPoints": 660,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Baker Beach Sunrise Dunes, unroll a condom quickly as pulse-pounding sub-bass echoes across Baker Beach Sunrise Dunes.",
        "targetNodeId": 106,
        "sexPoints": 425,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Baker Beach Sunrise Dunes, invite a coastal companion from Baker Beach Sunrise Dunes into your polycule team!",
        "targetNodeId": 106,
        "sexPoints": 465,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Baker Beach Sunrise Dunes"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 106,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Presidio Lawn Cuddle Circle",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Presidio Lawn Cuddle Circle. Group cuddle pile under eucalyptus shade trees. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Presidio Lawn Cuddle Circle, unbutton your shirt and press your partner against the brick wall of Presidio Lawn Cuddle Circle in a haze of heat!",
        "targetNodeId": 107,
        "sexPoints": 662,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Presidio Lawn Cuddle Circle, slip on a latex barrier with smooth precision for a safe, thrilling play session in Presidio Lawn Cuddle Circle.",
        "targetNodeId": 107,
        "sexPoints": 426,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Presidio Lawn Cuddle Circle, invite a coastal companion from Presidio Lawn Cuddle Circle into your polycule team!",
        "targetNodeId": 107,
        "sexPoints": 466,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Presidio Lawn Cuddle Circle"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 107,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Ocean Beach Fire Pit Nook",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Ocean Beach Fire Pit Nook. Beach pit where lovers roast s'mores and share disclosure stories. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Ocean Beach Fire Pit Nook, slide beneath the warm blankets at Ocean Beach Fire Pit Nook for a midnight bareback session!",
        "targetNodeId": 108,
        "sexPoints": 664,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Ocean Beach Fire Pit Nook, smooth a condom over your shaft before sliding into your partner against the velvet seating at Ocean Beach Fire Pit Nook.",
        "targetNodeId": 108,
        "sexPoints": 427,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Ocean Beach Fire Pit Nook, invite a coastal companion from Ocean Beach Fire Pit Nook into your polycule team!",
        "targetNodeId": 108,
        "sexPoints": 467,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Ocean Beach Fire Pit Nook"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 108,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Marin Mountain Solarium Deck",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Marin Mountain Solarium Deck. Sunbathing deck high above the Marin fog line. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Marin Mountain Solarium Deck, lift your partner onto the mahogany counter at Marin Mountain Solarium Deck for an intense bareback encounter!",
        "targetNodeId": 109,
        "sexPoints": 666,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Marin Mountain Solarium Deck, snap a latex condom into place for a passionate, fully protected hookup in Marin Mountain Solarium Deck.",
        "targetNodeId": 109,
        "sexPoints": 428,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Marin Mountain Solarium Deck, invite a coastal companion from Marin Mountain Solarium Deck into your polycule team!",
        "targetNodeId": 109,
        "sexPoints": 468,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Marin Mountain Solarium Deck"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 109,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Sausalito Houseboat Music Studio",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Sausalito Houseboat Music Studio. Recording studio aboard a houseboat recording acoustic indie songs. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Sausalito Houseboat Music Studio, lose yourself in heat and sweat on the padded benches of Sausalito Houseboat Music Studio!",
        "targetNodeId": 110,
        "sexPoints": 668,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Sausalito Houseboat Music Studio, tear open a latex barrier packet with your teeth and take your partner right here at Sausalito Houseboat Music Studio.",
        "targetNodeId": 110,
        "sexPoints": 429,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Sausalito Houseboat Music Studio, invite a coastal companion from Sausalito Houseboat Music Studio into your polycule team!",
        "targetNodeId": 110,
        "sexPoints": 469,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Sausalito Houseboat Music Studio"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 110,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Presidio Officers Club VIP Lounge",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Presidio Officers Club VIP Lounge. VIP reception room preparing for the final City Hall Gala. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Presidio Officers Club VIP Lounge, pull your partner close against the leather couch at Presidio Officers Club VIP Lounge for a raw bareback hookup!",
        "targetNodeId": 111,
        "sexPoints": 670,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Presidio Officers Club VIP Lounge, unroll a condom quickly as pulse-pounding sub-bass echoes across Presidio Officers Club VIP Lounge.",
        "targetNodeId": 111,
        "sexPoints": 430,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Presidio Officers Club VIP Lounge, invite a coastal companion from Presidio Officers Club VIP Lounge into your polycule team!",
        "targetNodeId": 111,
        "sexPoints": 470,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Presidio Officers Club VIP Lounge"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 111,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Ocean Beach Pacific Sunset Terrace",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Ocean Beach Pacific Sunset Terrace. Deck overlooking golden hour ocean sunsets. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Ocean Beach Pacific Sunset Terrace, unbutton your shirt and press your partner against the brick wall of Ocean Beach Pacific Sunset Terrace in a haze of heat!",
        "targetNodeId": 112,
        "sexPoints": 672,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Ocean Beach Pacific Sunset Terrace, slip on a latex barrier with smooth precision for a safe, thrilling play session in Ocean Beach Pacific Sunset Terrace.",
        "targetNodeId": 112,
        "sexPoints": 431,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Ocean Beach Pacific Sunset Terrace, invite a coastal companion from Ocean Beach Pacific Sunset Terrace into your polycule team!",
        "targetNodeId": 112,
        "sexPoints": 471,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Ocean Beach Pacific Sunset Terrace"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 112,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "San Francisco City Hall Arrival Plaza",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame San Francisco City Hall Arrival Plaza. Civic Center plaza illuminated by golden floodlights. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At San Francisco City Hall Arrival Plaza, slide beneath the warm blankets at San Francisco City Hall Arrival Plaza for a midnight bareback session!",
        "targetNodeId": 113,
        "sexPoints": 674,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At San Francisco City Hall Arrival Plaza, smooth a condom over your shaft before sliding into your partner against the velvet seating at San Francisco City Hall Arrival Plaza.",
        "targetNodeId": 113,
        "sexPoints": 432,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At San Francisco City Hall Arrival Plaza, invite a coastal companion from San Francisco City Hall Arrival Plaza into your polycule team!",
        "targetNodeId": 113,
        "sexPoints": 472,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at San Francisco City Hall Arrival Plaza"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 113,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Sausalito Waterfront Houseboat Deck",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Sausalito Waterfront Houseboat Deck. Bohemian floating home with potted flowers and gentle bay tide reflections. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Sausalito Waterfront Houseboat Deck, lift your partner onto the mahogany counter at Sausalito Waterfront Houseboat Deck for an intense bareback encounter!",
        "targetNodeId": 114,
        "sexPoints": 676,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Sausalito Waterfront Houseboat Deck, snap a latex condom into place for a passionate, fully protected hookup in Sausalito Waterfront Houseboat Deck.",
        "targetNodeId": 114,
        "sexPoints": 433,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Sausalito Waterfront Houseboat Deck, invite a coastal companion from Sausalito Waterfront Houseboat Deck into your polycule team!",
        "targetNodeId": 114,
        "sexPoints": 473,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Sausalito Waterfront Houseboat Deck"
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 114,
    "act": "ACT IV: COASTAL & BAY ARC",
    "neighborhood": "Sausalito Houseboat Solarium Cabin",
    "image": "./images/mission_loft.jpg",
    "narrative": "Ocean air, salt spray, and coastal winds frame Sausalito Houseboat Solarium Cabin. Sunlit plant conservatory aboard a historic wooden houseboat. Intimate moments unfold under open skies.",
    "choices": [
      {
        "text": "🔥 At Sausalito Houseboat Solarium Cabin, lose yourself in heat and sweat on the padded benches of Sausalito Houseboat Solarium Cabin!",
        "targetNodeId": 115,
        "sexPoints": 678,
        "riskLevel": "high",
        "actType": "anal",
        "isIngroup": false
      },
      {
        "text": "🛡️ At Sausalito Houseboat Solarium Cabin, tear open a latex barrier packet with your teeth and take your partner right here at Sausalito Houseboat Solarium Cabin.",
        "targetNodeId": 115,
        "sexPoints": 434,
        "riskLevel": "low",
        "actType": "vaginal",
        "isIngroup": false,
        "usesCondom": true
      },
      {
        "text": "💖 At Sausalito Houseboat Solarium Cabin, invite a coastal companion from Sausalito Houseboat Solarium Cabin into your polycule team! [Sausalito Houseboat Solarium Cabin]",
        "targetNodeId": 115,
        "sexPoints": 474,
        "riskLevel": "medium",
        "actType": "dialogue",
        "isIngroup": true,
        "addsPolyculeMember": "Companion at Sausalito Houseboat Solarium Cabin"
      }
    ],
    "isTransitHub": true
  },
  {
    "id": 115,
    "act": "ACT V: GRAND CITY HALL FINALE",
    "neighborhood": "City Hall Grand Granite Steps",
    "image": "./images/sf_cityhall.jpg",
    "narrative": "Inside the grand marble corridors of San Francisco City Hall at City Hall Grand Granite Steps, floodlights illuminate soaring archways. Gala attendees gather as you approach the final summit gates.",
    "choices": [
      {
        "text": "👑 Step forward through City Hall Grand Granite Steps towards the City Hall Victory Summit.",
        "targetNodeId": 116,
        "sexPoints": 200,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 116,
    "act": "ACT V: GRAND CITY HALL FINALE",
    "neighborhood": "City Hall Marble Rotunda Foyer",
    "image": "./images/sf_cityhall.jpg",
    "narrative": "Inside the grand marble corridors of San Francisco City Hall at City Hall Marble Rotunda Foyer, floodlights illuminate soaring archways. Gala attendees gather as you approach the final summit gates.",
    "choices": [
      {
        "text": "👑 At City Hall Marble Rotunda Foyer, step forward through City Hall Marble Rotunda Foyer towards the City Hall Victory Summit.",
        "targetNodeId": 117,
        "sexPoints": 200,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 117,
    "act": "ACT V: GRAND CITY HALL FINALE",
    "neighborhood": "City Hall Mayor's Balcony Terrace",
    "image": "./images/sf_cityhall.jpg",
    "narrative": "Inside the grand marble corridors of San Francisco City Hall at City Hall Mayor's Balcony Terrace, floodlights illuminate soaring archways. Gala attendees gather as you approach the final summit gates.",
    "choices": [
      {
        "text": "👑 At City Hall Mayor's Balcony Terrace, step forward through City Hall Mayor's Balcony Terrace towards the City Hall Victory Summit.",
        "targetNodeId": 118,
        "sexPoints": 200,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 118,
    "act": "ACT V: GRAND CITY HALL FINALE",
    "neighborhood": "City Hall Polycule Honor Hall",
    "image": "./images/sf_cityhall.jpg",
    "narrative": "Inside the grand marble corridors of San Francisco City Hall at City Hall Polycule Honor Hall, floodlights illuminate soaring archways. Gala attendees gather as you approach the final summit gates.",
    "choices": [
      {
        "text": "👑 At City Hall Polycule Honor Hall, step forward through City Hall Polycule Honor Hall towards the City Hall Victory Summit.",
        "targetNodeId": 119,
        "sexPoints": 200,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 119,
    "act": "ACT V: GRAND CITY HALL FINALE",
    "neighborhood": "City Hall Task 1 Review Chamber",
    "image": "./images/sf_cityhall.jpg",
    "narrative": "Inside the grand marble corridors of San Francisco City Hall at City Hall Task 1 Review Chamber, floodlights illuminate soaring archways. Gala attendees gather as you approach the final summit gates.",
    "choices": [
      {
        "text": "👑 At City Hall Task 1 Review Chamber, step forward through City Hall Task 1 Review Chamber towards the City Hall Victory Summit.",
        "targetNodeId": 120,
        "sexPoints": 200,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 120,
    "act": "ACT V: GRAND CITY HALL FINALE",
    "neighborhood": "City Hall Task 2 Review Chamber",
    "image": "./images/sf_cityhall.jpg",
    "narrative": "Inside the grand marble corridors of San Francisco City Hall at City Hall Task 2 Review Chamber, floodlights illuminate soaring archways. Gala attendees gather as you approach the final summit gates.",
    "choices": [
      {
        "text": "👑 At City Hall Task 2 Review Chamber, step forward through City Hall Task 2 Review Chamber towards the City Hall Victory Summit.",
        "targetNodeId": 121,
        "sexPoints": 200,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 121,
    "act": "ACT V: GRAND CITY HALL FINALE",
    "neighborhood": "City Hall Task 3 Review Chamber",
    "image": "./images/sf_cityhall.jpg",
    "narrative": "Inside the grand marble corridors of San Francisco City Hall at City Hall Task 3 Review Chamber, floodlights illuminate soaring archways. Gala attendees gather as you approach the final summit gates.",
    "choices": [
      {
        "text": "👑 At City Hall Task 3 Review Chamber, step forward through City Hall Task 3 Review Chamber towards the City Hall Victory Summit.",
        "targetNodeId": 122,
        "sexPoints": 200,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 122,
    "act": "ACT V: GRAND CITY HALL FINALE",
    "neighborhood": "City Hall Task 4 Review Chamber",
    "image": "./images/sf_cityhall.jpg",
    "narrative": "Inside the grand marble corridors of San Francisco City Hall at City Hall Task 4 Review Chamber, floodlights illuminate soaring archways. Gala attendees gather as you approach the final summit gates.",
    "choices": [
      {
        "text": "👑 At City Hall Task 4 Review Chamber, step forward through City Hall Task 4 Review Chamber towards the City Hall Victory Summit.",
        "targetNodeId": 123,
        "sexPoints": 200,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 123,
    "act": "ACT V: GRAND CITY HALL FINALE",
    "neighborhood": "City Hall Task 5 Review Chamber",
    "image": "./images/sf_cityhall.jpg",
    "narrative": "Inside the grand marble corridors of San Francisco City Hall at City Hall Task 5 Review Chamber, floodlights illuminate soaring archways. Gala attendees gather as you approach the final summit gates.",
    "choices": [
      {
        "text": "👑 At City Hall Task 5 Review Chamber, step forward through City Hall Task 5 Review Chamber towards the City Hall Victory Summit.",
        "targetNodeId": 124,
        "sexPoints": 200,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 124,
    "act": "ACT V: GRAND CITY HALL FINALE",
    "neighborhood": "City Hall Golden Dome Rotunda",
    "image": "./images/sf_cityhall.jpg",
    "narrative": "Inside the grand marble corridors of San Francisco City Hall at City Hall Golden Dome Rotunda, floodlights illuminate soaring archways. Gala attendees gather as you approach the final summit gates.",
    "choices": [
      {
        "text": "👑 At City Hall Golden Dome Rotunda, step forward through City Hall Golden Dome Rotunda towards the City Hall Victory Summit.",
        "targetNodeId": 125,
        "sexPoints": 200,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 125,
    "act": "ACT V: GRAND CITY HALL FINALE",
    "neighborhood": "City Hall Summit Gate Portal",
    "image": "./images/sf_cityhall.jpg",
    "narrative": "Inside the grand marble corridors of San Francisco City Hall at City Hall Summit Gate Portal, floodlights illuminate soaring archways. Gala attendees gather as you approach the final summit gates.",
    "choices": [
      {
        "text": "👑 At City Hall Summit Gate Portal, step forward through City Hall Summit Gate Portal towards the City Hall Victory Summit.",
        "targetNodeId": 126,
        "sexPoints": 200,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 126,
    "act": "ACT V: GRAND CITY HALL FINALE",
    "neighborhood": "City Hall Grand Climax Chamber",
    "image": "./images/sf_cityhall.jpg",
    "narrative": "Inside the grand marble corridors of San Francisco City Hall at City Hall Grand Climax Chamber, floodlights illuminate soaring archways. Gala attendees gather as you approach the final summit gates.",
    "choices": [
      {
        "text": "👑 At City Hall Grand Climax Chamber, step forward through City Hall Grand Climax Chamber towards the City Hall Victory Summit.",
        "targetNodeId": 127,
        "sexPoints": 200,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      }
    ],
    "isTransitHub": false
  },
  {
    "id": 127,
    "act": "ACT V: GRAND CITY HALL FINALE",
    "neighborhood": "San Francisco City Hall Golden Dome Victory Climax",
    "image": "./images/sf_cityhall.jpg",
    "narrative": "The sunrise paints the San Francisco skyline in crimson and gold. Standing atop City Hall surrounded by your polycule team, lovers, and fellow gonzo travelers, you look back at all five completed Odyssey Tasks across SF and Oakland. You have conquered San Francisco!",
    "choices": [
      {
        "text": "👑 Claim your legendary victory and submit your initials to the High Score Hall of Fame!",
        "targetNodeId": 127,
        "sexPoints": 3500,
        "riskLevel": "none",
        "actType": "action",
        "isIngroup": true
      }
    ],
    "isTransitHub": false
  }
];
