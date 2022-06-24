function hasTargetSum(array, target) {
  // Write your algorithm here
 // iterate through each number in the array
 for(let i = 0; i < array.length; i++){
  const condition = target - array[i]
  
  // loop through the rest of the array
  for(let k = i + 1; k < array.length; k++){

    //checks if any number meets condition
    //if yes, return true
      if(array[k] === condition)
      return true
  }
}

// else return false
      return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
 A function hasTargetSum takes in arrays of numbers and a target
  iterate through each number in the array 
  return true if any pair of numbers in the array adds up to the target number 

  else return false  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
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
