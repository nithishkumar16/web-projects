//selectors
const todoinput = document.querySelector('.todo-input');
const todobutton = document.querySelector('.todo-button');
//ul tag
const todolist = document.querySelector('.todo-list');
//select tag
const filteroption=document.querySelector('.filter-todo');

//event listeners
document.addEventListener('DOMContentLoaded',getTodos)
todobutton.addEventListener('click',addTodo); //plus button
todolist.addEventListener('click',deletecheck); //check and delete functionality
filteroption.addEventListener('click',filterTodo);//select tag

//functions

function addTodo(){
    event.preventDefault();
    const tododiv= document.createElement("div");
    tododiv.classList.add('todo');

    const newtodo= document.createElement('li');
    newtodo.innerText=todoinput.value;
    newtodo.setAttribute('class','todo-item');
    tododiv.appendChild(newtodo);
    //add todo to local storage
    savelocaltodos(todoinput.value);
    //checkmark button
    const completedbutton=document.createElement('button');
    completedbutton.innerHTML="<i class='fas fa-check'></i>";
    completedbutton.setAttribute('class','complete-btn');
    tododiv.appendChild(completedbutton);
    //trash button
    const trashbutton=document.createElement('button');
    trashbutton.innerHTML="<i class='fas fa-trash'></i>";
    trashbutton.setAttribute('class','trash-btn');
    tododiv.appendChild(trashbutton);

    //append tododiv with todolist
    todolist.appendChild(tododiv);
    //clear todo input value after adding it
    todoinput.value="";
}

//fav part
function deletecheck(e){
    const item=e.target;

    //delete todo
    if(item.classList[0]==="trash-btn"){
        item.parentElement.classList.add('fall');

        //calling removelocalstorage function
        removelocaltodos(item.parentElement);
        
        //animation code for delete
        addEventListener('transitionend',()=>{
            item.parentElement.remove();
        })
        // item.parentElement.remove();
    }
    //check mark
    if(item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    //let todos=todolist.childNodes;
    let todos=Array.from(todolist.childNodes);
    todos.splice(0, 1);
    //console.log(todos);
    todos.forEach(function(t) {
        switch(e.target.value){
                case "all":
                    t.style.display="flex";
                    break;
                case "completed":
                    if(t.classList.contains("completed")){
                        t.style.display="flex";
                    }
                    else{
                        t.style.display="none";
                    }
                    break;
                case "uncompleted":
                    if(t.classList.contains("completed")){
                        t.style.display="none";
                    }
                    else{
                        t.style.display="flex";
                    }
                    break;
            }
    });
}



function savelocaltodos(todo){
    //check it exists
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function getTodos(){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach(element => {
        const tododiv= document.createElement("div");
    tododiv.classList.add('todo');

    const newtodo= document.createElement('li');
    newtodo.innerText=element;
    newtodo.setAttribute('class','todo-item');
    tododiv.appendChild(newtodo);
    
    //checkmark button
    const completedbutton=document.createElement('button');
    completedbutton.innerHTML="<i class='fas fa-check'></i>";
    completedbutton.setAttribute('class','complete-btn');
    tododiv.appendChild(completedbutton);
    //trash button
    const trashbutton=document.createElement('button');
    trashbutton.innerHTML="<i class='fas fa-trash'></i>";
    trashbutton.setAttribute('class','trash-btn');
    tododiv.appendChild(trashbutton);

    //append tododiv with todolist
    todolist.appendChild(tododiv);
        
    });
}
 function removelocaltodos(todo){
     console.log("remove function",todo);
     let todos;
     if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    const todoindex=todo.children[0].innerText;
    todos.splice(todos.indexOf(todoindex),1);
    localStorage.setItem("todos",JSON.stringify(todos));
     
 }