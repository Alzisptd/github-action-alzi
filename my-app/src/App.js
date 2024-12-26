import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./quiz3-navbar/navbar"
import Home from "./quiz3-home/home"
import ManageData from "./quiz3-managedata/managedata";
// import Tugas6 from './tugas6/tugas6'
// import Tugas7 from './tugas7/tugas7'
// import Tugas8 from './tugas8/tugas8'
// import Tugas9 from './tugas9/tugas9'
// import Tugas10 from './tugas10/tugas10'
// import Tugas11 from './tugas11/tugas11'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/manage-data' element={<ManageData />}></Route>
      {/* <Route path='/tugas6' element={<Tugas6 />}></Route>
      <Route path='/tugas7' element={<Tugas7 />}></Route>
      <Route path='/tugas8' element={<Tugas8 />}></Route>
      <Route path='/tugas9' element={<Tugas9 />}></Route>
      <Route path='/tugas10' element={<Tugas10 />}></Route>
      <Route path='/tugas11' element={<Tugas11 />}></Route> */}
    </Routes>
    </BrowserRouter>
    </>
  )
  }

export default App
