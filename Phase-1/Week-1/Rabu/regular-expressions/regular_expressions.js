'use strict'

// Determine whether a string contains a nomor KTP
const has_ktp = (string) => {
  let pattern = /\d{3}-\d{2}-\d{4}/g
  return pattern.test(string)
}

console.log('has_ktp if it has what looks like a nomor KTP')
console.log(has_ktp("please don't share this: 234-60-1422") === true) // true

console.log("has_ktp if it doesn't have a nomor KTP")
console.log(has_ktp('please confirm your identity: XXX-XX-1422') === false) // true

// -----------------------------------------------------------------------------

// Return the Social Security number from a string.
const grab_ktp = (string) => {
  let pattern = /\d{3}-\d{2}-\d{4}/g
  let match = string.match(pattern)

  if (match) {
    return match[0]
  } else {
    return null
  }
}

console.log('grab_ktp returns nomor KTP if the string has an nomor KTP')
console.log(grab_ktp("please don't share this: 234-60-1422") === '234-60-1422') // true

console.log("grab_ktp if it doesn't have a nomor KTP")
console.log(grab_ktp('please confirm your identity: XXX-XX-1422') === null) // true

// -----------------------------------------------------------------------------

// Return all of the Social Security numbers from a string.
const grab_all_nomor_ktp = (string) => {
  let pattern = /\d{3}-\d{2}-\d{4}/g
  let match = string.match(pattern)

  if (match) {
    return match
  } else {
    return []
  }
}

console.log('grab_all_nomor_ktp returns all nomor KTP if the string has any nomor KTP')
console.log(grab_all_nomor_ktp('234-60-1422, 350-80-0744, 013-60-8762')) // true

// return ["234-60-1422", "350-80-0744", "013-60-8762"])

console.log("grab_all_nomor_ktp returns an empty Array if it doesn't have any nomor KTP")
console.log(grab_all_nomor_ktp('please confirm your identity: XXX-XX-1422')) // true
  // return []

// -----------------------------------------------------------------------------

// Obfuscate all of the nomor KTP in a string. Example: XXX-XX-4430.
const hide_all_nomor_ktp = (string) => {
  let pattern = /\d{3}-\d{2}-/g
  let match = string.replace(pattern, 'XXX-XX-')

  return match
}

console.log('hide_all_nomor_ktp obfuscates any nomor KTP in the string')
console.log(hide_all_nomor_ktp('234-60-1422, 350-80-0744, 013-60-8762')) // true

// "XXX-XX-1422, XXX-XX-0744, XXX-XX-8762"

console.log('hide_all_nomor_ktp does not alter a string without nomor KTP in it')

let string1 = 'please confirm your identity: XXX-XX-1422'
console.log(hide_all_nomor_ktp(string1) === string1) // true

// -----------------------------------------------------------------------------

// Ensure all of the Social Security numbers use dashes for delimiters.
// Example: 480.01.4430 and 480014430 would both be 480-01-4430.
const format_nomor = (string) => {
  let pattern = /(\d{3})\W*(\d{2})\W*(\d{4})/g
  let match = string.replace(pattern, `$1-$2-$3` )

  return match
}

console.log('format_nomor finds and reformat any nomor KTP in the string')
console.log(format_nomor('234601422, 350.80.0744, 013-60-8762') === '234-60-1422, 350-80-0744, 013-60-8762') // true

console.log('format_nomor does not alter a string without nomor KTP in it')

let string = 'please confirm your identity: 44211422'
console.log(format_nomor(string) === string) // true*/
