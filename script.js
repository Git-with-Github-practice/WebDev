let todos = [];

function addTodo() {
    todos.push({
        title: document.querySelector("input").value;
    })
    render();
}

function deleteTodo() {
    todos.filte()
}

function render() {
    const spanEl = document.querySelector("span");
    
}