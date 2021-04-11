let names = ['Lisa', 'Kaitlin', 'Jan'];
let events = 'surprise';

function writeCards(names,events){
  let messages=[];
  for (let i=0; i<names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
  }
  return messages;
}
console.log(writeCards(['Lisa','Kaitlin','Jan'],'surprise'));

function countDown() {
  let countdown = 10;
while (countup > 0) {
  console.log(countup--);
}
}
    