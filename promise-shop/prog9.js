const parsePromised = () => Promise.then((resolve, reject) => {
  try {
    resolve(JSON.parse(process.argv[2]));
  } catch (error) {
    reject(error.message);
  }
}).then(console.log);

module.exports = parsePromised;
parsePromised();

// parsePromised((resolve,reject) => {
//   try {
//
//   }
// })
