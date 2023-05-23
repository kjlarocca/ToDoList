console.log('My code is running');

const list = document.getElementById('myList');
// Add a click event listener to the <ul> element
list.addEventListener('click', function(event) {
  // Check if the clicked element is an <li> element
  if (event.target.tagName === 'LI') {
    // Toggle the 'crossed-out' class
    event.target.classList.toggle('crossed-out');
  }
});
