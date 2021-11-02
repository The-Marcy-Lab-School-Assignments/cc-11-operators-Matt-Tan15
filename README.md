# Code Challenge: Control Flow

## Instructions

1. Clone down this assignment to your `code-challenges' directory in AWS Cloud9.  
2. Code your solution using JavaScript in `index.js`. 
3. **Be sure to run and test your code throughly!**
4. By the end of Code Challenge, **commit and push your changes up to Github**.
5. Using the browser, verify that your solution is in your remote repo on Github.

## Code Problems

1. Write a function named `areBothSame`, that takes in two arguments and returns true if both arguments are equal in value, and returns false if not. 
```
areBothSame(true, 1) // returns true
areBothSame("2", 2) // returns true
areBothSame("5", 2) // returns false
```

2. Write a function named `areBothEqual`, that takes in two arguments and returns true if both arguments are the same in data type and value, and returns false if they are not.
```
areAllFourEqual("2", "2") // returns true
areAllFourEqual("2", 2) // returns false 
areAllFourEqual(true, 1) // returns false 
areAllFourEqual(7, 7) // returns true  
```

3. Write a function named `areAllFourEqual`, that takes in four arguments and returns true if all four arguments are the same in data type and value, and returns false if it is not. 
```
areAllFourEqual("2", "2", "2", "2") // returns true
areAllFourEqual("2", "2", "2", 2) // returns false 
```

4. Write a function named `areAllFourSame`, that takes in four arguments and returns true if all four arguments are the same in value, and returns false if it is not. 
``` 
areAllFourSame("2", "2", "2", "2") // returns true
areAllFourSame("2", "2", "2", 2) // returns true 
areAllFourSame(true, true, 1, "1") // returns true
```
**BONUS**
5. Write a function named `areAllFourSameOrEqual`, that takes in four arguments and returns the string "same" if all four arguments are the same in value, but not data type, and returns the string "equal" if all four arguments are equal in value **and** data type. The function will return null if the arguments are not "same" or "equal".
```
areAllFourSame("2", "2", "2", "2") // returns "equal"
areAllFourSame(true, true, 1, "1") // returns "same"
areAllFourSame(true, false, 1, "1") // returns null
```
