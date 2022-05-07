const { tint, logger } = require('./src/main.js');

console.log(tint.fg.green('This is a message with a green text color'));

console.log(tint.bg.green('This is a message with a green background'));

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