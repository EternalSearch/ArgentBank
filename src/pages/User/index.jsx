import BgAccount from "../../components/BgAccount";
import Button from "../../components/Button";

const User = () => {
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>

        <Button 
            className="edit-button"
            text= "Edit Name">
      </Button>      
      </div>
      <h2 className="sr-only">Accounts</h2>

      <BgAccount
        title="Argent Bank Checking (x8349)"
        rising="$2,082.79"
        subtitle="Available Balance">

      <Button 
            className="account-content-wrapper cta,
            transaction-button"
            text= "View transactions">
      </Button>      
     </BgAccount>    
      <BgAccount
        title="Argent Bank Savings (x6712)"
        rising="$10,928.42"
        subtitle="Available Balance">    
 <Button 
            className="account-content-wrapper cta,
            transaction-button"
            text= "View transactions"> 
      </Button>      
     </BgAccount>
      <BgAccount
        title="Argent Bank Credit Card (x8349)"
        rising="$184.30"
        subtitle="Current Balance">        
        <Button 
        className="account-content-wrapper cta,
        transaction-button"
        text= "View transactions"> 
  </Button>  
 </BgAccount>
    </main> 
  );
};

export default User;
