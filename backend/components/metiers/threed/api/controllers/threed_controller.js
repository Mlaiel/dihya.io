// threed_controller.js – Contrôleur ultra avancé API Threed (JS)
const db = require('../db/db');
const { validatethreedEntity } = require('../validators/validators');
const { auditEntity } = require('../audit/audit');
const { rgpdSanitize } = require('../rgpd/rgpd');
const { checkAccessibility } = require('../accessibility/accessibility');
const { beforeAction, afterAction } = require('../hooks/hooks');

const ThreedController = {
  async getById(id) {
    beforeAction('read', { id });
    let entity = db.findById('threed', id);
    if (!entity) return null;
    entity = rgpdSanitize(entity);
    checkAccessibility(entity);
    auditEntity(entity, 'read');
    afterAction('read', entity);
    return entity;
  },
  async create(data) {
    beforeAction('create', data);
    validatethreedEntity(data);
    const created = db.insert('threed', data);
    auditEntity(created, 'create');
    afterAction('create', created);
    return rgpdSanitize(created);
  },
  async update(id, data) {
    beforeAction('update', { id, ...data });
    validatethreedEntity(data);
    const updated = db.update('threed', id, data);
    auditEntity(updated, 'update');
    afterAction('update', updated);
    return rgpdSanitize(updated);
  },
  async delete(id) {
    beforeAction('delete', { id });
    const deleted = db.delete('threed', id);
    auditEntity({ id }, 'delete');
    afterAction('delete', { id });
    return deleted;
  }
};

module.exports = ThreedController;
