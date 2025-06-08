# tests_centralises – Tests ultra avancés (clé en main)

Ce dossier regroupe tous les tests unitaires, d’intégration et de conformité pour le module Threed (JS & Python).

- `__init__.js` : initialisation continue, découverte automatique des tests JS
- `__init__.py` : initialisation continue, découverte automatique des tests Python
- Sous-dossiers : chaque sous-module (rgpd, plugins, templates, etc.) est centralisé et extensible

Respecte la logique métier (tests uniquement), la structure modulaire et le cahier des charges Dihya.
Synchronisation JS/Python, documentation automatique, auditabilité CI/CD, extension facile, documentation à chaque niveau.

## Structure
- `rgpd/` : tests RGPD ultra avancés
- `plugins/` : tests plugins ultra avancés
- `templates/` : tests templates ultra avancés
- ... autres sous-modules centralisés

## Initialisation & Découverte
Chaque sous-module possède des scripts d’initialisation (__init__.py, __init__.js) pour la découverte automatique des tests et l’intégration CI/CD.

## Exécution
- Python : utiliser `pytest` à la racine de ce dossier
- JS : utiliser `jest` ou `npm test` à la racine de ce dossier

## Documentation
La documentation est générée automatiquement et synchronisée avec le code métier.

## Lancement professionnel des tests centralisés Python pour le module Threed

Pour garantir la résolution correcte des imports et la conformité à la structure ultra avancée :

1. Placez-vous dans le dossier des tests centralisés :

    ```bash
    cd backend/components/metiers/threed/tests_centralises
    ```

2. Lancez le script d’entrée dédié :

    ```bash
    ./run_tests.py
    ```

Ce script ajoute automatiquement le chemin du module `threed` au `sys.path` avant d’exécuter tous les tests avec pytest. Cela garantit :
- 0 erreur d’import
- une compatibilité totale avec la structure multi-dossiers
- un workflow clé en main pour tous les développeurs et métiers

**Note** : Ne pas supprimer ce script, il remplace tout besoin de conftest.py ou de hacks d’import dans les tests.

---

Pour toute modification de structure, mettez à jour ce README et le script d’entrée.

> Architecture prête pour extension, audit, synchronisation JS/Python, et industrialisation des tests centralisés.
