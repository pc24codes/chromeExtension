//variable pool
let myLeads = [] 

// //notes 
//pushing a new value 
// myLeads.push("1234566988")

// //array to string
// myLeads = JSON.stringify(myLeads)

// console.log(myLeads) //prints the value
// console.log(typeof myLeads) //string

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn") 
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsfromLocal = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if(leadsfromLocal){    // this will render leads from localStorage and calls renderleads()
    myLeads = leadsfromLocal
    render(myLeads)
}


//save tab button
tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})


function render(leads){
    let listItems = ""

    for(i=0; i<leads.length; i++ )
    {
        
        listItems += 
            `<li>
            <a target='_blank' href='${leads[i]}'> 
            ${leads[i]}    
            </a>
            </li>`  // this is a template string

    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear() //clears the localstorage
    myLeads = [] // assigns the array to be empty
    render(myLeads)  // will render the DOM again, but the arrays are empty
}

)

//using event-listeners instead of console.log
inputBtn.addEventListener('click', function(){
   // console.log('Button clicked using eventlistener')

    myLeads.push(inputEl.value) // this will take the input and log in the console post the button-click
    inputEl.value = "" // this will clear the textbox post the button click
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads))  //localstorage will save the details; accepts key value pairs
    //JSON.string is used inorder to change the array to string.
    
    render(myLeads)
    
    //console.log(localStorage.getItem("myLeads"))
})
