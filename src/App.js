import * as React from 'react';
import ReactDOM from "react-dom/client";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState, useEffect } from 'react';

import Menu from "./components/Menu";
import Forecast from "./components/Forecast";
import Locations from "./components/Locations";
import NoPage from "./components/NoPage";



export default function App() {
    const [isHomePage, setIsHome] = useState(false);

    useEffect(() => {
        setIsHome(true);
    }); // trigger the effect when url changes


    return (
        <div>
            <BrowserRouter>
                <Menu/>

                <Routes>
                    <Route path="/" element={<Forecast/>}/>
                    <Route path="locations" element={<Locations/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

