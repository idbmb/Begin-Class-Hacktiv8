function to_roman(num) {
  if(typeof num !== 'number')
    return false;

  var digits = String(+num).split(""),
    key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
           "","X","XX","XXX","XL","L","LX","LXXX","XC",
           "","I","II","III","IV","V","VI","VII","VIII","IX"],
    roman_num = "",
    i = 3;
    while(i--)
      roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
      return Array(+digits.join("") + 1).join("M") + roman_num;
}

console.log("My totally sweet testing script for new roman\n");
console.log("input | expected | actual");
console.log("------|----------|-------");
console.log("4     | IV       | ", to_roman(4));
console.log("9     | IX       | ", to_roman(9));
console.log("13    | XIII     | ", to_roman(13));
console.log("1453  | MCDLIII  | ", to_roman(1453));
console.log("1646  | MDCXLVI  | ", to_roman(1646));
