import { ADDED_APPLICATION, EDITED_SEARCH_BAR, EDITED_SUBTITLE, EDITED_TITLE, FETCHED_DETAILS, REMOVEED_APPLICATION, EDITED_APPLICATION } from "../actions/types";

const adminReducer = (state, action) => {
  switch (action.type) {
    case FETCHED_DETAILS:
      return action.payload;
    case ADDED_APPLICATION:
      return { ...state, applicationList: [...state.applicationList, action.payload] };
    case EDITED_APPLICATION:
      return { ...state, applicationList: state.applicationList.map((application, index) => (index == action.payload.index ? action.payload : application)) };
    case REMOVEED_APPLICATION:
      return {
        ...state,
        applicationList: state.applicationList.filter(({ link, text, icon }) => !(link == action.payload.link && text == action.payload.text && icon == action.payload.icon)),
      };
    case EDITED_TITLE:
      return { ...state, pageTitle: action.payload };
    case EDITED_SUBTITLE:
      return { ...state, pageSubTitle: action.payload };
    case EDITED_SEARCH_BAR:
      return { ...state, searchBar: action.payload };
    default:
      return state;
  }
};
export default adminReducer;
