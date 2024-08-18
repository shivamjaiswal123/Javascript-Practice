const inputField = document.querySelector("#input-field");

let id = 1;

inputField.addEventListener('keypress', (e)=>{
    if(e.key == 'Enter'){
        addTodo();
        id++;
        inputField.value = ""
    }
})

//add todo
function addTodo(){
    //get the inout value
    const value = inputField.value;

    //took ref of flex class div for appending into this
    const mainDiv = document.querySelector(".flex")

    //craeted parent div for todos
    const parentDiv = document.createElement("div")
    parentDiv.setAttribute("class", "todo");
    parentDiv.setAttribute("id", "item-"+id);

    //created a span for title
    const titleSpan = document.createElement("span");
    titleSpan.innerText = value;

    //created a span for both the icons
    const iconSpan = document.createElement("span");
    iconSpan.setAttribute("class", "todos-icons")

    //created i tag for checkbox and appneded inside icon span
    const checkbox = document.createElement("i");
    checkbox.setAttribute("class", "fa-solid fa-square-check");
    checkbox.setAttribute("onclick", `check(${id})`)
    checkbox.style.color = "#008000"
    iconSpan.appendChild(checkbox)

    //created i tag for trash and appneded inside icon span
    const trash = document.createElement("i");
    trash.setAttribute("class", "fa-solid fa-trash");
    trash.setAttribute("onclick", `deleteTodo(${id})`)
    trash.style.color = "#ff0000"
    iconSpan.appendChild(trash);

    //appended both title span and icon span in parent div
    parentDiv.appendChild(titleSpan);
    parentDiv.appendChild(iconSpan);

    mainDiv.appendChild(parentDiv);

}


//delete todo
function deleteTodo(id){
        const element = document.querySelector("#item-"+id);
        element.remove();
}

//check todo
function check(id){
    const checkElement = document.querySelector("#item-"+id);
    
}