// templates_helper.js
// Ultra-avancé, clé en main : helpers pour la gestion des templates/metiers/threed

/**
 * Remplace les variables {{var}} dans un template par les valeurs fournies.
 * @param {string} template - Le template avec des variables {{var}}.
 * @param {object} variables - Les variables à injecter.
 * @returns {string}
 */
function renderTemplate(template, variables) {
  return template.replace(/{{\s*(\w+)\s*}}/g, (match, key) => {
    return key in variables ? variables[key] : match;
  });
}

/**
 * Vérifie si un template contient toutes les variables requises.
 * @param {string} template
 * @param {string[]} requiredVars
 * @returns {boolean}
 */
function hasRequiredVariables(template, requiredVars) {
  return requiredVars.every(v => new RegExp(`{{\\s*${v}\\s*}}`).test(template));
}

/**
 * Extrait toutes les variables {{var}} d'un template.
 * @param {string} template
 * @returns {string[]}
 */
function extractVariables(template) {
  const matches = template.match(/{{\s*(\w+)\s*}}/g) || [];
  return matches.map(m => m.replace(/{{\s*|\s*}}/g, ''));
}

/**
 * Nettoie un template en supprimant les variables non remplacées.
 * @param {string} template
 * @returns {string}
 */
function cleanTemplate(template) {
  return template.replace(/{{\s*\w+\s*}}/g, '');
}

module.exports = {
  renderTemplate,
  hasRequiredVariables,
  extractVariables,
  cleanTemplate,
};
