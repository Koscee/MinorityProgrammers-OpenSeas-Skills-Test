import React from "react";
import { Routes, Route } from "react-router-dom";
import CollectibleInfoPage from "../pages/CollectibleInfoPage";
import CollectiblesListPage from "../pages/CollectiblesListPage";
import HomePage from "../pages/HomePage";
import Header from "./Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="collection/:slug" element={<CollectiblesListPage />} />
        <Route
          path="collectible/:assetAddress/:tokenId"
          element={<CollectibleInfoPage />}
        />
        <Route
          path="*"
          element={
            <main
              style={{ width: "300px", margin: "100px auto", fontSize: "3rem" }}
            >
              <h1> 404 :( </h1>
            </main>
          }
        />
      </Routes>
    </>
  );
};

export default App;
