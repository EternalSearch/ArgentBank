import { GET_USERPROFILE, GET_USERPROFILE_FAILURE, GET_USERPROFILE_REQUEST } from "../Actions/update_name";

const initialState = {
  
    userProfile: null,
    loading: false,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_USERPROFILE_REQUEST:
        return { ...state, loading: true, error: null };
  
      case GET_USERPROFILE:
        return { ...state, loading: false, userProfile: action.payload, error: null };
  
      case GET_USERPROFILE_FAILURE:
        return { ...state, loading: false, error: "Failed to fetch user profile" };
  
      default:
        return state;
    }
  };
  
  export default userReducer;