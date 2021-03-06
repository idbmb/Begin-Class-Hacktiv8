'use strict'

// -----------------------------------------------------------------------------

// Release 0

let prime_factors = (angka, hasil = []) => {
  // write your code here
  var i = 2;
  while (i <= angka) {
    if (angka % i === 0) {
      angka /= i
      hasil.push(i)
    } else {
      i++
    }
  }
  return hasil
}

console.log(prime_factors(3))  // [3]
console.log(prime_factors(6))  // [2,3]
console.log(prime_factors(8))  // [2,2,2]
console.log(prime_factors(25)) // [5,5]
console.log(prime_factors(123123123)) // [3, 3, 41, 333667]

// -----------------------------------------------------------------------------

// Release 1

let simple_recursive = (number) => {
  // write your code here
  if (number.toString().length === 1) {
    return number
  } else {
    var temp = 1;
      for (var i = 0; i < number.toString().length; i++) {
        // console.log(number.toString()[i]);
        temp *= number.toString()[i]
      }
      number = temp
      return simple_recursive(number)
  }

}

console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3
