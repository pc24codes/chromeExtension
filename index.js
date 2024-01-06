//variable pool
let myLeads = [] 

// //notes 
//pushing a new value 
// myLeads.push("1234566988")

// //aray to string
// myLeads = JSON.stringify(myLeads)

// console.log(myLeads) //prints the value
// console.log(typeof myLeads) //string

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn") 
const ulEl = document.getElementById("ul-el")

let leadsfromLocal = JSON.parse(localStorage.getItem("myLeads"))
console.log("local leads: "+ leadsfromLocal)

 
//using event-listeners instead of console.log
inputBtn.addEventListener('click', function(){
   // console.log('Button clicked using eventlistener')

    myLeads.push(inputEl.value) // this will take the input and log in the console post the button-click
    inputEl.value = "" // this will clear the textbox post the button click
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads))  //localstorage will save the details; accepts key value pairs
    //JSON.string is used inorder to change the array to string.
    
    renderLeads()
    
    console.log(localStorage.getItem("myLeads"))
})


function renderLeads(){
    let listItems = ""

    for(i=0; i<myLeads.length; i++ )
    {
        console.log(myLeads[i])
        //ulEl.textContent +=  myLeads[i] + " " // this will render as plain text 
        // listItems += "<li><a target = '_blank' href = '#'>"+myLeads[i] +"</li>" // will render as ordered items as a hyperlink
        //console.log(listItems)
        listItems += 
            `<li>
            <a target='_blank' href='${myLeads[i]}'> 
            ${myLeads[i]}    
            </a>
            </li>`  // this is a template string

       /* const li = document.createElement("li")
        li.textContent = myLeads[i]
        ulEl.append(li)
        */
    }
    ulEl.innerHTML = listItems
}
