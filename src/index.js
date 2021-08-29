import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";
import { ProvideAuth } from "./utils/use-auth";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProvideAuth>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </ProvideAuth>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
