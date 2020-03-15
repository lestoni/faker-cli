// jshint mocha:true

// WARNING: true randomness is not granteed always

const assert = require('assert');
const generate = require('../');
const fixtures = require('./fixtures');

describe('generate#locales', function(){
    it('should return an array of supported locales', function() {
      const gen = generate('en');
      const data = gen('locales');
  
      assert(data);
      assert(Array.isArray(data));
      assert(data.indexOf('en') !== -1);
    });
});

fixtures.forEach(fixture => {
    const { fakerMethod, output } = fixture
    describe(`generate#${fakerMethod}`, function() {
        const gen = generate('en');
      
        it('should return method output', function(){
            
          assert(gen(fakerMethod, output[0]));
          assert(gen(fakerMethod, output[1]));

          if(fakerMethod === 'date') {
            let date = gen(fakerMethod, output[0]);
            date = new Date(date);
        
            assert.notEqual(date, 'Invalid date');
          }
        });
      
        it('should return random data', function() {
          const data1 = gen(fakerMethod, output[0]);
          const data2 = gen(fakerMethod, output[0]);
      
          assert.notEqual(data1, data2);
        });
      
        it('should not return data for wrong option', function(){
      
          const data = gen(fakerMethod, output[2]);
      
          assert(!data);
        });
      
      });
});
