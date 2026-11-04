/**
 * sanitize - Small HTML-escaping utilities.
 *
 * Values rendered into innerHTML (graph node labels derived from shared-profile
 * URL params, CSV dataset fields, ...) must be escaped so untrusted strings
 * cannot inject markup/scripts into the page (DOM XSS).
 */
const ESCAPE_MAP = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '`': '&#96;'
};

/**
 * Escapes HTML-significant characters in a value for safe interpolation into HTML.
 * @param {*} value - Any value; converted to a string (null/undefined -> '').
 * @returns {string} Escaped string.
 */
export function escapeHtml(value) {
  if (value === null || value === undefined) return '';
  return String(value).replace(/[&<>"'`]/g, (ch) => ESCAPE_MAP[ch]);
}

export default escapeHtml;
