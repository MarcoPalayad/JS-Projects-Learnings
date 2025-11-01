const todoList = [];

renderTodoList();

function renderTodoList () {

    let todoListHTML = ''


    for (let i = 1; i < todoList.length; i++) {
        const todo = todoList[i]
        const html = `<p>${todo}</p>`
        todoListHTML += html
    }

    console.log(todoListHTML)
    document.querySelector('.js-todo-list').innerHTML = todoListHTML



}




function addTodo () {

    const inputElement = document.querySelector('.todoInput')
    const name = inputElement.value

    todoList.push(name)
    console.log(todoList)

    inputElement.value = ''

    renderTodoList()

}