/*
contoh kamus :
APPLE
SIT
TRIP
TURNE
SUPER

shake(4)
[[ 'D', 'G', 'H', 'I'],
['K', 'L', 'P', 'S'],
'Y', 'E', 'U', 'T'],
['E', 'O', 'R', 'N']]

solve()
2 words found :
TURN
SUPER

Going deeper (optional)
berada di satu garis lurus, terkoneksi secara diagonal / vertikal / horizontal dst.

*/



// var BoggleSolver = (words) => {
//
//   'use strict';
//
//   // get legal cells adjacent to current cell in all 8 directions
//   var getNeighbors = (i, j) => [[i-1, j], [i+1, j], [i, j-1], [i, j+1], [i-1, j-1], [i-1, j+1], [i+1, j-1], [i+1, j+1]].filter(v =>
//   	v[0] >= 0 &&
//   	v[1] >= 0 &&
//   	v[0] <= (board.length - 1) &&
//   	v[1] <= (board.length - 1));
//
//   // perform a depth first search to find the rest of a word from a position on the board
//   var findWord = (i, j, word, offset, visited) => {
//
//     // if we have searched every character of word then it must exist on board
//     if (offset === word.length) { return { found: true }; }
//
//     // maintain a visited hash table so cells are not visited more than once
//     visited[`(${i},${j})`] = true;
//
//     // get array of neighbors on board for current position
//     let n = getNeighbors(i, j);
//     let x, y;
//
//     for (let cell of n) {
//       [x, y] = cell;
//       if (!visited[`(${x},${y})`] && board[x][y] === word[offset]) {
//         return findWord(x, y, word, offset + 1, visited);
//       }
//     }
//
//     // return longest prefix that could not be found on the board
//     // e.g. if searching for "house" it only finds "hou" then it returns "hous"
//     // signifying that the prefix "hous" does not exist anywhere on the board
//     return {
//       found: false,
//       prefix: word.substr(0, offset + 1)
//     };
//
//   };
//
//   // main function
//   var find = () => {
//
//     let skipPrefix;
//     let wordsFound = {};
//     let wordsArray = [];
//
//     // check each word in dictionary
//     for (let word of dict) {
//
//       // words in Boggle must be at least 3 chars
//       if (word.length < 3) {
//         continue;
//       }
//
//       // stop searching if a prefix of current word was not found before
//       if (skipPrefix && word.indexOf(skipPrefix) !== -1) {
//         continue;
//       }
//
//       // prefix defaults to first character of word unless this character is found
//       let search = { found: false, prefix: word[0] };
//       let skipChars = '';
//
//       // search boggle board looking for start of each word
//       loopRow:
//       for (let i = 0; i < board.length; i++) {
//
//         loopCol:
//         for (let j = 0; j < board[i].length; j++) {
//
//           // if first letter is found on boggle board
//           if (board[i][j] === word[0]) {
//
//             // attempt to find whole word
//             search = findWord(i, j, word, 1, {});
//
//             // word was found, yay!
//             if (search.found) {
//               wordsFound[word] = true;
//               wordsArray.push(word);
//               skipChars = '';
//               break loopRow;
//             }
//
//           }
//
//           // update longest prefix of word that was not found on board
//           skipChars = (search.prefix && skipChars.length > search.prefix.length) ? skipChars : search.prefix;
//
//         }
//
//       }
//
//       // store final largest prefix of previous word that is not on board
//       skipPrefix = (!skipChars) ? undefined : skipChars;
//
//     }
//
//     return wordsArray;
//
//   };
//
//   return {
//     find: find
//   }
//
// };
//

// test 1

require('console.table');
import { words } from './data.js';
// var clc = require('cli-color');
var boggle_now = []
// Get the capital letter starting from 0 - 25
function alphabetGenerator(index) {
  var alphaBank = []; // storing character from A - Z capital
  for (var i = 65; i <= 90; i += 1) {
    alphaBank.push(String.fromCharCode(i));
  }
  return alphaBank[index];
}

// Generate random number from 1 to 25
function randomChar() {
  return Math.floor(Math.random()*25);
}

// Get a new character
function shake() {
  return alphabetGenerator(randomChar());
}

function one_array(dimension) {
  var board = [];
  for (var i = 0; i < dimension; i += 1) {
    board.push(shake())
  }
  return board;
}


function cekString(str2) {
  var arrayStr1 = boggle_now.join("").split("").sort();
  var arrayStr2 = str2.split("").sort();
  var status = true;

  for (var i = 0; i < arrayStr2.length; i++) {
    var none = -1;
    var index2at1 = arrayStr1.indexOf(arrayStr2[i]);
    if(index2at1 !== none) {
      arrayStr1.splice(index2at1, 1);
    }
    else {
      var status = false;
    }
  }

  return status;
}


// Auxilary function for printing bogle
function set_boogle(dimension) {
  var result = [];
  for (var i = 0; i < dimension; i++) {
    result.push(one_array(dimension));
  }
  boggle_now = result;
  return result;
}

function generateIndex(dim) {
  var index = []
  for (var i = 1; i <= dim; i++) {
    i = i.toString();
    index.push(i);
  }
  return index;
}

// Printing current boogle and returning the value
//--> for another function
function print_boogle(dim) {
  var boogle_now = set_boogle(dim);
  var title = 'Boggle Dimesion ' + dim + 'x' + dim;
  console.table(title + "\n");
  return console.table(generateIndex(dim), boogle_now);
}

function searchWord(input){
  var flag=0;
  for(var i = 0 ; i < input.length ; i++){
    for(var j = 0 ; j < this.randomString.length ; j++){
      if(input[i] === this.randomString[j]){
        flag++;
        break;
      }else{
        flag += 0;
      }
    }
  }
  if(flag === input.length){
    return true;
  }else{
    return false;
  }
}

function inputCek(input){
  if(cekString(input) === true){
    console.log("Kata ditemukan di papan");
    for(var i = 0 ; i < words.length ; i++){
      if(input == words[i]){
        return "Kata " + input + " ditemukan di kamus";
      }else{
        return "Kata " + input + " tidak ditemukan di kamus";
      }
    }
  }else{
    return "kata " + input + " tidak ditemukan di papan";
  }
}
// Testing
print_boogle(4);
console.log(inputCek("ABA"));
console.log(inputCek("BAMBANG"));
console.log(inputCek("DIKY"));
console.log(inputCek("HANDOKO"));
