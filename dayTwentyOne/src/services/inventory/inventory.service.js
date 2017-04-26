// Initializes the `inventory` service on path `/inventory`
const createService = require('feathers-nedb');
const createModel = require('../../models/inventory.model');
const hooks = require('./inventory.hooks');
const filters = require('./inventory.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'inventory',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/inventory', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('inventory');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
