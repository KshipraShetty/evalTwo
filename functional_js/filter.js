function getShortMessages(arrayMessages) {
  const output = arrayMessages.filter((obj) => {
    if (obj.message.length < 50) { return obj; }
    return false;
  });
  return output.map(element => element.message);
}

module.exports = getShortMessages;
const arrayObj = [{ message: 'hello there!' },
  { message: 'Whats up' },
  { message: 'dfghjkfyghouxhusxhusxuosbsu xbsuxbu qwertyuiopasdfghjkl    jkokzijiohxousxhugxugwux' },
];
const output = ['hello there!', 'Whats up'];

console.log('Testing the base case :', getShortMessages(arrayObj).toString() === output.toString());
