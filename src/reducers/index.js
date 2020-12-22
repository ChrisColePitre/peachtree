import { combineReducers } from "redux";
import itemsReducer from "../features/items/itemsSlice";
// import photosReducer from "../features/photos/photosSlice";

export default combineReducers({
  // photos: photosReducer,
  items: itemsReducer
});
