'use strict'

var answersCorrect = 0;

function questionOne() {
var hobbies = prompt('Is my favorite hobby hiking?');

if (hobbies.toUpperCase() === 'YES' || hobbies.toUpperCase() === 'Y'){
  alert('You got it!');
  answersCorrect++;
}
 else {
 alert('Nope.');
}
console.log ('Answer to my favorite hobby is YES. I enjoy hiking.');
};

questionOne();

function questionTwo() {
var favoriteFood = prompt('Do you think my favorite food is Chicken Marsala?');

if (favoriteFood.toLowerCase() === 'no' || favoriteFood.toLowerCase() === 'n') {
  alert('You know me well!');
  answersCorrect++;
}
  else {
    alert('Nah, I do not like mushrooms!');
}
console.log('I am not a fan of Chicken Marsala.  My favorite is sushi.');
};

questionTwo();

function questionThree() {
var childhood = prompt('When I fell of my bike, did I break my elbow?');

if (childhood.toLowerCase() === 'yes' || childhood.toLowerCase() === 'y'){
  alert('It was so painful!');
  answersCorrect++;
}
  else  {
    alert('I was not always the best on a bike.');
}
console.log('I broke my elbow when I was learning how to ride a bike');
};

questionThree();

function questionFour() {
var coding = prompt('Have I been coding for a year?');

if (coding.toUpperCase() === 'NO' || coding.toUpperCase() === 'N') {
  alert('That is correct! I have only been coding for 6 months.');
  answersCorrect++;
}
  else  {
    alert('Definitely not.')
  }
  console.log('Information about how long I have been coding.');
};

questionFour();

function questionFive() {
  var education = prompt('Did I study primatology in college?');

  if (education.toUpperCase() === 'YES' || education.toUpperCase() === 'Y'){
    alert('I love primates!');
    answersCorrect++;
  }
    else {
      alert('I did! I love primates.')
    }
    console.log('Information regarding a fun topic of study.');
};

questionFive();

function questionSix() {
  var numGuesses = 0;
  var correctAnswer = 9;

    while(numGuesses< 4){
      var userAnswer = prompt('What was my soccer jersey number?');

      if (userAnswer < 9) {
        alert('Sorry, try again. Too low!');
        numGuesses++
      }
      else if (userAnswer > 9) {
        alert('Guess again, fellah! Too high!');
        numGuesses++
      }
    else if (userAnswer == 9){
      alert('Hooray! Good for you, mind reader!');
      answersCorrect++;
      break
    }
    if (numGuesses === 4) {
      alert('You\'ve run out of guesses!')
    }
  }
};

questionSix();

function questionSeven() {
  var numTries = 6;
  var pets = ['dog', 'goldfish', 'hamster'];

  while(numTries > 0 ) {
    numTries--;
    var userResponse = prompt('Which pets have I had in my life?');

    for (var i = 0; i < pets.length; i++) {
      if (userResponse === pets[i]) {
        alert('Yes, there was a dog, goldfish and hamster');
        numTries = -1;
        answersCorrect++;
        break;
      };
};
    if (numTries > 0) {
      alert('That\'s a terrible pet! You have ' + numTries + ' number of tries left');

// } else if (numTries > 0) {
// alert('You have ' + numTries + ' left');
    } else if (numTries === 0) {
      alert('You are all out of tries!');
    };
  };

};
questionSeven();

alert('You got ' + answersCorrect + ' answers correct!');
