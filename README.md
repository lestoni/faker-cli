# faker-cli.

A command-line wrapper for [faker](https://github.com/marak/Faker.js)

# Install.

```
$ npm install -g faker-cli
```

# Examples.

```
$ faker-cli --helpers userCard

$ faker-cli -n findName
```

# Usage.

```
 Usage: faker-cli [option]

  A cli wrapper for fakerjs

  Options:

    -h, --help              output usage information
    -V, --version           output the version number
    -a, --address [value]   street address
    -c, --company [value]   company info
    -d, --date    [value]   date options
    -f  --finance [value]   finance field
    -i  --internet [value]  internet goodies
    -l  --lorem   [value]   lorem ipsum goodnes
    -n  --names    [value]  person name(s)
    -p  --phone   [value]   phone number options
    -r  --random  [value]   randomness
    -L, --locale  [value]   set locale, defaults to en
    -x, --hacker  [value]   hackers stuff
    -H, --helpers [value]   detailed contextual data
    -I, --image   [value]   image data
    -w, --locales           list available locales

  faker-cli <cmd> help    list options available for <cmd>

  Examples

        $ faker-cli --helpers userCard
        $ faker-cli --random uuid
```

# License.

MIT.

