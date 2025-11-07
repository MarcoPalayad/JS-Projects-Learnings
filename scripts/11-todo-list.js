const todoList = [];

renderTodoList();

function renderTodoList () {

    let todoListHTML = ''


    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i]
        const {name, dueDate} = todoObject
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList()
            " class="todo-delete">Delete</button>
        `
        todoListHTML += html
    }

    console.log(todoListHTML)
    document.querySelector('.js-todo-list').innerHTML = todoListHTML



}




function addTodo () {

    const inputElement = document.querySelector('.todoInput')
    const name = inputElement.value
    const dateInput = document.querySelector('.js-dueDate')
    const dueInput = dateInput.value

    todoList.push({
        name: name,
        dueDate: dueInput
        })
    console.log(todoList)

    inputElement.value = ''

    renderTodoList()

}