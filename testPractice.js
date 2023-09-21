function capitalize(text) {
  const textCapital = text.charAt(0).toUpperCase() + text.slice(1);
  return textCapital;
}

function reverseString(string) {
  let word = "";

  for (let i = string.length - 1; i >= 0; i--) {
    word = word + string[i];
  }

  return word;
}

const calculator = {
  add : function(a, b) {
    return a + b;
  },
  subtract : function(a,b) {
    return a - b;
  },
  divide : function(a,b) {
    if (b === 0) {
      throw new Error("You can't divide with 0");
    } else {
      return parseFloat(a / b);
    }    
  },
  multiply : function(a,b) {
    return a * b;
  }
}

const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function caesarCipher(cipher, shift) {

  let word = "";
  let location = 0;

  for (const letter of cipher ){

    if (letter !== " ") {

      let lowerLetter = letter.toLowerCase();

      if (letters.indexOf(lowerLetter) + shift > letters.length - 1) {
        location = letters.indexOf(lowerLetter) + shift - letters.length;
      } else if (letters.indexOf(lowerLetter) + shift < 0) {
        location = letters.indexOf(lowerLetter) + shift + letters.length;
      } else {
        location = letters.indexOf(lowerLetter) + shift;
      }

      if (letter === letter.toUpperCase()) {
        word = word + letters[location].toUpperCase();
      } else {
        word = word + letters[location];
      }
      
    } else {
      word = word + " ";
    }
  }

  return word;

}

console.log(caesarCipher("KilL Aecar",-2));


function analyzeArray(array) {
  let sum = array.reduce((a, b) => a + b, 0);
  let ave = sum / array.length;
  let leng = array.length;
  let minimum = Math.min(...array);
  let maximum = Math.max(...array);

  const analyze = {
    average: ave,
    min: minimum,
    max: maximum,
    length: leng
  }

return analyze;
}


let array = [1,8,3,4,2,6];

console.log(analyzeArray(array));


exports.capitalize = capitalize;
exports.reverseString = reverseString;
exports.calculator = calculator;
exports.caesarCipher = caesarCipher;
exports.analyzeArray = analyzeArray;

