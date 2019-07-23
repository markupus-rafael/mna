import {
    LOGINS_HAS_ERROR, LOGINS_SUCCES,
} from "../../actions/types";

const initialState = {
    email: '',
  password: '',
    token: '',
  isLoading: false,
  hasError: false
};

export function logins(state = initialState, action) {

  switch (action.type) {
    case LOGINS_HAS_ERROR:
      return { ...state, hasError: action.payload };

      case LOGINS_SUCCES:

          const {
              email,
              password,
              token
          } = action.payload;

          return {
              ...state,
              email,
              password,
              token
          };
    default:
      return state;
  }
}
