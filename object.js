var cylinder = {
     radius: 3,
     height: 4,
     square: function () {
          return this.height * this.radius;
     },
     capacity: function () {
          var result = this.radius ** 2 * this.height * 3.1415;
          return result.toFixed(3);

     }
};


function getResult(firstN, secondN, flag) {
     if (flag === '+') {
          return firstN + secondN;
     } else if (flag === '-') {
          return firstN - secondN;
     } else if (flag === '*') {
          return firstN * secondN;
     } else if (flag === '/') {
          return firstN / secondN;
     } else {
          return 'wrong'
     }
}




function isCharPresent(string, symbol) {

     for (var i = 0; i < string.length; i++) {
          if (string[i] === symbol) {
               return true
          } 
     }
     return false
}

function charIndexOf(string, symbol) {

     for (var i = 0; i < string.length; i++) {
          if (string[i] === symbol) {
               return i
          } 
     }
     return -1
}





