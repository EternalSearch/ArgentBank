
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


export const loginUser = (email, password, rememberMe) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    
    if (response.ok) {
      dispatch(loginSuccess(data.body));
      
      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem("token", data.body.token); 
     
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

