function program2(name) {
  let a = `Hello, !
  Your name lowercased is.`;
  if (name != null) {
    a =
`Hello, ${name}!\n Your name lowercased is "${name.toLowerCase()}".`;
  }
  return a;
}
module.exports = program2;
