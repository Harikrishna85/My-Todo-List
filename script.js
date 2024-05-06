const input = document.querySelector(".input-box");
const button = document.querySelector(".add-button");
const todolist = document.querySelector(".todo-list");
/*here we grabbed our input elementys which we have written in the html*/


button.addEventListener("click", addTodo);
/*this is for adding events*/
todolist.addEventListener("click", deleteTodo)
/*this is for deleting the events..when we click on this event delete todo should run which is written in the bottom*/


function addTodo(event){
    event.preventDefault();  /*it prevents the form from submitting to the server*/

    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo-container") /*here we created a div and added class to it*/
    const todoItem = document.createElement("li")
    todoItem.classList.add("todo-item")
    todoItem.innerText = input.value; /*with this user can give any input*/
    todoDiv.appendChild(todoItem); /*adding todoitem to tododiv*/

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete-btn")
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>' /*it will identifies it is html element and we want that only*/
    todoDiv.appendChild(deleteButton);

    const completeButton = document.createElement("button")
    completeButton.classList.add("complete-btn")
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    todoDiv.appendChild(completeButton);

    todolist.appendChild(todoDiv)  /*with this we are pushing whole tododiv into the todo list*/
    input.value = ""; /*with this after adding our input nothing should be present on box*/
    
}

/*this is for deleting the events*/
function deleteTodo(event){
    const item = event.target;
    if(item.classList[0] === "delete-btn"){/*here "===" is a comparison*/
        const delItem = item.parentElement;
        delItem.remove();
    }
    if(item.classList[0] === "complete-btn"){
        const delItem = item.parentElement;
        delItem.classList.toggle("completed");
    }
}