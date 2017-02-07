"use strict";

export class Calculator {
  //write your code here
  constructor(num1){
    this._num1 = num1;
  }

  set num1(value){
    this._num1 = value;
  }

  get num1(){
    return this._num1;
  }

  perkalian(num2){
     this._num1 * num2;
     return this
  }

  pengurangan(num2){
    this._num1 - num2;
    return this
  }

  penjumlahan(num2){
    this._num1 + num2;
    return this
  }

  pembagian(num2){
    this._num1 / num2;
    return this
  }

  pangkat(num2){
    this._num1 = Math.pow(this._num1,num2);
    return this
  }

  akar(){
    this._num1 = Math.sqrt(this._num1)
    return this
  }

  pi(){
    this._num1 = Math.pow(this._num1,2)* Math.PI
    return this
  }

  result(){
    console.log(this._num1)
  }

}


/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
