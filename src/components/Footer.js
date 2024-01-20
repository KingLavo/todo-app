const Footer = ({ newInfoTodo, handleCompleted, handleFilterTodo, todos }) => {
         
     
    return ( 
    
        <div className="footer" >
            <div className="left">
                <p>{ newInfoTodo.length} items left</p>
            </div>

            <div className="center-footer">
                <button value='all' onClick={ handleFilterTodo }> All</button>
                <button value='active' onClick={handleFilterTodo}> Active</button>
                <button value='complete'  onClick={handleFilterTodo}> Complete</button>
            </div>
            
            <div className="right-footer ">
                <button onClick={handleCompleted}>Clear Completed</button>
            </div>
            
        
        </div>
    );
}

export default Footer;