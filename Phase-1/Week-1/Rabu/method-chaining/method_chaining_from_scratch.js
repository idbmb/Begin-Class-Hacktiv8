// // The data store:
// let data = [{
//   firstName: 'SpongeBob',
//   lastName: 'SquarePants',
//   email: 'spongebob@crustycrab.com',
//   id: 101
// }, {
//   firstName: 'Patrick',
//   lastName: 'Star',
//   email: 'patric.star@gmail.com',
//   id: 102
// }, {
//   firstName: 'Squidward',
//   lastName: 'Tentacles',
//   email: 'awesomesquidward@yahoo.com',
//   id: 103
// }]
//
// const titleCaseName = (string) => {
//   // ...
// }
//
// // Our object with the chainable methods using class in ES6
// class Program {
//   titleCaseName (string) {
//     // ...
//   }
// }
//
// // -----------------------------------------------------------------------------
// // Kode di bawah ini merupakan driver code, jangan diubah ya
// const program = new Program()
// program
//   .findUser('spongebob@crustycrab.com')
//   .formatName()
//   .formatData()
//   .displayUser()
//
// // Hasil:
// // Member name: SpongeBob SquarePants
// // ID: 101
// // Email: spongebob@crustycrab.com

// test 2

// // The data store:
//  let data = [{
//      firstName: "SpongeBob",
//      lastName: "SquarePants",
//      email: "spongebob@crustycrab.com",
//      id: 102
//  }, {
//      firstName: "Patrick",
//      lastName: "Star",
//      email: "patric.star@gmail.com",
//      id: 103
//  }, {
//      firstName: "Squidward",
//      lastName: "Tentacles",
//      email: "awesomesquidward@yahoo.com",
//      id: 104
//  }]
//
//  const titleCaseName(str) {
// // codenya ????
//  }
//
//  // Our object with the chainable methods using class in ES6
//  class UserController {
//
//    titleCaseName(str) {
//
//
//    }
//  }
//
//  // Driver code
//  let userController = new UserController;
//  userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser();
//
//  // result
//  // Member name: Squidward Tentacles
//  // ID: 104
//  // Email: awesomesquidward@yahoo.com

// test 3

// The data store:
let data = [{
  firstName: 'SpongeBob',
  lastName: 'SquarePants',
  email: 'spongebob@crustycrab.com',
  id: 101
}, {
  firstName: 'Patrick',
  lastName: 'Star',
  email: 'patric.star@gmail.com',
  id: 102
}, {
  firstName: 'Squidward',
  lastName: 'Tentacles',
  email: 'awesomesquidward@yahoo.com',
  id: 103
}]

const titleCaseName = (string) => {
  // ...
}

// Our object with the chainable methods using class in ES6
class Program {
  constructor (data) {
    this.data = data
    this.indexData = 0
    this.user = null
  }

  findUser(email) {
    for (let i=0; i<this.data.length; i++) {
      if(this.data[i].email === email) {
        this.user = this.data[i]
      }
    }
    return this
  }

  formatName() {
    let namaLengkap = `${this.user.firstName} ${this.user.lastName}`
    this.user.fullName = namaLengkap
    return this
  }

  formatData() {
    this.user.format = `Member name: ${this.user.fullName}\nID: ${this.user.id}\nEmail: ${this.user.email}`
    return this
  }

  displayUser() {
    console.log(this.user.format)
    return this
  }
}

// -----------------------------------------------------------------------------
// Kode di bawah ini merupakan driver code, jangan diubah ya
var program = new Program(data)
//console.log(program.findUser('spongebob@crustycrab.com'))
//console.log(program.displayUser())
program
  .findUser('spongebob@crustycrab.com')
  .formatName()
  .formatData()
  .displayUser()

// Hasil:
// Member name: SpongeBob SquarePants
// ID: 101
// Email: spongebob@crustycrab.com
