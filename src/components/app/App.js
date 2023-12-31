import React from "react";
import { Routes, Route } from "react-router-dom";

import "./../../scss/app.scss";

import { Header } from "../Header";
import { Cart } from "../../pages/Cart";
import { Home } from "../../pages/Home";
import { NotFound } from "../../pages/NotFound";

export const SearchContext = React.createContext("");

export const App = () => {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
};
