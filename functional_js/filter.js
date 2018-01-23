function getShortMessages(arrayMessages) {
  const output = arrayMessages.filter((obj) => {
    if (obj.message.length < 50) { return obj; }
    return false;
  });
  return output.map(element => element.message);
}

module.exports = getShortMessages;


let arrayObj = [{ message: 'hello there!' },
  { message: 'Whats up' },
  { message: 'dfghjkfyghouxhusxhusxuosbsu xbsuxbu qwertyuiopasdfghjkl    jkokzijiohxousxhugxugwux' },
];
let output = ['hello there!', 'Whats up'];

console.log('Testing the base case :', getShortMessages(arrayObj).toString() === output.toString());

arrayObj = [{ message: '' },
  { message: 'hi' }];
output = ['', 'hi'];
console.log('Testing the empty message value case :', getShortMessages(arrayObj).toString() === output.toString());

arrayObj = [{ message: 'qwertyuiowertyuisdfghjklbjbj uuxuxuu gugu ijisjnnxknxjnxjxjxnj jbjbsbxhbxsxs' }];
output = ['', 'hi'];
console.log('Testing the message value all of which has more than 50 chars case :', getShortMessages(arrayObj).toString() === [].toString());


arrayObj = [];
console.log('Testing the message value all of which has more than 50 chars case :', getShortMessages(arrayObj).toString() === [].toString());
