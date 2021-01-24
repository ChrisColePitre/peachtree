import { combineReducers } from "redux";
import itemsReducer from "../../../peachtreegallery/src/features/items/slice";
// import photosReducer from "../features/photos/photosSlice";

export default combineReducers({
  // photos: photosReducer,
  items: itemsReducer
});
