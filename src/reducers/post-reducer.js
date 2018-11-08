import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions/index";
import _ from "lodash";
export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST:
      const newState = { ...state };
      newState[action.payload.data.id] = action.payload.data;
      return newState;
    // return { ...state, [action.payload.data.id]: action.payload.data };// similar to above code;

    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id"); // lodash method which converts arry of object to object of objects
    default:
      return state;
  }
}
