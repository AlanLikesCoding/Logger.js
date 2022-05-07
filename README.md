# Logger.js

Logger.js is a next generation logging library for node.js. Using logger.js, you can create easy, readable logging messages, you can format them to your liking and customize their styling to your liking.

## Installation

Currently, there isn't a easy solution for installing Stor.io on your website, so you will have to `git clone` this repo.
```bash
git clone https://github.com/AlanLikesCoding/Logger.js.git
```

## Usage

Currently, proper documentation has not been made, althought it would be appreciated if you could make pull requests to do so.

### Logger
The logger class is a class that is provided in logger.js. With this feature, you can console.log messags with style and format. Below is an example of what you could potentially do.
```js
const con = new logger({
  format: '[%time%] %level% %url% %status%',
});

con.log({
  time: 'Friday, 6th of May, 2021. 12:15 PM SGT',
  level: 'INFO',
  url: '/',
  status: 200,
  style: {
    background: 'red',
    foreground: 'white',
  },
});

con.log('Plaintext');

con.log('Plaintext with style', {
  background: 'green',
  foreground: 'white'
});
```
### Tint
The tint is a feature provided in logger.js. It allows you to create colored console text messages, and allows you to do so with ease and minimalism.
```js
const { tint, logger } = require('./src/main.js');

console.log(tint.fg.green('This is a message with a green text color'));

console.log(tint.bg.green('This is a message with a green background'));
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate. As of right now, please use the SemVer versioning scheme and put your changes in the [changelog](CHANGELOG.md) file.

## License
[GNU AGPLv3](LICENSE.txt)