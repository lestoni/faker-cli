// jshint mocha:true

// WARNING: true randomness is not granteed always

var assert = require('assert');
var generate = require('../');

describe('generate#locales', function(){
  it('should return an array of supported locales', function() {
    var gen = generate('en');
    var data = gen.locales();

    assert(data);
    assert(Array.isArray(data));
    assert(data.indexOf('en') !== -1);
  });
});

describe('generate#locale', function() {
  it('should enable use of available locales', function() {
    var gen = generate('en');
    var gen1 = generate('de');

    assert.notEqual(gen.locale, gen1.locale);

  });
});


describe('generate#address', function() {
  var gen = generate('en');

  it('should return  data', function(){

    assert(gen.address({ type : 'country' }));
    assert(gen.address({ type : 'city' }));
  });

  it('should return random data', function() {

    var data1 = gen.address({ type : 'country' });
    var data2 = gen.address({ type : 'country' });

    assert.notEqual(data1, data2);
  });

  it('should not return data for wrong option', function(){
    var gen = generate('en');

    var data = gen.address({ type: 'province' });

    assert(!data);
  });

});

describe('generate#company', function() {
  var gen = generate('en');

  it('should return  data', function(){

    assert(gen.company({ type : 'bs' }));
    assert(gen.company({ type : 'bsBuzz' }));
  });

  it('should return random data', function() {

    var data1 = gen.company({ type : 'bsNoun' });
    var data2 = gen.company({ type : 'bsNoun' });

    assert.notEqual(data1, data2);
  });

  it('should not return data for wrong option', function(){
    var gen = generate('en');

    var data = gen.company({ type: 'startups' });

    assert(!data);
  });

});

describe('generate#date', function() {
  var gen = generate('en');

  it('should return date type data', function(){

    assert(gen.date({ type : 'past' }));
    assert(gen.date({ type : 'future' }));

    var date = gen.date({ type: 'past' });
    date = new Date(date);

    assert.notEqual(date, 'Invalid date');
  });

  it('should return random data', function() {

    var data1 = gen.date({ type : 'past' });
    var data2 = gen.date({ type : 'past' });

    assert.notEqual(data1, data2);
  });

  it('should not return data for wrong option', function(){
    var gen = generate('en');

    var data = gen.date({ type: 'calendar' });

    assert(!data);
  });

});

describe('generate#finance', function() {

  it('should return string data', function(){
    var gen = generate('en');
    var data1 = gen.finance({ type : 'account' });
    var data2 = gen.finance({ type : 'mask' });

    assert(data1);
    assert(data2);
    assert(typeof data1 === 'string');
  });

  it('should return random data', function() {
    var gen = generate('en');
    var data1 = gen.finance({ type : 'accountName' });
    var data2 = gen.finance({ type : 'accountName' });

    assert.notEqual(data1, data2);
  });

  it('should not return data for wrong option', function(){
    var gen = generate('en');

    var data = gen.finance({ type: 'investors' });

    assert(!data);
  });

});

describe('generate#internet', function() {
  var gen = generate('en');

  it('should return string data', function(){
    var data1 = gen.internet({ type : 'avatar' });
    var data2 = gen.internet({ type : 'userName' });

    assert(data1);
    assert(data2);
    assert(typeof data1 === 'string');
  });

  it('should return random data', function() {

    var data1 = gen.internet({ type : 'email' });
    var data2 = gen.internet({ type : 'email' });

    assert.notEqual(data1, data2);
  });

  it('should not return data for wrong option', function(){
    var gen = generate('en');

    var data = gen.internet({ type: 'protocols' });

    assert(!data);
  });

});

//describe('generate#lorem', function() {
  //var gen = generate('en');

  //it('should return  data', function(){
    //var data1 = gen.lorem({ type : 'words' });
    //var data2 = gen.lorem({ type : 'sentence' });

    //assert(data1);
    //assert(data2);
    //assert(Array.isArray(data1));
  //});

  //it('should return random data', function() {

    //var data1 = gen.lorem({ type : 'words' });
    //var data2 = gen.lorem({ type : 'words' });

    //assert.notEqual(data1, data2);
  //});

  //it('should not return data for wrong option', function(){
    //var gen = generate('en');

    //var data = gen.lorem({ type: 'ipsum' });

    //assert(!data);
  //});

//});

describe('generate#name', function() {
  var gen = generate('en');

  it('should return  string data', function(){
    var data1 = gen.name({ type : 'firstName' });
    var data2 = gen.name({ type : 'prefix' });

    assert(data1);
    assert(data2);
    assert(typeof data1 === 'string');
  });

  it('should return random data', function() {

    var data1 = gen.name({ type : 'findName' });
    var data2 = gen.name({ type : 'findName' });

    assert.notEqual(data1, data2);
  });

  it('should not return data for wrong option', function(){
    var gen = generate('en');

    var data = gen.name({ type: 'surname' });

    assert(!data);
  });

});

describe('generate#phone', function() {
  var gen = generate('en');

  it('should return  string data', function(){
    var data1 = gen.phone({ type : 'phoneNumber' });
    var data2 = gen.phone({ type : 'phoneNumberFormat' });

    assert(data1);
    assert(data2);
    assert(typeof data1 === 'string');
  });

  it('should return random data', function() {

    var data1 = gen.phone({ type : 'phoneNumber' });
    var data2 = gen.phone({ type : 'phoneNumber' });

    assert.notEqual(data1, data2);
  });

  it('should not return data for wrong option', function(){
    var gen = generate('en');

    var data = gen.phone({ type: 'emergency' });

    assert(!data);
  });

});

describe('generate#random', function() {
  var gen = generate('en');

  it('should return  string data', function(){
    var data1 = gen.random({ type : 'uuid' });

    assert(data1);
    assert(typeof data1 === 'string');
  });

  it('should return random data', function() {

    var data1 = gen.random({ type : 'uuid' });
    var data2 = gen.random({ type : 'uuid' });

    assert.notEqual(data1, data2);
  });

  it('should not return data for wrong option', function(){
    var gen = generate('en');

    var data = gen.random({ type: 'checks' });

    assert(!data);
  });

});

describe('generate#hacker', function() {
  var gen = generate('en');

  it('should return  string data', function(){
    var data1 = gen.hacker({ type : 'noun' });
    var data2 = gen.hacker({ type : 'phrase' });

    assert(data1);
    assert(data2);
    assert(typeof data1 === 'string');
  });

  it('should return random data', function() {

    var data1 = gen.hacker({ type : 'phrase' });
    var data2 = gen.hacker({ type : 'phrase' });

    assert.notEqual(data1, data2);
  });

  it('should not return data for wrong option', function(){
    var gen = generate('en');

    var data = gen.hacker({ type: 'exploits' });

    assert(!data);
  });

});

describe('generate#helpers', function() {
  var gen = generate('en');

  it('should return json data', function(){
    var data1 = gen.helpers({ type : 'userCard' });
    var data2 = gen.helpers({ type : 'createTransaction' });

    assert(data1);
    assert(data2);
    assert(typeof data1 === 'object');
  });

  it('should return random data', function() {

    var data1 = gen.helpers({ type : 'userCard' });
    var data2 = gen.helpers({ type : 'createTransaction' });

    assert.notEqual(data1, data2);
  });

  it('should not return data for wrong option', function(){
    var gen = generate('en');

    var data = gen.helpers({ type: 'halp' });

    assert(!data);
  });

});


describe('generate#image', function() {
  var gen = generate('en');

  it('should return  string data', function(){
    var data1 = gen.image({ type : 'avatar' });
    var data2 = gen.image({ type : 'sports' });

    assert(data1);
    assert(data2);
    assert(typeof data1 === 'string');
  });


  it('should not return data for wrong option', function(){
    var gen = generate('en');

    var data = gen.image({ type: 'exploits' });

    assert(!data);
  });

});
