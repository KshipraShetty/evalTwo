
// module.exports = logger;
function logger(namespace) {
  return function (sentence) {
    // console.log(this)
    const args = [this.toString()].concat([].slice.call(arguments));
    console.log.apply(null, args);
  }.bind(namespace);
}
module.exports = logger;

console.log('Return type of function:', typeof logger('info') === 'function');
/* console.log('Check for common case', logger('info', 'hey') === 'hey info');
console.log('Check for common case', logger('info', '') === ' info');
console.log('Check for common case', logger('', '') === '');
*/
