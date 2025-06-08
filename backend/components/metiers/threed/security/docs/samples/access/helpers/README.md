# helpers – Access (Gestion des accès)

Ce dossier contient tous les helpers ultra avancés pour la gestion des accès :
- **MFA** (Multi-Factor Authentication)
- **SSO** (Single Sign-On)
- **Provisioning utilisateur**
- **Gestion de session et tokens**
- **Logs d’accès, audit, traçabilité**
- **Validation de politiques d’accès (RGPD, RBAC, etc.)**
- **Intégration multi-langages (JS, Python)**

## Point d’entrée unique

- `index.js` : Importez tous les helpers d’un coup :
```js
const helpers = require('./index');
const token = helpers.generateMfaToken('user1');
const sso = helpers.initiateSsoLogin('google', 'https://app.dihya.io/callback');
const log = helpers.logAccessEvent('user1', 'LOGIN', { ip: '127.0.0.1' });
```

## Helpers disponibles
- `mfa/helpers_access.js`/`.py` : MFA, provisioning
- `sso/sso_helper.js`/`.py` : SSO
- `audit/advanced_access_helper.js`/`.py` : logs, audit, validation de politiques

## Exemples d’utilisation

### JavaScript
```js
const { generateMfaToken, provisionUser, initiateSsoLogin, logAccessEvent, validateAccessPolicy } = require('./helpers');
const token = generateMfaToken('user1');
const sso = initiateSsoLogin('google', 'https://app.dihya.io/callback');
const log = logAccessEvent('user1', 'LOGIN', { ip: '127.0.0.1' });
const isAllowed = validateAccessPolicy(user, resource, policy);
```

### Python
```python
from .helpers import generate_mfa_token, provision_user, initiate_sso_login, log_access_event, validate_access_policy

token = generate_mfa_token('user1')
sso = initiate_sso_login('google', 'https://app.dihya.io/callback')
log = log_access_event('user1', 'LOGIN', {'ip': '127.0.0.1'})
is_allowed = validate_access_policy(user, resource, policy)
```

## Bonnes pratiques
- Utilisez toujours les helpers pour garantir la sécurité et la conformité
- Ajoutez des tests pour chaque nouveau helper
- Documentez chaque scénario métier

---

Structure validée par un ingénieur senior, clé en main, prête pour l’industrialisation.
