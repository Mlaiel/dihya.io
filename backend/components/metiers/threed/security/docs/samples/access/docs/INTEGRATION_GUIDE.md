# Guide d’intégration – Gestion des accès

## Objectif
Fournir des instructions pas à pas pour intégrer les helpers d’accès (MFA, SSO, provisioning) dans vos applications JS/Python.

## 1. Installation
- Copiez les fichiers du dossier `helpers/` dans votre projet
- Installez les dépendances nécessaires (ex : `pip install` ou `npm install` si besoin)

## 2. Utilisation des helpers
### En JavaScript
```js
const { generateMfaToken, provisionUser } = require('./helpers/helpers_access');
const user = { id: 'u123', name: 'Alice' };
const provisioned = provisionUser(user);
const mfaToken = generateMfaToken(user.id);
```

### En Python
```python
from helpers.helpers_access import generate_mfa_token, provision_user
user = {'id': 'u123', 'name': 'Alice'}
provisioned = provision_user(user)
mfa_token = generate_mfa_token(user['id'])
```

## 3. Bonnes pratiques
- Toujours valider les entrées utilisateur
- Logger les accès sensibles
- Tester chaque scénario avec les scripts du dossier `samples/`

## 4. Extension
- Ajoutez vos propres helpers dans `helpers/`
- Documentez chaque ajout dans ce dossier

---

Guide validé par un ingénieur senior, conforme au cahier des charges Dihya.
