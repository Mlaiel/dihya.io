# Utilitaires sécurité – Security Helpers 3D

Ce dossier contient :
- Fonctions utilitaires pour la sécurité (hash, génération de tokens, validation email, etc.)
- Helpers pour logs, audit, conformité
- Exemples d’utilisation dans le code métier

## Exemples de fichiers à inclure
- hash_utils.py
- token_generator.py
- email_validator.py

## Bonnes pratiques
- Centraliser les helpers pour éviter la duplication
- Tester chaque helper sur des cas limites

---

# Security Helpers (EN)

This folder contains security utility functions and helpers for audit, logging, and compliance.

# helpers/

Ce dossier regroupe les helpers de sécurité :
- `logger/` : helpers de logging (Node.js, Python)
- `utils/` : helpers utilitaires (Node.js, Python)
- `samples/` : exemples avancés d’utilisation des helpers (logger, utils)

Chaque sous-dossier contient :
- Les scripts principaux
- Un README explicatif
- Les fichiers d’initialisation (`__init__.js`, `__init__.py`)
- Un fichier `.keep` pour le versionnement

Le point d’entrée principal du module est `index.js`.

## Bonnes pratiques
- Ajouter tout nouveau helper ou exemple dans le sous-dossier approprié.
- Documenter chaque helper et fournir des exemples d’utilisation.
- Ajouter des tests unitaires pour chaque helper.
