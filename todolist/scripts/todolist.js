const todoList = [{
  name: 'make dinner',
  date: '2022-02-12',
  }];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.date;
    const html = 
    `<div>
    ${name}
    </div>
    <div>
    ${dueDate} 
    </div>
    <button 
      onClick = "
      todoList.splice(${i}, 1);
      renderTodoList();
      " class = "delete-todo-button">
      Delete
    </button>
    `;
    todoListHTML += html;
  }
  
  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
}



function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-due-date-input')
  const name = inputElement.value;
  const dueDate = dateInputElement.value;

  todoList.push({
    name: name,
    date: dueDate
  });

  inputElement.value = "";

  renderTodoList();
}