/**
 * domUtil - Small DOM/HTML helpers shared across PolyGraph modules.
 */

/**
 * Escapes a value for safe interpolation into HTML.
 *
 * Used wherever untrusted (user-supplied) data is written into `innerHTML`
 * or an ECharts "html" tooltip formatter, to prevent DOM-based XSS
 * (e.g. hostile values in a custom pathogen CSV's Pathogen_Name column).
 */
export function escapeHtml(value) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
