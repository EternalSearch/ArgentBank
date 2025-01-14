export const GET_USERPROFILE = "getUserProfile";
export const GET_USERPROFILE_REQUEST = "getUserProfileRequest";
export const GET_USERPROFILE_FAILURE = "getUserProfileFailure";

export const getUserProfileRequest = () => ({
  type: GET_USERPROFILE_REQUEST,
});

export const getUserProfileFailure = () => ({
  type: GET_USERPROFILE_FAILURE,
});

export const getUserProfile = () => async (dispatch) => {
  try {

    dispatch(getUserProfileRequest());
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    
    if (response.ok) {
      dispatch({ type: GET_USERPROFILE, payload: data.body })
      ;

    if (localStorage.getItem("token")) {
        localStorage.setItem("userProfile", JSON.stringify(data.body)); 
      } else {
        sessionStorage.setItem("userProfile", JSON.stringify(data.body)); 
      }
    } else {
      console.error("Erreur lors de la récupération du profil :", data.message);
      dispatch(getUserProfileFailure());
    }

  } catch (error) {
    console.error("Erreur attrapée :", error.message);
    dispatch(getUserProfileFailure());
  }
};


export const updateUserName = (newUserName, token) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Inclure le token dans les en-têtes
      },
      body: JSON.stringify({ userName: newUserName }), // Envoyer le nouvel username
    });

    if (!response.ok) {
      alert("Une erreur est survenue lors de la mise à jour du username.");
    }

    const data = await response.json();
    
    // Met à jour le profil utilisateur dans le store
    dispatch({
      type: GET_USERPROFILE,
      payload: data.body, // Mise à jour avec les nouvelles données
    });
    sessionStorage.setItem("userProfile", JSON.stringify(data.body));
    alert("Le username a été mis à jour.");
  } catch (error) {
    console.error("Erreur lors de la mise à jour du username :", error);
  }
};