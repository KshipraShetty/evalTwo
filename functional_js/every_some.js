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

// no match case
goodUsers = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
];
submittedUsers = [
  { id: 2 },
  { id: 3 },
  { id: 4 },
];
console.log('Test for false case: ', checkUsersValid(goodUsers) === false);

goodUsers = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
];
submittedUsers = [
  { id: 2 },
  { id: 4 },
];
console.log('Test for false case: ', checkUsersValid(goodUsers) === false);

goodUsers = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 5 },
];
submittedUsers = [
  { id: 5 },
  { id: 9 },
];
console.log('Test for longer list of good users containing submitted ids at the end: ', checkUsersValid(goodUsers) === true);
