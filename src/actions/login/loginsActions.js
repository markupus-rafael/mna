import {
    LOGINS_HAS_ERROR,
    LOGINS_SUCCES,
    USER_IS_LOADING,
} from "../types";

export function loginHasErrored(bool) {
  return {
    type: LOGINS_HAS_ERROR,
    payload: bool
  };
}

export function createUser(payload) {
    return {
        type: LOGINS_SUCCES,
        payload
    }
}

export function userIsLoading(bool) {
    return {
        type: USER_IS_LOADING,
        payload: bool
    };
}

export function login({ email, password }) {
    return dispatch => {
        dispatch(userIsLoading(true));

        setTimeout(()=>{
            const user = {
                email,
                password
            };
            dispatch(createUser(user))
        }, 200)
    }
}

// export function searchFilmsData(url) {
//   return dispatch => {
//     dispatch(userIsLoading(true));
//
//     fetch(url)
//       .then(async response => {
//         if (!response.ok) {
//           console.log(response.statusText);
//         }
//           const result = await response;
//           return result;
//       })
//       .then(response => response.json())
//       .then(items => {
//         dispatch(filmsFetchDataSuccess(items));
//         dispatch(filmsDetailsLoading(false));
//       })
//       .catch(() => {
//         dispatch(filmsHasErrored(true));
//       })
//         .finally(() => dispatch(filmsIsLoading(false)));
//   };
// }
