//1
function areBothSame(arg1,arg2) {
  return arg1 == arg2 ? true : false;
}

//2
function areBothEqual(arg1,arg2) {
  return arg1 === arg2 ? true : false;
}

//3
function areAllFourEqual(arg1,arg2,arg3,arg4) {
  return arg1 === arg2 && arg1 === arg3 && arg1 === arg4 ? true : false;
}


//4
function areAllFourSame(arg1,arg2,arg3,arg4) {
  return arg1 == arg2 && arg1 == arg3 && arg1 == arg4 ? true : false;
}

//5
function areAllFourSameOrEqual(arg1,arg2,arg3,arg4) {
  return arg1 === arg2 && arg1 === arg3 && arg1 === arg4 ? "equal" : arg1 == arg2 && arg1 == arg3 && arg1 == arg4 ? "same" : null;
}

console.log(areBothSame(true, 1)); // returns true
console.log(areBothSame("2", 2)); // returns true
console.log(areBothSame("5", 2)); // returns false
console.log(areBothEqual("2", "2"));  // returns true
console.log(areBothEqual("2", 2));  // returns false 
console.log(areAllFourEqual("2", "2", "2", "2")); // returns true
console.log(areAllFourEqual("2", "2", "2", 2)); // returns false 
console.log(areAllFourSame("2", "2", "2", "2")); // returns true
console.log(areAllFourSame("2", "2", "2", 2)); // returns true 
console.log(areAllFourSame(true, true, 1, "1")); // returns true 
console.log(areAllFourSameOrEqual("2", "2", "2", "2")); // returns "equal"
console.log(areAllFourSameOrEqual(true, true, 1, "1")); // returns "same"
console.log(areAllFourSameOrEqual(true, false, 1, "1")); // returns null