import React from "react";
import Pay from "./Pay.js";
import Success from './Success.js'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pay" element={<Pay/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </BrowserRouter>
  );
}