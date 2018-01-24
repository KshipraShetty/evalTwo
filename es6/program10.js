function html(pieces, ...substitutions) {
  let result = pieces[0];
  for (let i = 0; i < substitutions.length; ++i) {
    result += escape(substitutions[i]) + pieces[i + 1];
  }

  return result;
}

function escape(s) {
  return s.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;');
}
// multiple instances of the same unsafe character
// have one testcase for every unsafe character mentioned in the code
module.exports = html;
