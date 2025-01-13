import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../Actions/data_action2";
// import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../Actions/actionTypes.jsx";

const initialState = {
  token: null,
  isAuthenticated: false,
  error: null,
  userName: null, 
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        userName: action.payload.username,
        error: null, 
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        userName: null,
        error: action.payload,       
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        userName: null,
        error: null, 
      
      };
      case "UPDATE_NAME":
      return {
        ...state,
        userName: action.payload,
      }
    default:
      return state;
  }
};

export default loginReducer;


