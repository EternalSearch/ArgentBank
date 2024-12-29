export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';



// Action pour la connexion
export const loginSuccess = (token, userId) => ({
  type: LOGIN_SUCCESS,
  payload: { token, userId },
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const logout = () => ({
  type: LOGOUT,
});


// Fonction d'appel API pour la connexion
export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(loginSuccess(data.token, data.userId));
      window.localStorage.setItem('token', data.token);
      window.localStorage.setItem('userId', data.userId);
      window.location.href = '../index.html'; // Redirection après connexion
    } else {
      dispatch(loginFailure());
      alert('Erreur dans l\'identifiant ou le mot de passe');
    }
  } catch (error) {
    console.error(error);
    dispatch(loginFailure());
    alert('Une erreur est survenue. Veuillez réessayer.');
  }
};





