# README – Intégration Python sécurité 3D

Ce dossier contient des guides, helpers, middlewares et snippets ultra avancés pour l’intégration Python en sécurité 3D.

- Guides d’intégration API, RBAC, audit, conformité, monitoring
- Helpers et middlewares réutilisables
- Exemples d’intégration clé en main

---

# 3D Security Python Integration (EN)

This folder contains advanced Python integration guides, helpers, and reusable middlewares for 3D security.

# 📦 Intégration Python – Modules métier

Ce dossier regroupe tous les modules d’intégration Python pour les domaines métier : API, RBAC, Audit, Compliance, Monitoring, Onboarding, ainsi que les samples d’intégration.

## Structure
- Un sous-dossier par domaine métier : `api`, `rbac`, `audit`, `compliance`, `monitoring`, `onboarding`
- Un sous-dossier `samples` pour les exemples d’intégration ultra avancés
- Chaque sous-dossier contient helpers Python, helpers JS, README, points d’entrée (`__init__.js`, `__init__.py`)
- Un fichier `index.js` permet l’import centralisé de tous les modules et samples JS

## Utilisation de l’index modulaire
```js
import * as metiers from './index.js';
metiers.api.apiHello();
metiers.samples.api.runApiSample();
// ...etc.
```

## Utilisation Python
```python
from .api.api_helper import *
from .samples.api import *
```

---

> Structure modulaire, professionnelle, clé en main, conforme au cahier des charges.
