import { combineReducers } from "redux";
import itemsReducer from "../features/items/slice";
import cardReducer from "../features/cards/slice";
// import photosReducer from "../features/photos/photosSlice";

export default combineReducers({
  // photos: photosReducer,
  items: itemsReducer,
  cards: cardReducer
});
