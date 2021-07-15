var todo = document.getElementById("todo-list") 

function addtodo(){



    var inp = document.getElementById("iteam");
    var list = document.createElement("li");
    var listText = document.createTextNode(inp.value);
    list.appendChild(listText);
    todo.appendChild(list);
    
    list.setAttribute("class", "list-group-item");    
 
 var delBtn = document.createElement("button");
 var delbtnText = document.createTextNode("Delete");
 delBtn.appendChild(delbtnText); 
 delBtn.setAttribute("class", "btn btn-danger ms-3");    

list.appendChild(delBtn);
delBtn.setAttribute("onclick","deletebtn(this)");

var rembtn = document.createElement("button");
var remText = document.createTextNode("Edit");
rembtn.appendChild(remText);
rembtn.setAttribute("class", "btn btn-info ms-2");    
list.appendChild(rembtn);
rembtn.setAttribute("onclick","remove(this)");
inp.value = " "

var divv = document.createElement("div");
divv.setAttribute("class"," mt-1 flot-end")
// divv.appendChild(delBtn)
// divv.appendChild(rembtn)
// list.appendChild(divv);
// console.log(list);




}
function deletebtn(e){
  
e.parentNode.remove()
}

function remove(e){
    var foo = e.parentNode.firstChild.nodeValue
    var EditVal = prompt("enter value", foo);
    e.parentNode.firstChild.nodeValue = EditVal;
}
function deleteall(){
    todo.innerHTML = " "
}