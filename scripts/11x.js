const todoList = JSON.parse(localStorage.getItem('todo-list')) || [];

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

    if (name.trim() === '') {
        alert('Please enter a todo list')
        return
    }

    if (dueInput === '') {
        alert('Please add a date to a todo!')
        return
    }

    todoList.push({
        name: name,
        dueDate: dueInput
        })
    console.log(todoList)

    inputElement.value = ''
    dateInput.value = ''

    saveTodoList()

    renderTodoList()

}


function saveTodoList () {
    localStorage.setItem('todo-list', JSON.stringify(todoList))
}

function deleteTodo (index) {
    todoList.splice(index, 1)
    saveTodoList()
    renderTodoList()
}