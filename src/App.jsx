import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import PlanetForm from "./PlanetForm";
import PlanetPage from "./PlanetPage";
import SignUp from "./SignUp";
import { useState } from "react";
import Error from "./Error";

function App() {
  return (
    <div className="app">
      <nav>
        <a href="/">Home</a>
        <a href="/new-planet">Create</a>
        <a href="/enroll">Enroll</a>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/new-planet" element={<PlanetForm />}></Route>
          <Route path="/planet/:id" element={<PlanetPage />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="/enroll" element={<SignUp />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
