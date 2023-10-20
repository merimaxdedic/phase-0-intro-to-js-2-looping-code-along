function writeCards(names, eventName) {
  
  const messages = [];
  for (const name of names) {
    const message = `Thank you, ${name}, for the wonderful ${eventName} gift!`;
    messages.push(message);
    debugger;
  }
  

  return messages;
}
let names = ['Sarah', 'Bob', 'Charlie'];
let thankYouMessages = writeCards(names);
console.log(thankYouMessages);

function countDown(num) {
    if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) {
      console.log('Please provide a positive integer.');
      return;
    }
  
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
}

