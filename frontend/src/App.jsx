import { 
   BrowserRouter,
   Routes, 
   Route ,
  } from "react-router-dom";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Inspector } from "./pages/Inspector";
import { University } from "./pages/University";
import Home from "./pages/Home";
import Insights from "./pages/Insights";
import Inshome from "./pages/Inshome";
import Report from "./pages/Report";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/inspector" element={<Inspector />} />
          <Route path="/university" element={<University />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/inshome" element={<Inshome />} />
          <Route path="/inshome" element={<Inshome />} />
          <Route path="/report" element={<Report />} />
          Optional: Handle undefined routes
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </BrowserRouter> */}
        <Navbar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default App;
// import React from 'react'
// import Navbar from './components/Navbar';
// function App() {
//   return (
//     <div>
//         <Navbar/>
//     </div>
//   )
// }

// export default App;
