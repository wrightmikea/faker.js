var util = require('util');

var definitions = require('../lib/definitions');

var Faker = require('../index');

var card = new Faker.Helpers.createCard();

util.puts(JSON.stringify(card));

var transaction = Faker.Helpers.createTransaction();

util.puts(JSON.stringify(transaction));

