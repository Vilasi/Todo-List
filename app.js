const newTodoInputForm = document.querySelector('form.add');
const ul = document.querySelector('ul');

//This prevents the page from reloading when the enter key is pressed.
newTodoInputForm.addEventListener('submit', (event) => {
  event.preventDefault();
});

//This creates a new todo item in the DOM
newTodoInputForm.addEventListener('keyup', (event) => {
  event.preventDefault();
  // .trim() removes excess whitespace
  let inputValue = event.target.value.trim();

  console.log(event);
  console.log(inputValue);
  //   console.log(inputValue);
  //   console.log(event);
  //   console.log(event.keyCode);

  //This if check executes if the Enter key is pressed.
  if (event.keyCode === 13) {
    //Create a new <li> tag.
    let newTodo = document.createElement('li');
    newTodo.classList.add(
      'text-light',
      'list-group-item',
      'd-flex',
      'justify-content-between',
      'align-items-center'
    );

    //Create a new <span> tag.
    let todoTextContent = document.createElement('span');
    todoTextContent.textContent = `${inputValue}`;

    //Create a new icon <i> tag.
    let trashIcon = document.createElement('i');
    trashIcon.classList.add('lar', 'la-trash-alt', 'delete');

    //Append the newly created tags to the DOM
    newTodo.appendChild(todoTextContent);
    newTodo.appendChild(trashIcon);
    ul.appendChild(newTodo);
    console.log(inputValue);
    //Clear the input
    event.target.value = '';
  }
});
