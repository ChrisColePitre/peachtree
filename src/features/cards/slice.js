import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const cardSlice = createSlice({
    name: "cardSlice",
    initialState: { data: []} ,
    reducers: {
        getData: {
                // reducer(state,action){
                // //  const data = action.payload;
                // //  console.log(data)
                //   console.log(action.payload)
                //   return state = {...state, data: action.payload}
                // },
                async prepare(text){
                    const result = await axios.get("https://jsonplaceholder.typicode.com/posts")
                    console.log("FULL RESULT:  " + result)
                    console.log("DATA TYPE OF TARGET PAYLOAD: " + result.data.type)
                    if(!result){
                    return {payload: null }
                    } else {
                    let data = [];
                    data = [...result.data]
                    console.log(data)
                    return  { payload: {text: text, data: data}}
                    }
                },
                reducer(state, action){
                    const data = action.payload; 
                    console.log(data)
                    return state = {...state, data: data} 

                    }
        }
    }   
})

export const { getData } = cardSlice.actions;

export default cardSlice.reducer;