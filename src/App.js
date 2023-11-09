import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react';
import Start from './components/Start';
import Test from './components/Test';
import Result from './components/Result';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/Start" element={<Start />}/>
        <Route path="/Test" element={<Test />}/>
        <Route path="/Result" element={<Result />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
