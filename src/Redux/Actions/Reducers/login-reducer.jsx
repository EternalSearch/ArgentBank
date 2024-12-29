import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/userActions';

const initialState = {
  token: null,
  userId: null,
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        isAuthenticated: true,
        error: null,        
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        userId: null,
        isAuthenticated: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default userReducer;
