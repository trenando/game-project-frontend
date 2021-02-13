import React from "react";
import { store } from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Router } from "./Router";
import "./App.scss";
import { HeaderContainer } from "./pages/Header/HeaderContainer";
import { Footer } from "./pages/Footer/Footer";

export const App: React.FC<object> = () => {
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
