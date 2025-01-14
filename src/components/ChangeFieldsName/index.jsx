import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // getUserProfile,
  updateUserName,
} from "../../Redux/Actions/update_name";
import Button from "../Button";
import InputWrapper from "../InputWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const ChangeFieldsName = () => {
  const dispatch = useDispatch();

  // Récupération des données depuis le Redux Store
  const token = useSelector((state) => state.auth.token);
  
  const userProfile = useSelector((state) => state.user?.userProfile); // Récupére le profil utilisateur

  // États locaux pour l'édition
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState("");

  // Mise à jour de l'état local lors du chargement du profil utilisateur
  useEffect(() => {
    if (userProfile?.userName) {
      setUserName(userProfile.userName);
    }
  }, [userProfile]);

  // Gestion des événements
  const handleEditClick = () => setIsEditing(true);

  const handleCancel = () => {
    setIsEditing(false);
    setUserName(userProfile?.userName || ""); // Réinitialiser le nom d'utilisateur
  };

  const handleChangeUserName = (event) => setUserName(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!token) {
      console.error("Token non trouvé, utilisateur non authentifié");
      return;
    }
    // Vérification si le nom n'a pas changé
    if (userName === userProfile?.userName) {
      alert("Le nom d'utilisateur est identique. Veuillez entrer un nom différent.");
      return;
    }
    dispatch(updateUserName(userName, token.token)); // Mise à jour de l'utilisateur
    
    setIsEditing(false);
  };

  // Affichage
  return (
    <div className="header">
      <h2>
        Welcome back
        <br />
        {userProfile ? `${userProfile.firstName} ${userProfile.lastName}` : ""}
      </h2>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="edit-form">
          <section className="sign-in-content">
            <div className="edit-form__title">
              <FontAwesomeIcon icon={faCircleUser} />
              <h3>Edit user info</h3>
            </div>
            <InputWrapper
              label="User name"
              inputType="text"
              id="username"
              value={userName}
              onChange={handleChangeUserName}
            />
            <InputWrapper
              label="First name"
              inputType="text"
              id="firstname"
              value={userProfile?.firstName}
              disabled
            />
            <InputWrapper
              label="Last name"
              inputType="text"
              id="lastname"
              value={userProfile?.lastName}
              disabled
            />
            <div className="form-buttons">
              <Button
                className="edit-button"
                className2="form-buttons"
                text="Save"
                type="submit"
              />
              <Button
                className="edit-button"
                className2="form-buttons"
                text="Cancel"
                type="button"
                onClick={handleCancel}
              />
            </div>
          </section>
        </form>
      ) : (
        <Button
          className="edit-button"
          text="Edit Name"
          type="button"
          onClick={handleEditClick}
        />
      )}
    </div>
  );
};

export default ChangeFieldsName;
