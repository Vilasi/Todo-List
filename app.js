const newTodo = document.querySelector('form.add');
const ul = document.querySelector('ul');
const search = document.querySelector('form.search');

//Remove the dropdown options from the form input field.
newTodo.autocomplete = 'off';
search.autocomplete = 'off';

//Add a new <li> item as per user input in newTodo form input field.
const generateLi = (input) => {
  ul.innerHTML += `<li class="
    text-light
    list-group-item
    d-flex
    justify-content-between
    align-items-center">
      <span>${input}</span>
      <i class="lar la-trash-alt delete"></i>
  </li>`;
  newTodo.reset();
};

//newTodo submit event. Firest generateLi function on submit.
newTodo.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = newTodo.querySelector('.form-control');
  let userInput = input.value.trim();

  //If check only returns true if userInput.lenght > 0.
  //This prevents blank Todos from being created.
  if (userInput.length) {
    generateLi(userInput);
  }
});

//Delete a todo item when the trash icon is clicked.
ul.addEventListener('click', (event) => {
  if (event.target.classList.value.includes('delete')) {
    //d-none is a bootstrap class which sets the display to none.
    event.target.parentNode.remove();
  }
});

//Calls listFilter(value) on keyup in search form input field.
search.addEventListener('keyup', (event) => {
  let value = event.target.value.toLowerCase().trim();
  listFilter(value);
});

//Function listFilter(value) creates an array from the <li> elements within <ul>
//If the textContent of an <li> element does not include text from the variable 'value', it is filtered out
//Of the remaining items after the filter, each are given a class of 'd-none' - a bootstrap class which sets display: none;
const listFilter = (value) => {
  Array.from(ul.children)
    .filter((li) => !li.textContent.toLowerCase().includes(value))
    .forEach((li) => li.classList.add('d-none'));

  //This filter returns items which do match textContent of variable 'value'.
  //For each item returned by the filter, the class of 'd-none' is removed.
  Array.from(ul.children)
    .filter((li) => li.textContent.toLowerCase().includes(value))
    .forEach((li) => li.classList.remove('d-none'));
};
