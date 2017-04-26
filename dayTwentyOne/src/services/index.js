const inventory = require('./inventory/inventory.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(inventory);
};
