function to_roman_old (n) {
  // your code here
  var result=[];
  var sisa = n;

  while (sisa > 1000) {
    sisa = sisa - 1000;
    result.push('M');
  }
  while (sisa > 500) {
    sisa = sisa - 500;
    result.push('D');
  }
  while (sisa > 400) {
    sisa = sisa - 400;
    result.push('CD');
  }
  while (sisa > 100) {
    sisa = sisa - 100;
    result.push('C');
  }
  while (sisa > 50) {
    sisa = sisa - 50;
    result.push('L');
  }
  while (sisa > 40) {
    sisa = sisa - 40;
    result.push('XL');
  }
  while (sisa > 10) {
    sisa = sisa - 10;
    result.push('X');
  }
  while (sisa > 5) {
    sisa = sisa - 5;
    result.push('V');
  }
  while (sisa >= 1) {
    sisa = sisa - 1;
    result.push('I');
  }

  return result.join('');

}


function to_roman (n) {
  // your implementation code here
  // your code here
  var result=[];
  var sisa = n;

  while (sisa > 1000) {
    sisa = sisa - 1000;
    result.push('M');
  }
  while (sisa > 500) {
    sisa = sisa - 500;
    result.push('D');
  }
  while (sisa > 400) {
    sisa = sisa - 400;
    result.push('CD');
  }
  while (sisa > 100) {
    sisa = sisa - 100;
    result.push('C');
  }
  while (sisa > 50) {
    sisa = sisa - 50;
    result.push('L');
  }
  while (sisa > 40) {
    sisa = sisa - 40;
    result.push('XL');
  }
  while (sisa > 10) {
    sisa = sisa - 10;
    result.push('X');
  }
  while (sisa >= 9) {
    sisa = sisa - 9;
    result.push('IX');
  }
  while (sisa > 5) {
    sisa = sisa - 5;
    result.push('V');
  }
  while (sisa >= 4) {
    sisa = sisa - 4;
    result.push('IV');
  }
  while (sisa >= 1) {
    sisa = sisa - 1;
    result.push('I');
  }

  return result.join('');
}


// Drive code
console.log('My totally sweet testing script\n')
console.log('input | expected | actual')
console.log('———|—————|———')
console.log('4     | IIII     | ', to_roman_old(4))
console.log('9     | VIIII    | ', to_roman_old(9))
console.log('13    | XIII     | ', to_roman_old(13))
console.log('1453  | MCDLIII  | ', to_roman_old(1453))
console.log('1646  | MDCXLVI  | ', to_roman_old(1646))

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('———|—————|———')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
console.log('2676  | MMDLXXVI  | ', to_roman(2676))
