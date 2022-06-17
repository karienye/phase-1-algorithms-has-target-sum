function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i<array.length; i++){
    const complemantary = target-array[i];
for (let j = i+1; j< array.length; j++){
  if (array[j] === complemantary ){
    return true;
    }
   }
  }
  return false
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  get a list of numbers that are less than the target in the array
  then get a complmentary number that when added it gives the target number
  use a loop to get the numbers an dthen use another loop to get the complemantary number,
  for every number that its complemetary adds up to the target return the pair
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 8], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 16));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
