'use strict'

var hobbies = prompt('Is my favorite hobby hiking?');

if (hobbies.toUpperCase() === 'YES' || hobbies.toUpperCase() === 'Y'){
  alert('You got it!');
}
 else if (hobbies.toUpperCase() === 'NO' || hobbies.toUpperCase() === 'N'){
 alert('Nope.');
}
console.log ('Answer to my favorite hobby is YES. I enjoy hiking.');

var favoriteFood = prompt('Do you think my favorite food is Chicken Marsala?');

if (favoriteFood.toLowerCase() === 'no' || favoriteFood.toLowerCase() === 'n') {
  alert('You know me well!');
}
  else if (favoriteFood.toLowerCase() === 'yes' || favoriteFood.toLowerCase() === 'y'){
    alert('Nah, I do not like mushrooms!');
}
console.log('I am not a fan of Chicken Marsala.  My favorite is sushi.');

var childhood = prompt('When I fell of my bike, did I break my elbow?');

if (childhood.toLowerCase() === 'yes' || childhood.toLowerCase() === 'y'){
  alert('It was so painful!');
}
  else if (childhood.toLowerCase() === 'no' || childhood.toLowerCase() === 'n') {
    alert('I was not always the best on a bike.');
}
console.log('I broke my elbow when I was learning how to ride a bike');

var coding = prompt('Have I been coding for a year?');

if (coding.toUpperCase() === 'NO' || coding.toUpperCase() === 'N') {
  alert('That is correct! I have only been coding for 6 months.');
}
  else if (coding.toUpperCase() === 'YES' || coding.toUpperCase() === 'Y') {
    alert('Definitely not.')
  }
  console.log('Information about how long I have been coding.');

  var education = prompt('Did I study primatology in college?');

  if (education.toUpperCase() === 'YES' || education.toUpperCase() === 'Y'){
    alert('I love primates!');
  }
    else if (education.toUpperCase() === 'NO' || education.toUpperCase() === 'N') {
      alert('I did! I love primates.')
    }
    console.log('Information regarding a fun topic of study.');

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
      break
    }
    if (numGuesses === 4) {
      alert('You\'ve run out of guesses!')
    }
  }

  var numTries = 0;
  var pets = ['dog', 'goldfish', 'hamster'];
  var arrayLength = 3;

  while(numTries < 6) {
    var userResponse = prompt('Which pets have I had in my life?');

    if (userResponse == pets) {
      alert('Yes, there was a dog, goldfish and hamster.');
      break
    }


  }
