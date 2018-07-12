var number =1
saveData = function(){
  
    var displayCounter = document.getElementById('counter')
    localStorage.setItem("counter",number)
var currentValue =  localStorage.getItem("counter")
    displayCounter.innerHTML= currentValue
    number++
}