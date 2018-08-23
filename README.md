# ATB Plastic bag

![Plastic bag](http://www.comserv.com.ua/images/stories/klienty/12.jpg)

ATB Plastic Bag likes to travel around the world and take a lot of photos. The next photo will be taken in your project. So, how to do it:
## Installation:

```
npm install atbmarket -g
```

## Add to your entry JS script:

```
const Provision = require('atbmarket');

const bag = new Provision();
bag.draw()    // Draw the bag in terminal
bag.caption() // Show a caption in terminal
bag.chalk()   // Show both bag and caption in terminal
```

## Or just run it in terminal:

`atbmarket` draws plastic bag in terminal.

`atbmarket --help` shows more details.

### Options:

```
  -V, --version           output the version number
  -S, --size <size>       Choose size (default: medium)
  --no-colorized [value]  Is supposed to be not colorized?
  -h, --help              output usage information
```

Enjoy and show ATB the world of your production!
