import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  console.log("reducingggg");
  switch (action.type) {
    case FETCH_POSTS:
      console.log("paolaaaa" + action.payload);
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
