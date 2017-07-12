'use strict'

var hobbies = prompt('Is my favorite hobby hiking?');
if (hobbies.toUpperCase() === 'YES' || hobbies.toUpperCase() === 'Y'){
  alert ('You got it!');
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
    alert ('Nah, I do not like mushrooms!');
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
});
