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

module.exports.fakerMethods = [
    'names',
    'address',
    'phone',
    'internet',
    'company',
    'image',
    'lorem',
    'helpers',
    'date',
    'random',
    'finance',
    'hacker',
    'locales',
    'definitions',
    'local',
    'system',
    'commerce',
    'database'
];
