/////////////////////////////////////////////////////////////////////////////MY METHOD

// const newTodoInputForm = document.querySelector('form.add');
// const ul = document.querySelector('ul');

// //This will remove the dropdown options from the form input field.
// newTodoInputForm.autocomplete = 'off';

// //This prevents the page from reloading when the enter key is pressed.
// newTodoInputForm.addEventListener('submit', (event) => {
//   event.preventDefault();
// });

// //This creates a new todo item in the DOM
// newTodoInputForm.addEventListener('keyup', (event) => {
//   event.preventDefault();
//   // .trim() removes excess whitespace
//   let inputValue = event.target.value.trim();

//   // console.log(event);
//   // console.log(inputValue);
//   //   console.log(inputValue);
//   //   console.log(event);
//   //   console.log(event.keyCode);

//   //This if check executes if the Enter key is pressed.
//   if (event.keyCode === 13 && inputValue.length) {
//     //Create a new <li> tag.
//     let newTodo = document.createElement('li');
//     newTodo.classList.add(
//       'text-light',
//       'list-group-item',
//       'd-flex',
//       'justify-content-between',
//       'align-items-center'
//     );

//     //Create a new <span> tag.
//     let todoTextContent = document.createElement('span');
//     todoTextContent.textContent = `${inputValue}`;

//     //Create a new icon <i> tag.
//     let trashIcon = document.createElement('i');
//     trashIcon.classList.add('lar', 'la-trash-alt', 'delete');

//     //Append the newly created tags to the DOM
//     newTodo.appendChild(todoTextContent);
//     newTodo.appendChild(trashIcon);
//     ul.appendChild(newTodo);
//     console.log(inputValue);
//     //Clear the input
//     event.target.value = '';
//   }
// });

// //This will delete a todo item when the trash icon is clicked.
// ul.addEventListener('click', (event) => {
//   if (event.target.classList.value.includes('delete')) {
//     //d-none is a bootstrap class which sets the display to none.
//     event.target.parentNode.classList.add('d-none');
//   }
// });

////////////////////////////////////////////////////////////////////////////////////// COURSE METHOD
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = (todo) => {
  const html = `<li class="text-light list-group-item d-flex justify-content-between align-items-center">
          <span>${todo}</span>
          <i class="lar la-trash-alt delete"></i>
        </li>`;
  list.innerHTML += html;
};

//This will remove the dropdown options from the form input.
addForm.autocomplete = 'off';

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const todo = addForm.add.value.trim();

  //If (todo.length) is greater than 0, this will evaluate to True. If (todo.length) is 0, it will evaluate as false and not fire.
  if (todo.length) {
    generateTemplate(todo);

    // .reset() will reset all the input fields inside the form.
    addForm.reset();
  }
});

// delete todos
list.addEventListener('click', (event) => {
  //.contains() is a method unique to the DOM Nodelist and will return true if event.target.classList contains 'delete'
  if (event.target.classList.contains('delete')) {
    //.parentELemement is similar to parentNode, except that it will only return a value if the value is an HTML element.
    //so if the parent is something like 'document', nothing will be returned.
    event.target.parentElement.remove();
  }
});

// filter todos
const filterTodos = (term) => {
  //This will return an HTMLCollection. It must be turned into an array before array methods can be used on it.
  Array.from(list.children).filter(() => {});
};

// keyup event
search.addEventListener('keyup', () => {
  const term = search.value.trim();
  filterTodos(term);
});
