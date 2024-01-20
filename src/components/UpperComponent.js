import image1 from '../Images/icon-sun.svg';
import image2 from '../Images/icon-moon.svg'
 


const UpperComponent = ( { handleToggleSwitch, darkMode }) => {
    
    return (
        <div className=' header'>
            <h2>todo</h2>
            <span onClick={ handleToggleSwitch}>
                { darkMode ? <img src={image1} alt='' />: <img src= {image2} alt=''/> }
            </span>
        </div>
     );
}
 
export default UpperComponent;