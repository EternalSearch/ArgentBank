import PropTypes from "prop-types";

const GreenCircle = ({ icon, alt, title, subtitle }) => {
  return (
      <div className="feature-item">
        <img src={icon} alt={alt} className="feature-icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p>{subtitle}</p>
      </div>
  );
};

GreenCircle.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default GreenCircle;
