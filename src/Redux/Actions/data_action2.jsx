
export const LOGIN_SUCCESS = "loginSuccess";
export const LOGIN_FAILURE = "loginFailure";
export const LOGOUT = "logout";


export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: { token },
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const logout = () => ({
  type: LOGOUT,
});


export const loginUser = (email, password, rememberMe, navigate, ) => async (dispatch) => {
  try {
    console.log("Tentative de connexion avec :", { email, password, rememberMe });

    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log("Données JSON : ", data);

    if (response.ok) {
      dispatch(loginSuccess(data.body.token));
      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem("token", data.body.token); 
     
      navigate("/user");

    } else {;
      dispatch(loginFailure());
      alert("Erreur dans l'identifiant ou le mot de passe");
    }
  } catch (error) {
    ;
    dispatch(loginFailure());
    alert("Une erreur est survenue : ", error.message || error);
  }
};

