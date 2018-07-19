// Load Module dependencies.
var faker = require('faker');

/**
 * Get Random address of the given type.
 *
 * @param {object} type of field to return
 * @return {string} address value
 */
function getAddress(options){
  return faker.address[options.type] &&
        faker.address[options.type]();
}

/**
 * Get A person's name.
 *
 * @param {object} type of field to return
 * @return {string} name value
 */
function getName(options){
  return faker.name[options.type] &&
        faker.name[options.type]();
}

/**
 *  Get Phone numbers
 *
 * @param {object} type of field to return
 * @return {string} phone number value
 */
function getPhone(options){
  return faker.phone[options.type] &&
        faker.phone[options.type]();
}

/**
 * Get internet related data.
 *
 * @param {object} type of field to return
 * @return {string} internet related data value
 */
function getInternet(options){
  return faker.internet[options.type] &&
        faker.internet[options.type]();
}

/**
 * Get company related data.
 *
 * @param {object} type of field to return
 * @return {string} company related data value
 */
function getCompany(options){
  return faker.company[options.type] &&
        faker.company[options.type]();
}

/**
 * Get an image/avatar related data.
 *
 * @param {object} type of field to return
 * @return {string} image/avatar related data value
 */
function getImage(options){
  return faker.image[options.type] &&
        faker.image[options.type]();
}

/**
 * Get lorem ipsum goodness.
 *
 * @param {object} type of field to return
 * @return {string} lorem ipsum goodness
 */
function getLorem(options){
  return faker.lorem[options.type] &&
        faker.lorem[options.type]();
}

/**
 * Get date data.
 *
 * @param {object} type of field to return
 * @return {string} date data.
 */
function getDate(options){
  return faker.date[options.type] &&
        faker.date[options.type]();
}

/**
 * Get contextual data.
 *
 * @param {object} type of field to return
 * @return {string|object} contextual data.
 */
function getHelpers(options){
  return faker.helpers[options.type] &&
        faker.helpers[options.type]();
}

/**
 * Get misc random data.
 *
 * @param {object} type of field to return
 * @return {string} data value.
 */
function getRandom(options){
  return faker.random[options.type] &&
        faker.random[options.type]();
}

/**
 * Get finance related data.
 *
 * @param {object} type of field to return
 * @return {string} finance related data value.
 */
function getFinance(options){
  return faker.finance[options.type] &&
        faker.finance[options.type]();
}

/**
 * Get hacker stuff
 *
 * @param {object} type of field to return
 * @return {string} hacker stuff data
 */
function getHackers(options){
  return faker.hacker[options.type] &&
        faker.hacker[options.type]();
}

/**
 * Get some definitions.
 *
 * @param {object} type of field to return
 * @return {string} definition data.
 */
function getDefinition(options){
  return faker.definition[options.type] &&
        faker.definition[options.type]();
}

/**
 * Get commerce randomnness
 *
 * @param {object} type of field to return
 * @return {string} commerce data.
 */
function getCommerce(options){
  return faker.commerce[options.type] &&
        faker.commerce[options.type]();
}

/**
 * Get System randomnness
 *
 * @param {object} type of field to return
 * @return {string} system data.
 */
function getSystem(options){
  return faker.system[options.type] &&
        faker.system[options.type]();
}

/**
 * Get Database randomnness
 *
 * @param {object} type of field to return
 * @return {string} system data.
 */
function getDatabase(options){
  return faker.database[options.type] &&
        faker.database[options.type]();
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
    locale      : locale,
    system      : getSystem,
    commerce    : getCommerce,
    database    : getDatabase
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
