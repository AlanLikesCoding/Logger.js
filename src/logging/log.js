const bg = require('../colors/background.js');
const fg = require('../colors/foreground.js');
const combine = require('../colors/combine.js');

class logger {
  constructor(arg) {
    if(typeof arg != 'object') throw `Error: Undefined initializer type ${typeof arg}`;
    let parsed = [];
    let lex = arg.format.split('');
    let num = 0;
    for(let i = 0; i < lex.length; i++) {
      let char = lex[i];
      let j = 0;
      switch(char) {
        case '%':
          j = i + 1;
          let name = '';
          while(lex[j] != '%') {
            name += lex[j];
            j++;
          }
          parsed.push({
            type: 'var',
            name: name,
          });
          num += 1;
          i = j;
          break;
        default:
          j = i;
          let string = '';
          while(lex[j] != '%') {
            string += lex[j];
            j++;
          }
          parsed.push({
            type: 'string',
            value: string,
          })
          i = j - 1;
      }
    }
    this.num = num;
    this.parsed = parsed;
  }
  log(arg, styles = 0) {
    switch(typeof arg) {
      case 'object':
        this.#obj(arg);
        break;
      case 'undefined':
        throw 'Error: Undefined logging type "undefined."';
        break;
      case 'function':
        throw 'Error: Undefined logging type "function."';
        break;
      default:
        this.#text(arg, styles);
    }
  }
  #obj(arg) {
    const keys = Object.keys(arg);
    let message = '';
    for(let i = 0; i < this.parsed.length; i++) {
      switch(this.parsed[i].type) {
        case 'string':
          message += this.parsed[i].value;
          break;
        case 'var':
          for(let j = 0; j < keys.length; j++) {
            // if(this.parsed[i] == null || this.parsed[i].name == null)  continue;
            if(keys[j] == this.parsed[i].name) {
              message += arg[keys[j]];
            }
          }
      }  
    }
    if(arg.style != null) {
      let code = 5;
      if(arg.style.background == null) code -= 3;
      if(arg.style.foreground == null) code -= 2;
      switch(code) {
        case 5:
          if(bg[arg.style.background] == null)  break;
          if(bg[arg.style.foreground] == null)  break;
          message = combine(bg[arg.style.background]) + combine(fg[arg.style.foreground]) + message + combine(0);
          break;
        case 3:
          if(bg[arg.style.background] == null)  break;
          message = combine(bg[arg.style.background]) + message + combine(0);
          break;
        case 2:
          if(bg[arg.style.foreground] == null)  break;
          message = combine(fg[arg.style.foreground]) + message + combine(0);
          break;
      }
    }
    console.log(message);
  }
  #text(arg, styles = 0) {
    if(styles != 0) {
      let code = 5;
      if(styles.background == null) code -= 3;
      if(styles.foreground == null) code -= 2;
      switch(code) {
        case 5:
          if(bg[styles.background] == null)  break;
          if(bg[styles.foreground] == null)  break;
          arg = combine(bg[styles.background]) + combine(fg[styles.foreground]) + arg + combine(0);
          break;
        case 3:
          if(bg[styles.background] == null)  break;
          arg = combine(bg[styles.background]) + arg + combine(0);
          break;
        case 2:
          if(bg[styles.foreground] == null)  break;
          arg = combine(fg[styles.foreground]) + arg + combine(0);
          break;
      }
    }
    console.log(arg);
  }
}

module.exports = logger;