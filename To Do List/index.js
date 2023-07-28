const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }

    inputBox.value = '';
    saveData();
}

// For adding removing items
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentNode.remove();
        saveData();
    }
}, false);

// For storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// For displaying even after site refreshed/closed
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();