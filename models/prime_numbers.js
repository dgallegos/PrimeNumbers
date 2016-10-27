/*
 * David Gallegos
 * 10/26/2016
 */

// PrimeNumbers
// A class for testing if a number is prime and generating prime numbers
function PrimeNumbers() {}

// Tests if a number is prime
//
// testNum: Input paramter, the number to test for primeness
// returns: true if the value is prime, otherwise returns false
PrimeNumbers.isPrime = function (testNum) {
  // 0, 1 and negative numbers are not prime, also check for not a number
  if(isNaN(testNum) || (testNum < 2)) {
    return false;
  }
  // 2 is prime, but doesn't work with the algorithm
  else if(testNum == 2) {
    return true;
  }

  // The max number we have to test is the square-root of that number
  var maxPossibleTest = Math.sqrt(testNum);
  // Go through each number between 2 and 
  for(var x = 2; x <= maxPossibleTest; x++) {
    // If we're able to get a modulus that equals zero, it's not prime
    if((testNum % x) == 0) {
      // Return false
      return false;
    }
  }

  // If we made it this far, the number is prime!
  return true;
};

// Generates the proposed number of primes
//
// numberPrimes: Input Parameter, the number of primes the function generates
// returns: An array of prime numbers
PrimeNumbers.generatePrimes = function(numberPrimes) {
  // Initialize an empty prime array
  var primeArray = [];
  
  // Validate parameter input
  if(isNaN(numberPrimes) || (numberPrimes <= 0)) {
    return primeArray;
  }

  // Start the test number at 2
  var testNumber = 2;
  // If the array length is less than the amount asked for, keep going
  while(primeArray.length < numberPrimes) {
    // If we have a valid prime number
    if(this.isPrime(testNumber)) {
      // Add the number to the array
      primeArray.push(testNumber);
    }

    // Increment the test number
    testNumber++;
  };

  // Return the array
  return primeArray;
};

// Export for others
module.exports = PrimeNumbers;
