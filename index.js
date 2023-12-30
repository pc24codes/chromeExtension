//variables
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn") 

//using event-listeners instead of logging
inputBtn.addEventListener('click', function(){
   // console.log('Button clicked using eventlistener')
    myLeads.push(inputEl.value) // this will take the input and log in the console post the button-click
    console.log(myLeads)
})
