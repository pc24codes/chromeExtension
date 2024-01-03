//variables
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn") 
const ulEl = document.getElementById("ul-el")

let name = localStorage.setItem("myLeads", "www.facebook.com")
localStorage.getItem("myLeads")

//using event-listeners instead of console.log
inputBtn.addEventListener('click', function(){
   // console.log('Button clicked using eventlistener')

    myLeads.push(inputEl.value) // this will take the input and log in the console post the button-click
    inputEl.value = "" // this will clear the textbox post the button click
    renderLeads()
    
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
