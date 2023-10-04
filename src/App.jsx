import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PlanetForm from "./PlanetForm";
import PlanetPage from "./PlanetPage";
function App() {
  return (
    <div className="app">
      <nav>
        <a href="/">Home</a>
        <a href="/new-planet">Create</a>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/new-planet" element={<PlanetForm />}></Route>
        <Route path="/planet/:id" element={<PlanetPage />}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
