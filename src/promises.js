const todolist = require('./todolist')

//Define a function that gets all the todos from the 
// todolist array declared asynchronously after 2 seconds
getAllTodos = (todolist) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(todolist.length == 0){
                reject('No data')
            }
            resolve(todolist)
           },2000)
        }) 
    
}
// Define a function to add a todo to the todolist array
createTodo = (todo) => {
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(todo == undefined){
            reject('No data to be added')
        }
        resolve([...todolist, todo])
       })
   })
}
module.exports ={
    createTodo,getAllTodos
}