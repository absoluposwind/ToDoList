resetBtn.addEventListener("click",handleReset);

function handleReset(){
    if(localStorage.length===0){
        alert("everything is null");
    }else{
        resetName();
        resetToDo();
        localStorage.clear();
        weather.remove(weather.value);
        location.reload();
    }
}

function resetName(){
    greeting.classList.remove(SHOWING_CN);
    localStorage.removeItem(USER_LS);
    form.classList.add(SHOWING_CN);
    input.value="";
    toDoInput.value="";
}

function resetToDo(){
  
    localStorage.removeItem(TODOS_LS,JSON.stringify(toDos));
    init();
    const toList = document.querySelector("ul");
    const li = document.querySelectorAll("li");

    while(toList.hasChildNodes()){
      toList.removeChild(toList.firstChild);
    }
  
}