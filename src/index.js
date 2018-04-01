import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

//Dev container/ store/ ect... imports
import "materialize-css/dist/css/materialize.min.css";
import App from "./containers/App";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
