// Get the button and the paragraph element
const button = document.getElementById('updateButton');
const paragraph = document.getElementById('message');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Update the text content of the paragraph when the button is clicked
    paragraph.textContent = 'This is the updated message!';
});
