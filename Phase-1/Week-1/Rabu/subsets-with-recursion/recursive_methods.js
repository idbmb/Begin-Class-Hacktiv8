var result = 1
let choose_team = (n, k) => {
  //write your code here
  let h = n - k
  if (k == 0){
    k = 1
  }
  if (n > h){
    result *= n
    result /= k
    choose_team(n-1, k-1)
  }
  return result
}


console.log(choose_team(6, 2)); //15
var result = 1;
console.log(choose_team(6, 3)); //20
var result = 1;
console.log(choose_team(24, 4)); //10626
