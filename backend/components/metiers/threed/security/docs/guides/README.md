# README – Guides techniques sécurité 3D

Ce dossier contient des guides ultra avancés, séparés par thématique métier :

- `api/` : intégration API sécurité (auth, RBAC, audit, conformité, monitoring)
- `rbac/` : gestion des accès, modèles de rôles, bonnes pratiques
- `audit/` : journalisation, rapports, alertes
- `compliance/` : conformité RGPD, checklists, scripts
- `monitoring/` : surveillance, alerting, dashboards
- `onboarding/` : intégration nouveaux devs, checklist sécurité
- `faq/` : questions fréquentes, liens utiles
- `samples/` : exemples ultra avancés, snippets, cas d’usage pour chaque guide
- `index.js` : point d’entrée modulaire pour tous les guides JS

## Utilisation

Import JS modulaire :
```js
const { api, audit, compliance, monitoring, onboarding, rbac, faq, samples } = require('./guides');
// api.getApiIntegrationGuide(), audit.getAuditGuide(), ...
```

Chaque sous-dossier contient le guide principal, des exemples, et des ressources complémentaires, prêts à l’emploi ou à l’extension.

---

# 3D Security Technical Guides (EN)

This folder contains advanced, business-oriented guides, separated by topic for clarity and direct use. The `index.js` file provides a modular JS entry point for all guides.
