const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");
function add(){
    if(inputbox.value==''){
        alert("You must write something!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span"); //span is used to create a cross symbol
        span.innerHTML="\u00d7"; //\u00d7 is the unicode for the cross symbol
        li.appendChild(span);
    }
    inputbox.value="";
    savedata();
}
let btn=document.getElementById("btn");
btn.addEventListener("click",add);
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){ //tagName is in uppercase // e.target is the element that triggered the event
        e.target.classList.toggle("checked"); //toggle adds a class if it is not present and removes it if it is present
    }
    else if(e.target.tagName=="SPAN"){ //tagName is in uppercase // e.target is the element that triggered the event
        e.target.parentElement.remove();//e.target.parentElement is the parent element of the span element //remove() removes the element from the DOM
    }
},false);
function savedata(){
    localStorage.setItem("listcontainer",listcontainer.innerHTML);
}