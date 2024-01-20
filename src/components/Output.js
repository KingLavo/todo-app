// import { FaCheck } from  'react-icons/fa6'
const Output = ({ todo, handleRemove, handleChange}) => {

    return ( 
        <div className="output-list">
            <div className="left">
               <input
                  type="checkbox"  
                  className="checkbox"
                  checked={ todo.done} 
                  onChange={()=>{handleChange(todo.id)}}
                 />
               <span className="IndivTodo" style={ todo.done ? { textDecoration:"line-Through", color:" gray"}:          {textDecoration:"none"}}>
                  { todo.todo }
               </span>
            </div>
            <button className="del-btn" onClick={()=>handleRemove(todo.id)}>
               <span>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 352 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
               </span>
            </button>
        </div>
     );
}
 
export default Output;