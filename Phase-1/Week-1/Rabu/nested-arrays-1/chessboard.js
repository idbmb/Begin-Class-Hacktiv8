'use strict'

const makeChessboard = () => {
  let chessboard = []

  // ... write your code here

  let piece = ["Rook", "Knight", "Bishop", "Queen", "King", "Bishop", "Knight", "Rook"]
  let pawn = ['pawn']

  for (let i=0; i<piece.length; i++) {
    let newArr = []
    for (let j=0; j<piece.length; j++) {
      if ( i === 0 || i === 7) {
        if (i === 0) {
          newArr.push(piece[j] + " Black")
        } else {
          newArr.push(piece[j] + " White")
        }
      } else if (i === 1 || i === 6) {
        if (i === 1) {
          newArr.push(pawn + " Black")
        } else {
          newArr.push(pawn + " White")
        }
      }
    }
    chessboard.push(newArr)
  }
  return chessboard
}


const printBoard = x => {
  // ... write your code here
  
  console.log(x[7][0]) == "Rook White"  // true
  console.log(x[7][0]) // Rook White (Benteng Putih)

}

printBoard(makeChessboard())
