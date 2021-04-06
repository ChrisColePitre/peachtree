import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app"
import { configureStore } from "@reduxjs/toolkit"
import {Provider} from "react-redux"
import rootReducer from "./reducers"
import * as S from "./components/styling"
// import * as serviceWorker from "./serviceWorker";

const store = configureStore({ reducer: rootReducer })


ReactDOM.render(
  <S.App>
    <React.StrictMode>
      <Provider store = {store}>
          <S.Logo>My React Examples</S.Logo>
          <App />
      </Provider>
      </React.StrictMode>
  </S.App>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//NOTE, COPY IN FILE IF NEED THIS TO RUN
// serviceWorker.unregister();
