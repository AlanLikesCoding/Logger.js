const combine = (esc) => {
  if (isNaN(parseFloat(esc)))  throw 'ANSI Error [A0001]: "ANSI escape code is not a number."';
  if(!parseFloat(esc) > 29 && !parseFloat(esc) < 38 || 
     !parseFloat(esc) > 39 && !parseFloat(esc) < 98)  return 'OOR';
  return '\u001b[' + esc + 'm';
}

module.exports = combine;