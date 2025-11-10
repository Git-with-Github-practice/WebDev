let ctr = 0;

function deleteTodo(serial) {
    const todoEl = document.getElementById('todo-' + serial);
    todoEl.parentElement.removeChild(todoEl);

}

function addTodo() {
    ctr++;
    const inputEl = document.querySelector('input');
    const value = inputEl.value;

    const newDivEl = document.createElement('div');
    newDivEl.setAttribute('id', 'todo-' + ctr);
    newDivEl.innerHTML = "<div><span>" + value + "</span><button onclick = 'deleteTodo(" + ctr + ")'>Delete</button></div>";

    document.querySelector('body').appendChild(newDivEl);
}

