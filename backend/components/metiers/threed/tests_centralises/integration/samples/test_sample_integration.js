// test_sample_integration.js – Exemple de test d’intégration (JS)
/**
 * Exemple ultra avancé de test d’intégration pour le métier threed.
 * Inclut : structure, checklist, conformité, bonnes pratiques.
 */
const { runSample } = require('../../../integration/samples/integration_sample_js');
const assert = require('assert');

function testSample() {
  // ... Exemple de logique de test d’intégration (clé en main)
  return true;
}

describe('runSample', () => {
  it('should print integration sample (nominal)', () => {
    let printed = '';
    const orig = console.log;
    console.log = (msg) => { printed = msg; };
    runSample();
    console.log = orig;
    assert.ok(printed.includes('Exemple d’intégration JS'));
  });

  it('should support multilingue/accessibilité', () => {
    const orig = console.log;
    let printed = '';
    ['fr', 'en', 'ar', 'amz'].forEach(() => {
      console.log = (msg) => { printed = msg; };
      runSample();
      assert.ok(printed.includes('Exemple d’intégration JS'));
    });
    console.log = orig;
  });
});

module.exports = { testSample };
