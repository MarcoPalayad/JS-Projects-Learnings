const todoList = [];

renderTodoList();

function renderTodoList() {
	let todoListHTML = "";

	todoList.forEach((todoObject, index) => {
		const { name, dueDate } = todoObject;
		const html = `
          <div>${name}</div>
          <div>${dueDate}</div>
          <button class="todo-delete js-delete-todo-btn">Delete</button>
      `;
		todoListHTML += html;
	});

	document.querySelector(".js-todo-list").innerHTML = todoListHTML;

	document.querSelectorAll("js-delete-todo-btn").forEach((deleteBtn, index) => {
		deleteBtn.addEventListener("click", () => {
			todoList.splice(index, 1);
			renderTodoList();
		});
	});
}

document.querySelector(".js-todo-add-btn").addEventListener("click", () => {
	addTodo();
});

document;

function addTodo() {
	const inputElement = document.querySelector(".todoInput");
	const name = inputElement.value;
	const dateInput = document.querySelector(".js-dueDate");
	const dueInput = dateInput.value;

	todoList.push({
		name: name,
		dueDate: dueInput,
	});
	console.log(todoList);

	inputElement.value = "";

	renderTodoList();
}
