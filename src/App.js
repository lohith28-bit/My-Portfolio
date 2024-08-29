// import React, { useState, useEffect } from 'react';
import {
    Route,
    Routes,
} from "react-router-dom";
import './App.css';

/* Pages */
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Project from "./pages/Project/ProjectPage";

import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop"


function App() {
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true)
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 3000)
    // }, [])
    return (
        <>
            <RouterScrollTop />
            
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route exact path="/about" element={<About />}></Route>
                        <Route exact path="/project" element={<Project />}></Route>
                    </Routes>
        </>
    )
    // return (
    //     <>
    //         <RouterScrollTop />
    //         {
    //             loading ?

    //                 <div className='loading-pag'>
    //                     <div className="loader">
    //                     <span>Lohith V P ✨</span>
    //                         <span>Lohith V P ✨</span>
    //                     </div>
    //                 </div>

    //                 :

    //                 <Routes>
    //                     <Route path="/" element={<Home />}></Route>
    //                     <Route exact path="/about" element={<About />}></Route>
    //                     <Route exact path="/project" element={<Project />}></Route>
    //                 </Routes>

    //         }

    //     </>
    // )
}

export default App
