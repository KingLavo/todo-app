import FormInput from "./components/FormInput";
import UpperComponent from "./components/UpperComponent";
import Output from "./components/Output";
import { useEffect, useState } from "react";
import { v4 } from 'uuid';
import Footer from "./components/Footer";
 
 


const App = ()=>{
  const [newInfoTodo, setnewInfoTodo] = useState([ ])
  const [ todos, setTodos ] = useState(newInfoTodo)
  const [ darkMode, setDarkmode ] = useState(false)

  const handleToggleSwitch = ()=>{
    setDarkmode( !darkMode)
       
    if(darkMode){
      document.body.classList.remove('dark-Mode')
      document.body.classList.add('light-mode')
    }else{
      document.body.classList.remove('light-mode')
      document.body.classList.add('dark-Mode')
    }
  }

const handleSubmit = (value)=>{
    const todosArr = [...newInfoTodo, { id:v4(), todo:value, done: false}]
    setnewInfoTodo( todosArr)
  }

const handleRemoveTodo = ( id)=>{
  const upDatedTodo = newInfoTodo.filter(todo=>todo.id !== id) 
  setnewInfoTodo( upDatedTodo)
  setTodos(upDatedTodo)
}

const handleCheckBoxChange = (id)=>{
        const newTodoo = newInfoTodo.map(todo=>{
            if(todo.id === id)
                return {...todo, done: !todo.done}
            return todo;
        })
        setnewInfoTodo(newTodoo)   
      }     
      
useEffect(()=>{
  localStorage.setItem('allTodo', JSON.stringify(newInfoTodo))
},[ newInfoTodo])
 

useEffect(()=>{
  const localData = JSON.parse(localStorage.getItem('allTodo'))
  if(localData)
    setTodos(localData)
}, [])
 
    
const handleCompleted = ()=>{
  localStorage.clear()
  setnewInfoTodo([])
  setTodos([])
} 


const handleFilterTodo = (e)=>{
  
  const word = e.target.value

  if( word === 'complete'){
        const completeTodo = newInfoTodo.filter(  (item) => {
           if( item.done){
            return item
           }
           return 0;
         })
    setTodos( completeTodo)
  
  }else if( word === 'all'){

    const newTodoo = newInfoTodo.map(todos=>{
          return {...todos}
       })
    // setnewInfoTodo(newTodoo)
    setTodos(newTodoo)    
  }else if( word === 'active'){
    const completeTodo = newInfoTodo.filter(  (item) => {
      if( !item.done){
       return item
      }
      return 0;
   }) 
   setTodos( completeTodo)
  } 
  
}
  return(
    <div className="App" >
       <section className="body">
        <div className="todo-container">
          <header>
            <UpperComponent
              handleToggleSwitch = { handleToggleSwitch}
              darkMode={ darkMode}
            /> 
          </header>
          <div className="todo-form">
              <FormInput
                handleSubmit = {handleSubmit }
                todos={todos}
                handleRemoveTodo={ handleRemoveTodo}
                handleCheckBoxChange={handleCheckBoxChange}
              />
          </div>
          <div>
            {todos.map(( todo)=>(
              <Output 
                  todo={todo} 
                  handleRemove={ handleRemoveTodo} 
                  key={ todo.id}
                  handleChange={ handleCheckBoxChange}
                />
            ))}
          </div>
          <div className="todo-footer">
          <Footer 
            handleCompleted={ handleCompleted} 
            newInfoTodo={ newInfoTodo }
            handleFilterTodo={ handleFilterTodo}
          /> 
          </div>
        </div>
       </section>
    </div>  
  )  
    }


  export default App;
 

