import Chaticon from "../../assets/images/icon-chat.webp";
import Iconmoney from "../../assets/images/icon-money.webp";
import Iconsecurity from "../../assets/images/icon-security.webp";
import GreenCircle from "../../components/GreenCircle";

const HomePage = () => {
  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>

        <GreenCircle
          icon={Chaticon}
          alt="Chat Icon"
          title="You are our #1 priority"
          subtitle="Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes."
        />

        <GreenCircle
          icon={Iconmoney}
          alt="Money Icon"
          title="More savings means higher rates"
          subtitle="The more you save with us, the higher your interest rate will be!"
        />

        <GreenCircle
          icon={Iconsecurity}
          alt="Security Icon"
          title="Security you can trust"
          subtitle="We use top of the line encryption to make sure your data and money
          is always safe."
        />
        
      </section>
    </main>
  );
};
export default HomePage;
