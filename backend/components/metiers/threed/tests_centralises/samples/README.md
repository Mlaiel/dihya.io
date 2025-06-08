# Samples — Organisation des tests centralisés

Ce dossier regroupe tous les tests d’exemples (samples) ultra avancés, organisés par logique métier et sous-dossier dédié :

- `access/` : tests d'accessibilité et de contrôle d'accès
- `audit/` : tests d'audit, traçabilité, conformité
- `compliance/` : tests de conformité légale et réglementaire
- `helpers/` : helpers de tests (logger, utils, etc.)
- `monitoring/` : tests de monitoring (alerts, grafana, prometheus)
- `policy/` : tests de politiques de sécurité et de gestion
- `rbac/` : tests de contrôle d’accès basé sur les rôles
- `rgpd/` : tests RGPD (conformité, anonymisation, export)
- `scripts/` : tests de scripts d’automatisation (audit, backup, compliance, restore)
- `index.js` : point d’entrée centralisé ultra avancé pour tous les tests d’exemples (import dynamique, exports clé en main, métadonnées, CI/CD ready)

Chaque sous-dossier contient les fichiers de tests correspondants, prêts à être exécutés ou intégrés dans les pipelines CI/CD.

## Logique avancée
- Tous les modules sont importés dynamiquement via `index.js`.
- Métadonnées métier, couverture, auteur, date de mise à jour incluses dans chaque module.
- Structure clé en main, extensible, conforme au cahier des charges Dihya.

---

*Ajoutez ici tout nouveau test d’exemple en respectant la structure et la logique métier. Dernière mise à jour : 2025-06-08.*
