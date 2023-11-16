import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Screening1 from "./pages/Screening1";
import Screening2 from "./pages/Screening2";
import Screening3 from "./pages/Screening3";

const App=()=> {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/sc1' element={<Screening1/>}></Route>
          <Route path='/sc2' element={<Screening2/>}></Route>
          <Route path='/sc3' element={<Screening3/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
