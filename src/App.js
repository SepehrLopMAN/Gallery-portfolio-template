import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NavMenu from "./components/header/navMenu/navMenu";
import HomeComponent from "./components/main/home/home";
import AboutComponent from "./components/main/about/about";
import BackgroundComponent from "./components/main/background/background";
import GalleryComponent from "./components/main/gallery/gallery";
import CommissionsComponent from "./components/main/commissions/commissions";

function App() {
  return (
    <React.Fragment>
      <header className="navbar">
        <NavMenu></NavMenu>
      </header>
      <main className="main-container">
        <Routes>
          <Route path="/home" element={<HomeComponent />}></Route>
          <Route path="/about" element={<AboutComponent />}></Route>
          <Route path="/background" element={<BackgroundComponent />}></Route>
          <Route path="/gallery" element={<GalleryComponent />}></Route>
          <Route path="/commissions" element={<CommissionsComponent />}></Route>
          <Route path="*" element={<Navigate to="/home" />}></Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
