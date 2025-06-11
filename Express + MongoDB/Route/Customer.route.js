
module.exports = (app) => {
    const Customer = require('../Controllers/customers.controllers');

    app.get('/', Customer.index)
    app.get('/api/customers', Customer.findAll)
    app.post('/api/customers',Customer.create)
    app.get('/api/customers/:customerId',Customer.findById)
    app.put('/api/customers/:customerId',Customer.update)
    app.delete('/api/customers/:customerId',Customer.delete)
}