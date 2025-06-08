# FAQ – Gestion des accès

## 1. Comment activer le MFA pour un utilisateur ?
Utilisez le helper `generate_mfa_token` (JS/Python) pour générer un token MFA unique. Intégrez-le dans votre workflow d’authentification.

## 2. Comment provisionner un nouvel utilisateur ?
Utilisez la fonction `provisionUser` (JS) ou `provision_user` (Python) avec les données utilisateur. Le helper ajoute les champs de provisioning automatiquement.

## 3. Comment intégrer le SSO ?
Ajoutez un helper dédié dans `helpers/` (ex : `sso_helper.js`/`.py`). Documentez le flow dans ce dossier.

## 4. Où trouver des exemples d’intégration ?
Consultez le dossier `samples/` pour des scénarios concrets en JS et Python.

## 5. Comment tester la sécurité des accès ?
Utilisez les scripts de test dans `tests/` (à créer si besoin) et suivez les bonnes pratiques du guide `SECURITY_ACCESS.md`.

## 6. Comment assurer la conformité RGPD ?
- Stockez les logs d’accès de façon sécurisée
- Documentez les traitements dans ce dossier
- Ajoutez des modèles de consentement si besoin

---

Pour toute question avancée, contactez l’équipe sécurité ou référez-vous au cahier des charges Dihya.
