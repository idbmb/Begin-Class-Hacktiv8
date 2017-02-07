var words = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];

function in_words(angka, result="") {

  if (angka.toString().length === 1) {
    result += words[angka];
  }

  if (angka.toString().length === 2) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "sepuluh "
    } else {
      result += words[firstChar];
      result += " puluh ";
    }

    angka = angka - (firstChar*10);
    return in_words(angka, result);
  }

  if (angka.toString().length === 3) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "seratus "
    } else {
      result += words[firstChar];
      result += " ratus ";
    }

    angka = angka - (firstChar*100);
    return in_words(angka, result);
  }

  if (angka.toString().length === 4) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "seribu "
    } else {
      result += words[firstChar];
      result += " ribu ";
    }

    angka = angka - (firstChar*1000);
    return in_words(angka, result);
  }

  if (angka.toString().length === 5) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "sepuluh ribu "
    } else {
      result += words[firstChar];
      result += " puluh ";
    }

    angka = angka - (firstChar*10000);
    return in_words(angka, result);
  }

  if (angka.toString().length === 6) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "seratus "
    } else {
      result += words[firstChar];
      result += " ratus ";
    }

    angka = angka - (firstChar*100000);
    return in_words(angka, result);
  }

  if (angka.toString().length === 7) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "sejuta "
    } else {
      result += words[firstChar];
      result += " juta ";
    }

    angka = angka - (firstChar*1000000);
    return in_words(angka, result);
  }

  if (angka.toString().length === 8) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "sepuluh juta"
    } else {
      result += words[firstChar];
      result += " puluh ";
    }

    angka = angka - (firstChar*10000000);
    return in_words(angka, result);
  }

  if (angka.toString().length === 9) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "seratus juta "
    } else {
      result += words[firstChar];
      result += " ratus ";
    }

    angka = angka - (firstChar*100000000);
    return in_words(angka, result);
  }

  if (angka.toString().length === 10) {
    let firstChar = angka.toString()[0];

      result += words[firstChar];
      result += " miliar ";

    angka = angka - (firstChar*1000000000);
    return in_words(angka, result);
  }

  if (angka.toString().length === 11) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "sepuluh "
    } else {
      result += words[firstChar];
      result += " puluh ";
    }

    angka = angka - (firstChar*10000000000);
    return in_words(angka, result);
  }

  if (angka.toString().length === 12) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "seratus "
    } else {
      result += words[firstChar];
      result += " ratus ";
    }

    angka = angka - (firstChar*100000000000);
    return in_words(angka, result);
  }

  if (angka.toString().length === 13) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "satu triliun "
    } else {
      result += words[firstChar];
      result += " triliun ";
    }

    angka = angka - (firstChar*1000000000000);
    return in_words(angka, result);
  }

  if (angka.toString().length === 14) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "sepuluh "
    } else {
      result += words[firstChar];
      result += " puluh ";
    }

    angka = angka - (firstChar*10000000000000);
    return in_words(angka, result);
  }

    if (angka.toString().length === 15) {
      let firstChar = angka.toString()[0];

      if (firstChar === "1") {
        result += "seratus "
      } else {
        result += words[firstChar];
        result += " ratus ";
      }

    angka = angka - (firstChar*100000000000000);
    return in_words(angka, result);
  }

  return result;
}

// Driver code
console.log(in_words(4));
console.log(in_words(27));
console.log(in_words(102));
console.log(in_words(38079));
console.log(in_words(82102713));
console.log(in_words(999000000000000));  // 999.000.000.000.000
console.log(in_words(999123456789123));


// var satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima',
//               'enam', 'tujuh', 'delapan', 'sembilan']
//
// function in_words(angka, result=''){
//
//   if (angka.toString().length == 13 || angka.toString().length == 14 || angka.toString().length == 15 ) {
//     // 1.000.000.000.000
//
//     if (Math.floor(angka / 1000000000000).toString().length > 1 ) {
//       // console.log(angka - (Math.floor(angka / 1000000000) * 1000000000 ));
//       return in_words(Math.floor(angka / 1000000000000), result) + ' triliun '
//               + in_words((angka - (Math.floor(angka / 1000000000) * 1000000000 )), result)
//     }
//     let firstChar = angka.toString()[0]
//     result += satuan[firstChar]
//     result +=  ' triliun '
//     angka = angka - (firstChar * 1000000000000)
//
//     // console.log(result);
//     return in_words(angka, result)
//   }
//
//   if (angka.toString().length == 10 || angka.toString().length == 11 || angka.toString().length == 12 ) {
//
//     if (Math.floor(angka / 1000000000).toString().length > 1 ) {
//       // console.log('log woy!' + (angka - (Math.floor(angka / 1000000000) * 1000000000)));
//       return in_words(Math.floor(angka / 1000000000), result) + ' miliar '
//               + in_words((angka - (Math.floor(angka / 1000000000) * 1000000000)), result)
//     }
//     let firstChar = angka.toString()[0]
//     result += satuan[firstChar]
//     result +=  ' miliar '
//     angka = angka - (firstChar * 1000000000)
//
//     // console.log(result);
//     return in_words(angka, result)
//
//   }
//
//   if (angka.toString().length == 7 || angka.toString().length == 8 || angka.toString().length == 9 ) {
//     if (Math.floor(angka / 1000000).toString().length > 1 ) {
//       return in_words(Math.floor(angka / 1000000), result) + ' juta '
//             + in_words((angka - (Math.floor(angka / 1000000) * 1000000)), result)
//     }
//     let firstChar = angka.toString()[0]
//     result += satuan[firstChar]
//     result +=  ' juta '
//     angka = angka - (firstChar * 1000000)
//     // console.log(result);
//     return in_words(angka, result)
//
//   }
//   if (angka.toString().length == 4 || angka.toString().length == 5 || angka.toString().length == 6 ) {
//     if (Math.floor(angka / 1000).toString().length > 1 ) {
//       return in_words(Math.floor(angka / 1000), result) + ' ribu '
//             + in_words((angka - (Math.floor(angka / 1000) * 1000)), result)
//     }
//     let firstChar = angka.toString()[0]
//     result += satuan[firstChar]
//     result +=  ' ribu '
//     angka = angka - (firstChar * 1000)
//     // console.log(result);
//     return in_words(angka, result)
//
//   } else if (angka.toString().length == 3) {
//     let firstChar = angka.toString()[0]
//     result += satuan[firstChar]
//     result +=  ' ratus '
//     angka = angka - (firstChar * 100)
//     return in_words(angka, result)
//
//   } else if (angka.toString().length == 2) {
//     if (angka < 20) {
//       let firstChar = angka.toString()[0]
//       result += satuan[firstChar]
//       result +=  ' belas '
//       angka = angka - (firstChar * 10)
//       return in_words(angka, result)
//     } else {
//       let firstChar = angka.toString()[0]
//       result += satuan[firstChar]
//       result +=  ' puluh '
//       angka = angka - (firstChar * 10)
//       return in_words(angka, result)
//     }
//   } else {
//     result += satuan[angka]
//   }
//   return result
// }
//
// // Driver code
// console.log(in_words(4));
// console.log(in_words(15));
// console.log(in_words(102));
// console.log(in_words(12333333));
// console.log(in_words(999922233333300)); // 1.233.333.300 - 233.333.300 23.222.233.333.300
// // console.log(in_words(999000000000000));
