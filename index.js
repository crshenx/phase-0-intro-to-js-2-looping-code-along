// Code your solutions in this file
function writeCards(array) {
  let newArray = [];
  array.forEach((name) =>
    newArray.push(`Thank you, ${name}, for the wonderful surprise gift!`)
  );
  return newArray;
}

function countDown(num) {
  for (let i = num; 0 <= num; num--) {
    console.log(num);
  }
}
