dragStartNow= function(e){
console.log("on drag")
e.dataTransfer.setData("sourceId",e.target.id)
}

dragOverNow = function(e){
    e.preventDefault()
    console.log("dragging")
    
}

//dropNow = function(e){
  function dropNow(e){  
    e.preventDefault()
    console.log("dropped")
    var temp = e.dataTransfer.getData("sourceId")
    console.log(temp)
    var tempImg = document.getElementById(temp)
    e.target.appendChild(tempImg)

}