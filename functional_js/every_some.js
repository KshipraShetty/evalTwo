function checkUsersValid(goodUsers) {
  function allUsersValid(submittedUsers) {
    return submittedUsers.every(subUser =>
      goodUsers.some(goodUser => (goodUser.id === subUser.id)));
  }
  return allUsersValid(submittedUsers);
}
module.exports = checkUsersValid;

// base case
let goodUsers = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
];
let submittedUsers = [
  { id: 2 },
  { id: 3 },
  { id: 1 },
];
console.log('Test for base case: ', checkUsersValid(goodUsers) === true);

// empty case
goodUsers = [];
submittedUsers = [];
console.log('Test for empty id case: ', checkUsersValid(goodUsers) === true);
