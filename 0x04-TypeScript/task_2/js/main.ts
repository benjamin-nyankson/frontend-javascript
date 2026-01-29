export function isDirector(employee){
}

function executeWork(employee){
if(isDirector(employee)){
    return employee.workDirectorTasks()
}
else{
    return employee.workTeacherTasks()
}
}