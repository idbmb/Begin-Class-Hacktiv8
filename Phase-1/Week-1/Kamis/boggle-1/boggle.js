class BoggleBoard {
  constructor() {
    this.board = []
  }
  shake(x){
    for (let i=0; i<x; i++) {
      let arr = []
      // console.log(i);
      for (let j=0; j<x; j++) {
        arr.push(String.fromCharCode(Math.floor(Math.random() * (90-65+1) + 65)))
      }
      this.board.push(arr)
    }
    return this.board
  }
}
let boggle = new BoggleBoard();
console.log(boggle.shake(5));
