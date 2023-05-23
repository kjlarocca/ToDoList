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

// Get form and list elements
const addItemForms = document.querySelectorAll('.addItemForm');
const itemInputs = document.querySelectorAll('.itemInput');
const itemLists = document.querySelectorAll('.itemList');

// Add event listener to each form
addItemForms.forEach(function(form, index) {
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const newItem = document.createElement('li'); // Create new list item element
    newItem.textContent = itemInputs[index].value; // Set its text content to the input value
    itemLists[index].appendChild(newItem); // Append the new item to the list

    itemInputs[index].value = ''; // Clear the input field
  });
});
