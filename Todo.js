var inputValue = document.getElementById("taskValueId")
var counter =1 

addTask = function(){

    if(localStorage.getItem("taskCounter")===null){
        localStorage.setItem("taskCounter",counter)
    }else{
        counter= localStorage.getItem("taskCounter")
    }
    var currentTask = inputValue.value
  //  console.log("")

    localStorage.setItem("task_"+counter,currentTask)
    inputValue.value=""
    localStorage.setItem("taskCounter",++counter)
    loadTask()

}

function loadTask(){

     var container = document.getElementById("taskContainer")
    container.innerHTML = "" 

    var newul= document.createElement("ol")
   // document.getElementById("taskContainer").appendChild(newul)
    container.appendChild(newul)
    document.getElementById("taskContainer").appendChild(newul)
    var max = localStorage.getItem("taskCounter")

   for(var i=1;i<max;i++){
       var newli = document.createElement("li")
       var currentTask = localStorage.getItem("task_"+i)

       newli.innerHTML = currentTask

       newul.appendChild(newli)
   }

   /*  var newli1 = document.createElement("li")
    newli1.innerHTML="this is one li"

    newul.appendChild(newli1) */

}
