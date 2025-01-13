import propTypes from "prop-types";

const BgAccount = ({ title, rising, subtitle, children }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{rising}</p>
        <p className="account-amount-description">{subtitle}</p>
      </div>
      {children}
    </section>
  );
};
BgAccount.propTypes = {
  title: propTypes.string.isRequired,
  rising: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  children: propTypes.element.isRequired,
};
export default BgAccount;
