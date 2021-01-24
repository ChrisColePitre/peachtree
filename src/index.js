import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app"
import { configureStore } from "@reduxjs/toolkit"
import {Provider} from "react-redux"
import rootReducer from "./reducers"
// import * as serviceWorker from "./serviceWorker";

const store = configureStore({ reducer: rootReducer })


ReactDOM.render(
  <React.StrictMode>
   <Provider store = {store}>
      <h1>HIYA</h1>
      <App />
   </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//NOTE, COPY IN FILE IF NEED THIS TO RUN
// serviceWorker.unregister();
