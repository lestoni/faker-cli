#!/usr/bin/env node
const { program } = require('commander');

const pkg = require('../package.json');
const generate = require('..');
const { fields, fakerMethods } = require('..');

const log = console.log;

program
  .version(pkg.version)
  .description('A cli wrapper for fakerjs')
  .usage('[option]')
  .option('-a, --address  [option]', 'Street address')
  .option('-A, --animal   [option]', 'Want to build a farm?')
  .option('--color        [option]', 'So beautiful')
  .option('-C  --commerce [option]', 'Commerce related info ')
  .option('-c, --company  [option]', 'Company info')
  .option('-D, --database [option]', 'Database stuff')
  .option('-d, --date     [option]', 'Date options')
  .option('-F  --faker    [option]', 'Fake everything')
  .option('-f  --finance  [option]', 'Finance field')
  .option('-g  --git      [option]', 'Git gud')
  .option('-x, --hacker   [option]', 'Hackers stuff')
  .option('-H, --helpers  [option]', 'Detailed contextual data')
  .option('-I, --image    [option]', 'Image data')
  .option('-i  --internet [option]', 'Internet goodies')
  .option('-L, --locale   [option]', 'Set locale, defaults to en', 'en')
  .option('-l  --lorem    [option]', 'Lorem ipsum goodness')
  .option('-n  --name     [option]', 'Person name(s)')
  .option('-p  --phone    [option]', 'Phone number options')
  .option('-r  --random   [option]', 'Randomness')
  .option('-S  --science  [option]', 'Science stuff')
  .option('-s  --system   [option]', 'System Info')
  .option('-v  --vehicle  [option]', 'Vehicle Info')
  .option('-w  --word     [option]', 'In case you want to write a book')
  .option('--locales', 'List available locales');

program.on('--help', function(){
  log('  faker-cli <cmd> help    List options available for <cmd>');
  log('');
  log('  Examples');
  log('');
  log('\t$ faker-cli --git commitMessage');
  log('\t$ faker-cli --random uuid');
  log('\t$ faker-cli --locale de --name firstName');
  log('\t$ For a detailed list of all possible functions, visit https://fakerjs.dev');
  log('');
});

program.parse(process.argv);

const getMethodOutput = generate(program.locale);

main();

// This is an abuse of IF Statement
function main(){

  if(program.locales){
    return processOption('locales');
  }

  if(!program.rawArgs[3]){
    return program.help();
  }

  const [fakerMethod] = fakerMethods.filter(method => {
    return program[method] !== undefined;
  });

  if(!fakerMethod){
    return program.help();
  } else {
    return processOption(fakerMethod);
  }
}

function processOption(fakerMethod){
  const selectedMethod = program[fakerMethod];

  if(selectedMethod === 'help') {
    printHelp(fakerMethod)
  }

  const methodData = getMethodOutput(fakerMethod, selectedMethod);

  log(JSON.stringify(methodData, null, 2))
}


function printHelp(which){

  log(`     Available options for ${which}`);

  fields(which).forEach(function(field){
    log(`\t ${field}`);
  });

  log('\n');
  process.exit(1);
}
