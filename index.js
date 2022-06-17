function hasTargetSum(array, target) {
  // 1 step
  const seenNumbers = {};
  for (const number of array) {
    // n steps
    const complement = target - number;
    // n steps
    if (seenNumbers[complement]) return true;
    // n steps
    seenNumbers[number] = true;
  }
  // 1 step
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/
//0(n)
//space complexity
//0(n)
/* 
  Add your pseudocode here
*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 8, 23, 4, 14, 7], 11));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 11, 12, 6, 30], 42));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4, 8, 5], 11));
}

module.exports = hasTargetSum;
