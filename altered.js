var addTask= function() {
    const newTask= document.querySelector('#new-task').value;
    const taskList=getDataFromStorage("TASK_LIST") || [];
    taskList.push({task: newTask, isCompleted: false);
    saveDataToStorage("TASK_LIST", taskList);
}

var getTodoList= function() {
    const taskList=getDataFromStorage("TASK_LIST") || [];
    if(taskList && taskList.length>0) {
        taskList= taskList.filter(x=>x.isCompleted === false);
    }
    return taskList;
}

var getTodoList= function() {
    const taskList=getDataFromStorage("TASK_LIST") || [];
    if(taskList && taskList.length>0) {
        taskList= taskList.filter(x=>x.isCompleted === true);
    }
    return taskList;
}


var saveDataToStorage= function(name, data){
    window.localStorage.setItem(name, JSON.stringify(data));
}

var getDataFromStorage= function(name) {
    const data= window.localStorage.getItem(name);
    data= data? JSON.parse(data): null;
    return data;
}