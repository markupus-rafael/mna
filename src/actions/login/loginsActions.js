import {
  LOGINS_HAS_ERROR,
} from "../types";

export function loginHasErrored(bool) {
  return {
    type: LOGINS_HAS_ERROR,
    payload: bool
  };
}

export function searchFilmsData(url) {
  return dispatch => {
    dispatch(filmsIsLoading(true));

    fetch(url)
      .then(async response => {
        if (!response.ok) {
          console.log(response.statusText);
        }
          const result = await response;
          return result;
      })
      .then(response => response.json())
      .then(items => {
        dispatch(filmsFetchDataSuccess(items));
        dispatch(filmsDetailsLoading(false));
      })
      .catch(() => {
        dispatch(filmsHasErrored(true));
        dispatch(filmsIsLoading(false));
      })
        .finally(() => dispatch(filmsIsLoading(false)));
  };
}

// TODO: REFACTOR FETCH FUNCTIONS
export function searchFilmsDetailsData(url) {
  return async dispatch => {
    dispatch(filmsDetailsLoading(true));

    fetch(url)
      .then(async response => {
        if (!response.ok) {
          console.log(response.statusText);
        }

        const result = await response;
        return result;
      })
      .then(response => response.json())
      .then(items => {
        dispatch(filmsDetailsFetchDataSuccess(items));
      })
      .catch(() => {
        dispatch(filmsHasErrored(true));
      })
      .finally(() => dispatch(filmsDetailsLoading(false)));
  };
}
