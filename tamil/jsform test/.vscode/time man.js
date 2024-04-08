const button = document.getElementById("Submit");
const table = document.getElementById("list");
let rows = table.rows.length;

button.addEventListener('click', ()=>{
    append()
});

const editButton = document.createElement("button");
editButton.textContent = "Edit";

const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";

function append() {

    var r = table.insertRow(rows);   
    var c1 = r.insertCell(0);  
    var c2 = r.insertCell(1); 
    var c3 = r.insertCell(2); 
    var c4=r.insertCell(3)
    var c5=r.insertCell(4)

    const myform = document.querySelectorAll(".myform")
    myform.forEach(form => {
        const task = form.querySelector('#task').value;
        const date = form.querySelector('#date').value;
        const time = form.querySelector('#time').value;

        c1.textContent = task;  
        c2.textContent = date;
        c3.textContent = time;
    

    }); 
    c4.appendChild(editButton);
    c5.appendChild(deleteButton);

    rows++;
}

editButton.addEventListener('click',()=>
    {
        change()
    })    
function change()
{
    alert("HAPPY")
}
