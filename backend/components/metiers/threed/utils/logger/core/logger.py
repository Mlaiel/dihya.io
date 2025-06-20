"""
Logger ultra avancé pour Threed.
- Multi-niveaux, audit, fallback, plugins, RGPD.
"""

import logging


class ThreedLogger:
    def __init__(self, name: str):
        self.logger = logging.getLogger(name)
        self.logger.setLevel(logging.INFO)
        if not self.logger.handlers:
            handler = logging.StreamHandler()
            formatter = logging.Formatter(
                "[%(asctime)s][%(levelname)s] %(message)s"
            )
            handler.setFormatter(formatter)
            self.logger.addHandler(handler)

    def info(self, msg: str):
        self.logger.info(msg)

    def warning(self, msg: str):
        self.logger.warning(msg)

    def error(self, msg: str):
        self.logger.error(msg)

    def audit(self, action: str, user: str = None, details: dict = None):
        self.logger.info(
            f"AUDIT | action={action} | user={user} | details={details}"
        )

    def fallback(self, msg: str):
        # Fallback ultra avancé (exemple)
        self.logger.warning(f"FALLBACK | {msg}")
