import React from "react";
import { store } from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Router } from "./Router";
import "./App.scss";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { Footer } from "./components/Footer/Footer";

export const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HeaderContainer />
        <main>
          <Router />
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};
