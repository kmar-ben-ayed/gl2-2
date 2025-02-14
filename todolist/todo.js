var nom=document.getElementById("name_content");
var content=document.getElementById("content_content");
var bouton=document.getElementById("add_todo");
var todoList = document.getElementById("todo_list");


bouton.addEventListener('click',function(){
    var todoelement=document.createElement("li");
    todoelement.className="todos";
    var todotext=nom.value+": "+content.value;
    var todoelementtext=document.createElement("span");
    todoelementtext.textContent=todotext;
    var tododeleteicon=document.createElement("i");
    tododeleteicon.className="bi bi-trash3";
    todoelement.appendChild(todoelementtext);
    todoelement.appendChild(tododeleteicon);
    todoList.appendChild(todoelement);
    tododeleteicon.addEventListener('click',function(){
        todoList.removeChild(todoelement);
    })
    nom.value="";
    content.value="";
})

