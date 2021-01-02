// var name = prompt('твое имя?');

function pad(name, number, symbol, afterOrbefore) {
     if (!number && !symbol) return name;
     numberOfsymbol = number - name.length;
     var results = ''
     for (i = 1; i < numberOfsymbol; i++) {
          results = results + symbol;
     }
     if (afterOrbefore === true) {
          return (name + results);
     } else {
          return (results + name);
     }

}

alert(pad('Ivan', 15, '*', false));
