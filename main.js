const order  = words => {
  const wordsArray = words.split(' ');
  const newArray = [];

  for(let counter = 1; counter < 10; counter++) {
    for(let i = 0; i < wordsArray.length; i++) {
      for(let j = 0; j < wordsArray[i].length; j++) {
        if(wordsArray[i].includes(counter)) {
        newArray.splice(counter, 0, wordsArray[i]);
        }
      }
    }
  }
  
  const finalArray = [...new Set(newArray)];
  
  return finalArray.join(' ');
}


console.log(order("is2 Thi1s T4est 3a")); //"Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); //"Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order("3 6 4 2 8 7 5 1 9")); //"1 2 3 4 5 6 7 8 9"