const inputField = document.querySelector('input-field');
const taskBtn = document.querySelector('task-btn');
const clearBtn = document.querySelector('clear-btn');

function clearField () {
    document.getElementById('input-field').value = "";
}


function addTask() {
    // const x = document.createElement('ul');
    // x.setAttribute("id", "myUL");
    // document.body.appendChild(x);

    // const y = document.createElement('li');
    // var inputText = document.getElementById('input-field').value;
    // var t = document.createTextNode("bob");
    // y.appendChild(t);
    // document.getElementById("myUL").appendChild(y);

    
    // document.getElementById("demo").innerHTML = inputText;

    // create ordered list element
    const x = document.createElement('ol');
    x.setAttribute("id", "myOL");
    document.body.appendChild(x);

    // get input-field value and append to list
    var inputText = document.getElementById('input-field').value;
    const y = document.createElement('li');
    y.setAttribute("class", "myLI");
    const t = document.createTextNode(inputText);
    y.appendChild(t);
    document.getElementById("myOL").appendChild(y);

    

    // create done button element
    var doneBtn = document.createElement("button");
    doneBtn.setAttribute("class", "done-btn");
    doneBtn.innerHTML = "Done";
    y.appendChild(doneBtn);
    // var myNodeList = document.getElementsByTagName('li');
    // var i;
    // for (i = 0; i < myNodeList.length; i++) {
    //     var doneBtn = document.createElement("button");    
    // doneBtn.setAttribute("class", "done-btn");
    // doneBtn.innerHTML = "Done";
    // myNodeList[i].appendChild(doneBtn);
    // }
    

    // create delete button element
    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.innerHTML = "Delete";
    y.appendChild(deleteBtn);
    // var myNodeListDelete = document.getElementsByTagName('li');
    // var i;
    // for (i = 0; i < myNodeListDelete.length; i++) {
    //     var deleteButton = document.createElement("button");
    //     deleteButton.setAttribute("class", "delete-btn");
    //     deleteButton.innerHTML = "Delete";
    //     myNodeListDelete[i].appendChild(deleteButton); 
    // }

    // add delete function to delete button
    deleteBtn.addEventListener('click', () => y.remove());
    y.appendChild(deleteBtn);

    // add done function to done button
    doneBtn.addEventListener('click', function() {
        y.style.textDecoration = doneBtn.click ? 'line-through' : 'none';
        y.appendChild(doneBtn);
    });
    // doneBtn.addEventListener('click', () => {
    //     y.style.textDecoration = "line-through";
    // });

    // clear input-field when clear button is clicked
    document.getElementById('input-field').value = "";
    
    // inputText.addEventListener('keyup', function(event) {
    //     if(event.which === 13) {
    //        addTask();
    //     }
    // });
}





// /* Create a "close" button and append it to each list item*/
// var myNodeList = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodeList.length; i++) {
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     myNodeList[i].appendChild(span);
// }