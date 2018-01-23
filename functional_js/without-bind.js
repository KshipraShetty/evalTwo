let slice = Array.prototype.slice;//eslint-disable-line

function logger(namespace) {
 return function () {//eslint-disable-line
   console.log.apply(null, [namespace].concat(slice.call(arguments)));//eslint-disable-line
  };
// return a;
}

module.exports = logger;

let info = logger('INFO:')//eslint-disable-line
info('this is an info message');
// INFO: this is an info message

let warn = logger('WARN:')//eslint-disable-line
warn('this is a warning message', 'with more info');
