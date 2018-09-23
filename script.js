let howManyLetters;
let howManyNumbers;
let letter;
let number;
//let myPassword = [];
let myPassword = [];

// letters and numbers for the password
let lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                       'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                       'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const generatePassword = () => {
  // mix is to see if the user wants a mix of lower and uppercased letters
  let mix = document.getElementById('select').value;
  howManyLetters = document.getElementById('letters').value;
  howManyNumbers = document.getElementById('numbers').value;

  if (howManyLetters === '' && howManyNumbers === '') {
    alert('You need to enter valid numbers :)');
    return;
  } else if (howManyLetters === '0' || howManyNumbers === '0') {
    alert('You need to enter valid numbers :)');
    return;
  }

  // generate both uppercase and lowercase letters
    if (mix === 'yes') {
      // for loop that generates lowercased letters
      for (let i = 0; i < howManyLetters / 2; i++) {
        letter = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
        myPassword.push(letter);
        // for loop that generates uppercased letters
        for (let i = 0; i < 1; i++) {
          letter = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
          myPassword.push(letter);
        }
      }
      // if howManyLetters is an odd number, remove the last letter from the password
      if (howManyLetters%2 !== 0) {
        myPassword.pop();
      }
    // if user only wants lowercased letters
    } else if (mix === 'no') {
      for (let i = 0; i < howManyLetters; i++) {
        letter = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
        myPassword.push(letter);
      }
    }

    myPassword.toString();
    document.getElementById('myPassword').innerHTML = myPassword.join('');

    // generate numbers for the password
    for (let i = 0; i < howManyNumbers; i++) {
      number = numbers[Math.floor(Math.random() * numbers.length)];
      myPassword.push(number);
      document.getElementById('myPassword').innerHTML = 'Your password: ' + myPassword.join('');
    }
    myPassword = [];
  }
