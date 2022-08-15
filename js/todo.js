const toDoForm = document.getElementById("todo-form");
const toDoInput = docuemnt.querySelector("#todo-form-input");
const toDoList = document.getElementById("todo-List");

function handleToDoSubmit() {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
}

toDoForm.addeventListener("submit", handleToDoSubmit)