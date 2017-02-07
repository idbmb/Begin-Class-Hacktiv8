'use strict'

class House {

  constructor (argument) {
  // (address, square_feet, num_bedrooms, num_baths, cost, down_payment, sold, short_sale, has_tenants)
    this.address = argument['address']
    this.square_feet = argument['square_feet']
    this.num_bedrooms = argument['num_bedrooms'] || 3
    this.num_baths = argument['num_baths'] || 2
    this.cost = argument['cost'] || 320000
    this.down_payment = argument['down_payment'] || 0.20
    this.sold = argument['sold'] || false
    this.short_sale = argument['short_sale']
    this.has_tenants = argument['has_tenants'] || false
  }

  obscure_address () {
    // this.address.replace(/.{10}$/g, '****')
    return this.address.replace(/.{10}$/g, '****')

  }

  buy (money, good_credit) {
    if (money >= down_payment && good_credit) {
      this.sold = true
    }
  }

  down_payment () {
    return cost * this.down_payment
  }

  to_s () {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. $ ${this.cost}`
    // return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

// const cool = new House('address', 100, 2, 2, 12345, 12345, true, true)
//
// console.log(cool.to_s())

// beta test

let argumentHome = {
  address : "Jalan Dasa Raya No.7 Jakarta Selatan",
  square_feet : 20,
  num_bedrooms : 3,
  num_baths : 2,
  cost : 320000,
  down_payment : 0.20,
  sold : false,
  short_sale : true,
  has_tenants : false
}

let home = new House(argumentHome)
const cool = new House('address', 100, 2, 2, 12345, 12345, true, true)
console.log(home.to_s())
