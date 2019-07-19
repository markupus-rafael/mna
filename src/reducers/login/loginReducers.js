import {
  LOGINS_HAS_ERROR,
} from "../../actions/types";

const initialState = {
  username: '',
  password: '',
  isLoading: false,
  hasError: false
};

export function logins(state = initialState, action) {
  switch (action.type) {
    case LOGINS_HAS_ERROR:
      return { ...state, hasError: action.payload };

    default:
      return state;
  }
}
