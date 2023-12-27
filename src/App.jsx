import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Daftar from "./components/Daftar";
import Masuk from "./components/Masuk";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/daftar" element={<Daftar />}></Route>
          <Route path="/masuk" element={<Masuk />}></Route>
          <Route path="/" element={<Dashboard />}>
            <Route path="" element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
