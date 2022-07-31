//funcao que adiciona tarefa
function addTaskList(){

    //titulo da tarefa
    var taskTitle = window.document.getElementById("task-title").value;
    
    if(taskTitle){

        //clonar template
        var template = window.document.querySelector(".template");

        var newTask = template.cloneNode(true);
        
        //adicionando titulo
        newTask.querySelector("#span-title").textContent = taskTitle;

        //remover classes desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //adicionar tarefa na lista
        var lista = window.document.querySelector("#task-list");
        lista.appendChild(newTask);

        //adicionar o evento de remover
        var removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        });

        //adicionar o evento de completar tarefa
        var doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
        })

        //limpar texto 
        taskTitle = window.document.getElementById("task-title").value = ''
    }

}

//funcao de remover tarefa
function removeTask(task){

    task.parentNode.remove(true);

}

//funcao de completar tarefa
function completeTask(task) {

    var taskComplete = task.parentNode;

    taskComplete.classList.toggle("done");

}


// evento de adicionar tarefa
var addTask = window.document.querySelector("#add-tasks");


addTask.addEventListener("click", function(e){
    e.preventDefault();

    addTaskList();
});