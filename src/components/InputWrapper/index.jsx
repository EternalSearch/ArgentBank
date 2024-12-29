import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";




const error = useSelector((state) => state.auth.error);
const dispatch = useDispatch();
const handleLogin = () => {
  dispatch(login('email@example.com', 'password'));
};

const InputWrapper = ({label,inputType, id, }) => {
  return (   
   < div> 
      <div className="input-wrapper">
        <label htmlFor={id}>{label}</label>
        <input type= {inputType} id={id} />                   
      </div>              
          {error && <div className="error-message">{error}</div>}  {/* Affichage de l'erreur */}
        </div>  
         
  );  




};
  InputWrapper.propTypes = {        
    label: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired, 
    text: PropTypes.string.isRequired
};
export default InputWrapper;


 

  

 
