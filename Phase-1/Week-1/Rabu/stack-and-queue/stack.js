'use strict'
//

class Stack {
  constructor() {
    this.value = [];
    this._MAX_SIZE = 4
  }

  stackPush(x) {
    if (this.isFull()) {
      return "Full"
    } else {
      return this.value.push(x)
        }
  }

  stackPop () {
    if (this.isEmpty()) {
      return "Empty"
    } else {
      return this.value.pop()
    }
  }

  stackPeek () {
    // return this.value
    return "First Stack : " + this.value[this.value.length-1]
  }

  isEmpty () {
    if (this.value == "") {
      return true
    } else {
      return false
    }
  }

  isFull() {
    if (this.value.length === this._MAX_SIZE) {
      return true
    } else {
      return false
    }
  }
}

// isEmpty() {
//   if(this._value == "") {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
//
// isFull() {
//   if(this._value >= 3) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

let myStack = new Stack()

// console.log(`The stack is empty? ${myStack.isEmpty()}`) // true

myStack.stackPush("JavaScript")
myStack.stackPush("is just so")
myStack.stackPush("cool")

myStack.stackPush(15)
myStack.stackPop()
console.log(myStack.stackPeek()) // 15
console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.stackPop())

console.log(`The stack is empty? ${myStack.isEmpty()}`) // false

console.log(myStack.stackPop())

// console.log(myStack.[3])
