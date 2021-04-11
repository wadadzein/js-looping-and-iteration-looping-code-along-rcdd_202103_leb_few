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

let countDown =4; 
function countDown(number){
  while (number>0, number --);
}
console.log(countDown(4));
