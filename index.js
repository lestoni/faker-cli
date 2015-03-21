// Load Module dependencies.
var faker = require('faker');

/**
 * Returns random address of the given type.
 *
 * @param {object} type of field to return
 * @return {string} address value
 */
function getAddress(options){
  return faker.address[options.type] &&
        faker.address[options.type]();
}

/**
 * Returns a person's name.
 *
 * @param {object} type of field to return
 * @return {string} name value
 */
function getName(options){
  return faker.name[options.type] &&
        faker.name[options.type]();
}

/**
 * Returns a phone number.
 *
 * @param {object} type of field to return
 * @return {string} phone number value
 */
function getPhone(options){
  return faker.phone[options.type] &&
        faker.phone[options.type]();
}

/**
 * Returns an internet related data.
 *
 * @param {object} type of field to return
 * @return {string} internet related data value
 */
function getInternet(options){
  return faker.internet[options.type] &&
        faker.internet[options.type]();
}

/**
 * Returns an company related data.
 *
 * @param {object} type of field to return
 * @return {string} company related data value
 */
function getCompany(options){
  return faker.company[options.type] &&
        faker.company[options.type]();
}

/**
 * Returns an image/avatar related data.
 *
 * @param {object} type of field to return
 * @return {string} image/avatar related data value
 */
function getImage(options){
  return faker.image[options.type] &&
        faker.image[options.type]();
}

/**
 * Returns an lorem ipsum goodness.
 *
 * @param {object} type of field to return
 * @return {string} lorem ipsum goodness
 */
function getLorem(options){
  return faker.lorem[options.type] &&
        faker.lorem[options.type]();
}

/**
 * Returns an date data.
 *
 * @param {object} type of field to return
 * @return {string} date data.
 */
function getDate(options){
  return faker.date[options.type] &&
        faker.date[options.type]();
}

/**
 * Returns contextual data.
 *
 * @param {object} type of field to return
 * @return {string|object} contextual data.
 */
function getHelpers(options){
  return faker.helpers[options.type] &&
        faker.helpers[options.type]();
}

/**
 * Returns misc random data.
 *
 * @param {object} type of field to return
 * @return {string} data value.
 */
function getRandom(options){
  return faker.random[options.type] &&
        faker.random[options.type]();
}

/**
 * Returns finance related data.
 *
 * @param {object} type of field to return
 * @return {string} finance related data value.
 */
function getFinance(options){
  return faker.finance[options.type] &&
        faker.finance[options.type]();
}

/**
 * Returns hacker stuff
 *
 * @param {object} type of field to return
 * @return {string} hacker stuff data
 */
function getHackers(options){
  return faker.hacker[options.type] &&
        faker.hacker[options.type]();
}

/**
 * Returns some definitions.
 *
 * @param {object} type of field to return
 * @return {string} definition data.
 */
function getDefinition(options){
  return faker.definition[options.type] &&
        faker.definition[options.type]();
}

// return list of supported locales.
function getLocales(){
  return Object.keys(faker.locales);
}


// exports
module.exports = function(locale){
  faker.locale = locale;

  return {
    name        : getName,
    address     : getAddress,
    phone       : getPhone,
    internet    : getInternet,
    company     : getCompany,
    image       : getImage,
    lorem       : getLorem,
    helpers     : getHelpers,
    date        : getDate,
    random      : getRandom,
    finance     : getFinance,
    hacker      : getHackers,
    locales     : getLocales,
    definitions : getDefinition,
    locale      : locale
  };
};

module.exports.fields = function(which){
  if(which === 'random'){
    return ['uuid'];
  }
  if(which === 'helpers'){
    return ['contextualCard','createCard','createTransaction','userCard'];
  }
  return Object.keys(faker[which]);
};
