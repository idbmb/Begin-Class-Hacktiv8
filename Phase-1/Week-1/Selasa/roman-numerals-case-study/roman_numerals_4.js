function to_roman(num) {
  var result='';
  var desimal=[1000,900,500,100,50,40,10,9,5,4,1];
  var roman=['M','MC','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  for (var i = 0; i < desimal.length; i++) {
    while (num%desimal[i] < num) {
      result += roman[i];
      num -= desimal[i];

    }
  }
  return result;
}

console.log("my totally sweet testing script \n");
console.log("input | ekspeted | output");
console.log("------|----------|-------");
console.log("4     | IV       |", to_roman(4));
console.log("9     | IX       |", to_roman(9));
console.log("13    | XIII     |", to_roman(13));
console.log("1453  | MCDLII   |", to_roman(1453));
console.log("1646  | MDCXLVI  |", to_roman(1646));
