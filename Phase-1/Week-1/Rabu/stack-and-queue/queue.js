'use strict'

class Queue {
  constructor () {
    this.value = []
    this._MAX_SIZE = 4
  }

  queueInsert(x) {
    if (this.isFull()) {
      return "Full"
    } else {
      console.log(this.value)
      return this.value.push(x)
    }
  }

  queueRemove() {
    if (this.isEmpty()) {
      return "Empty"
    } else {
      console.log(this.value)
      return this.value.shift()
    }
  }

  queueFirst()  {
    return "First Queue : " + this.value[0]
  }

  isFull() {
    if (this.value.length === this._MAX_SIZE) {
      return true
    } else {
      return false
    }
  }

  isEmpty() {
    if (this.value == "") {
      return true
    } else {
      return false
    }
  }
}

let myQueue = new Queue();

console.log(`The stack is empty? ${myQueue.isEmpty()}`)
myQueue.queueInsert("JavaScript")
myQueue.queueInsert("is just so")
myQueue.queueInsert("cool")
myQueue.queueInsert(15)

console.log(myQueue.queueFirst())

console.log(myQueue.queueRemove())
console.log(myQueue.queueRemove())
console.log(myQueue.queueRemove())
console.log(myQueue.queueRemove())

console.log(`The stack is empty? ${myQueue.isEmpty()}`)
console.log(myQueue.queueRemove())
