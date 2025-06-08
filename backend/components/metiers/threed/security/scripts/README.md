# Scripts d’automatisation – Sécurité 3D

Ce dossier contient :
- Scripts de backup/restore sécurité
- Scripts d’audit automatisé
- Scripts de conformité

## Exemples de scripts
- backup_security.sh
- restore_security.sh
- audit_security.sh
- compliance_check.py

# scripts/

Ce dossier regroupe les scripts de sécurité :
- `audit/` : scripts d’audit de sécurité (Node.js, Python, Shell)
- `backup/` : scripts de sauvegarde (Node.js, Python, Shell)
- `compliance/` : scripts de conformité (Node.js, Python)
- `restore/` : scripts de restauration (Node.js, Python, Shell)
- `samples/` : exemples avancés d’utilisation (audit, backup, compliance, restore)

Chaque sous-dossier contient :
- Les scripts principaux
- Un README explicatif
- Les fichiers d’initialisation (`__init__.js`, `__init__.py`)
- Un fichier `.keep` pour le versionnement

Le point d’entrée principal du module est `index.js`.

## Bonnes pratiques
- Ajouter tout nouveau script ou exemple dans le sous-dossier approprié.
- Documenter chaque script et fournir des exemples d’utilisation.
- Ajouter des tests unitaires pour chaque script.
