// Load Module dependencies.
const faker = require('faker');

function getMethodFakerData(method, option) {
    if(method === 'locales') {
        return Object.keys(faker.locales);
    } else {
        return faker[method][option] &&
            faker[method][option]();
    }
}

// exports
module.exports = function(locale){
  faker.locale = locale;

  return (method, option) => {
    return getMethodFakerData(method, option);
  };
};

module.exports.fields = function(which){
    which = which === 'names' ? 'name': which;

    return Object.keys(faker[which]);
};

/**
 * @type {(keyof import('@faker-js/faker').Faker)[]}
 */
module.exports.fakerMethods = [
    'address',
    'animal',
    'color',
    'commerce',
    'company',
    'database',
    'date',
    'definitions',
    'fake',
    'finance',
    'git',
    'hacker',
    'helpers',
    'image',
    'internet',
    'locale',
    'locales',
    'lorem',
    'name',
    'phone',
    'random',
    'science',
    'system',
    'vehicle',
    'word',
];
