// for (var a = 2; a < 9; a++) {
//      var line = '';
//      for (var b = 2; b <= 9; b++) {
//           line = line + a * b + ', ';
//      }
//      console.log(line);
// }

var main = { one: 42 };
var bain = { one: 32 };
bain = main;
var main = { one: 22 };
console.log(bain)