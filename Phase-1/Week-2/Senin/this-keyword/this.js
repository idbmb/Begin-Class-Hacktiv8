"use strict"

// GLOBAL CONTEXT
/*
Pada terminal menggunakan command 'node' terlebih dahulu
untuk melihat versi node js menggunakan command 'node -v'
sedangkan untuk melihat method2 yang tersedia di node js menggunakan sintaks 'this'
*/



// CLASS CONTEXT
class Nose {
  constructor (sum){
    this.sum = sum
  }
}
var nose = new Nose(1)
console.log(nose.sum)

// RELEASE 1
/*
Penggunaan this pada Global Context dilakukan di window untuk mengetahui fungsi node yang terinstall pada versi tersebut.
penggunaannya this akan menjadi variable yang global sehingga dapat dipanggil oleh yang diluar function atau class.
penggunaan this pada object atau class, akan memanggil this yang berada dalam object atau classnya sendiri (tidak menggambil variable globalnya)
this juga dapat berfungsi untuk mengembangkan nilai atau angka sebuah property object. digunakan jika ingin menambahkan diluarnya fungsi awalnya.
*/
