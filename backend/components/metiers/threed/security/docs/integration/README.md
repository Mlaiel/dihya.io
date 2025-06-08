# README – Intégration sécurité 3D

Ce dossier regroupe tous les guides, helpers et snippets d’intégration ultra avancés pour la sécurité 3D, séparés par technologie :

- `nodejs/` : intégration Node.js (snippets, middlewares, helpers, guides)
- `python/` : intégration Python (snippets, middlewares, helpers, guides)

Chaque sous-dossier contient des exemples concrets, des helpers réutilisables, et des guides d’intégration clé en main.

---

# 3D Security Integration (EN)

This folder contains advanced integration guides, helpers, and snippets for 3D security, separated by technology (Node.js, Python). See subfolders for details.

# 📦 Intégration – Modules Node.js & Python

Ce dossier regroupe tous les modules d’intégration pour les domaines métier : API, RBAC, Audit, Compliance, Monitoring, Onboarding, ainsi que les samples d’intégration Node.js et Python.

## Structure
- Un sous-dossier `nodejs/` pour les modules Node.js
- Un sous-dossier `python/` pour les modules Python
- Un sous-dossier `samples/` pour les exemples d’intégration ultra avancés
- Un fichier `index.js` permet l’import centralisé de tous les modules et samples

## Utilisation de l’index modulaire
```js
import * as integration from './index.js';
integration.nodejs.api.apiHello();
integration.python.api.apiHello();
integration.samples.nodejs.api.runApiSample();
// ...etc.
```

---

> Structure modulaire, professionnelle, clé en main, conforme au cahier des charges.
