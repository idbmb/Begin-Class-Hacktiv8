let spreadsheet = [
  ['Number', 'Name', 'Position', 'Points per Game']
]

// ... write your code here

function addData(array) {
  return spreadsheet.push(array)
}

addData(["12", "Joe Schmo", "Center", [14, 32, 7, 0, 23]])
addData(["9", "Ken Buckets", "Point Guard", [19, 0, 11, 22, 0]])
addData(["31", "Harvey kay", "Shooting Guard", [0, 30, 16, 0, 25]])
addData(["18", "Sally Talls", "Power Forward", [18, 29, 26, 31, 19]])
addData(["22", "Mo DiBoux", "Small Forward", [11, 0, 23, 17, 0]])


let data = ["1", "John Doe", "Director", [10, 10, 10, 10]]
addData(data)
console.log(spreadsheet)

console.log(spreadsheet[3][2] == "Shooting Guard") // true
console.log(JSON.stringify(spreadsheet[1][3]) == JSON.stringify([14, 32, 7, 0, 23])) // true
