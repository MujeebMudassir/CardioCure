import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Vivek from "./components/Vivek";
import Ahmed from "./components/Ahmed";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Hero></Hero>}></Route>
        <Route path="/vivek" element={<Vivek></Vivek>}></Route>
        <Route path="/ahmed" element={<Ahmed></Ahmed>} />
      </Routes>
      <Footer></Footer>
      <Copyright></Copyright>
    </>
  );
}

export default App;
