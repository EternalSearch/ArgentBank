import PropTypes from "prop-types"
const Button = ({className, text, }) => {
    return (
        <button className={className}>{text}</button>
    ); 
};
    
    Button.propTypes = {
        className: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        div: PropTypes.string,  
              
    };   
export default Button
