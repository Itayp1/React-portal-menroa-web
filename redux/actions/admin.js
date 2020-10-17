import { ADDED_APPLICATION, EDITED_SEARCH_BAR, EDITED_SUBTITLE, EDITED_TITLE, FETCHED_DETAILS, REMOVEED_APPLICATION, EDITED_APPLICATION } from "./types";

export const setFetchDetails = (details) => (dispatch) => {
  dispatch({ type: FETCHED_DETAILS, payload: details });
};

export const editTitle = (titleDetails) => (dispatch) => {
  dispatch({ type: EDITED_TITLE, payload: titleDetails });
};
export const editSubTitle = (subTitleDetails) => (dispatch) => {
  dispatch({ type: EDITED_SUBTITLE, payload: subTitleDetails });
};

export const editSearchBar = (searchBarDetails) => (dispatch) => {
  dispatch({ type: EDITED_SEARCH_BAR, payload: searchBarDetails });
};

export const addApplication = (application) => (dispatch) => {
  dispatch({ type: ADDED_APPLICATION, payload: application });
};

export const removeApplication = (link) => (dispatch) => {
  dispatch({ type: REMOVEED_APPLICATION, payload: link });
};

export const editApplication = (application) => (dispatch) => {
  dispatch({ type: EDITED_APPLICATION, payload: text });
};
