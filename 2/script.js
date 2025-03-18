// Get the button and div elements
const button = document.getElementById('myButton');
const div = document.getElementById('myDiv');

// Define a function to change the text inside the div
function changeText() {
  div.innerHTML = "The text has been changed!";
}

// Add an event listener to the button to call changeText when clicked
button.addEventListener('click', changeText);
