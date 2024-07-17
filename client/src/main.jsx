import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App.jsx";
import "./styles/index.css";
import { persistor, store } from "./store/index.js";
import { SocketContextProvider } from "./context/socketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
