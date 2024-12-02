
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Challenge from "./pages/Challenge";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bot from "./pages/Bot";
import "./1200-1440.css"

function App() {



  return (
    <div className="App">
        <Header/>
        <Routes>
            {/* <Route path="/challenge" index element={<MainPage/>}/>
            <Route path="/bot" element={<Bot/>}/>
            */}
            <Route path="/" index element={<Challenge/>}/>
        </Routes>
        {/*<Footer/>*/}
        <div className = "footer_new_n">
            <hr/>
            <div className = "footer_new">

                Copyright © Hitrading 2024
            </div>
        </div>

    </div>
  );
}

export default App;
