import { BiCircle } from 'react-icons/bi'
import { useState } from 'react';


const FormInput = ({ handleSubmit }) => {
   const [ todoValue, setTodoValue] = useState('')
 
  const handleTodoValue = (e)=>{
       e.preventDefault()
       handleSubmit(todoValue)
       setTodoValue('')
  } 
   return ( 
       <form className="users-todo" onSubmit={handleTodoValue}>
           <BiCircle className='icon' size='25px'  />
           <input 
           type="text"
           placeholder='Creat a new todo'
           value={todoValue}
           required
           onChange={(e)=>setTodoValue(e.target.value)}
           />
       </form> 
   );
}

export default FormInput;