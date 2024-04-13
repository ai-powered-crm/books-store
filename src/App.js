import React from "react";
import Sidenav from "./app/sidenav";
import Home from "./app/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sotre from "./app/pages/store";
import Books from "./app/pages/books";


function App() {
  return (
    <BrowserRouter>
      <Sidenav />
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Store" element={< Sotre />} />
        <Route path="/Books" element={< Books />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
