"use strict"

class Animal {
  constructor(num_legs, is_warm_blooded) {
    this._num_legs = num_legs || 4;
    this._is_warm_blooded = is_warm_blooded || true;
  }
  set num_legs(num_legs) {
    this._num_legs = num_legs;
  }
  set is_warm_blooded(is_warm_blooded) {
    this._is_warm_blooded = is_warm_blooded;
  }

  get num_legs() {
    return this._num_legs;
  }
  get is_warm_blooded() {
    return this._is_warm_blooded;
  }

}

class Mammal extends Animal {
  constructor() {
    super();
  }
}

class Amphibian extends Animal {
  constructor() {
    super();
  }
}

class Primate extends Mammal {
  constructor() {
    super();
  }
}

class Frog extends Amphibian {
  constructor() {
    super();

  }
}

class Bat extends Mammal{
  constructor() {
    super();

  }
}

class Reptile extends Animal{
  constructor() {
    super();

  }
}

class Chimpanzee extends Primate{
  constructor(super_power) {
    super();
    this.super_power = super_power;
  }
  use_power() {
    return "The super Chimpanzee is using " + this.super_power;
  }
}

class Fox extends Mammal{
  constructor() {
    super();

  }
}

class Fish extends Animal{
  constructor() {
    super();

  }
}

class SuperPoweredChimpanzee extends Chimpanzee {
  constructor(super_power) {
    super();
    this.super_power = super_power;
  }
  use_power() {
  return "The super Chimpanzee is using " + this.super_power;
  }
}

var binatang = new Animal();
var mamalia = new Mammal();
var primata = new Primate();
var simpanse = new Chimpanzee("Regeneration");
var amphibi = new Amphibian();

primata.num_legs = 2;

amphibi.is_warm_blooded = false;

console.log("Mamals have " + mamalia.num_legs + " legs, and is a " + mamalia.is_warm_blooded + " warm blooded");
console.log("Primates have " + primata.num_legs + " legs, and is a " + primata.is_warm_blooded + " warm blooded");
console.log("Super Power : " + simpanse.use_power());
console.log("Amphibians have " + amphibi.num_legs);
if (amphibi.is_warm_blooded === true) {
  console.log("Amphibi is a warm blooded animals");
}
else {
  console.log("Amphibi isn't a warm blooded animals");
}
