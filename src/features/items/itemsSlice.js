import { createSlice } from "@reduxjs/toolkit";

// let nextItemID = 0;

const initialState = {
  list: [
  {id: 1, name: 'aab', age: 18},
  {id: 2, name: 'abb', age: 78},
  {id: 3, name: 'bab', age: 98},
  {id: 4, name: 'bbb', age: 18},
  {id: 5, name: 'xxx', age: 48},
  {id: 6, name: 'ccb', age: 38},
  {id: 7, name: 'ddd', age: 18},
  {id: 8, name: 'abb', age: 78},
  {id: 9, name: 'bab', age: 98},
  {id: 10, name: 'bbb', age: 18},
  {id: 11, name: 'cab', age: 48},
  {id: 12, name: 'ccb', age: 38},
  {id: 13, name: 'cbb', age: 28}, 
  {id: 14, name: 'ddd', age: 28},
  ],
  sortDir: '',
  sortCol: 'age',
  secSortCol: '',
  searchTerms: ['aa','bb']//array of strings
}


const itemsSlice = createSlice({
  name: "itemsSlice",
  initialState,
  reducers: {
    clickReducer(state, action){
      const { sortDir } = action.payload
      console.log(sortDir)
      return state={...state, sortDir: sortDir}
      // else if(sortDir==='desc')return state.sortDir=sortDir
      
    },
  },
}
);

export const { clickReducer } = itemsSlice.actions;

export default itemsSlice.reducer;
