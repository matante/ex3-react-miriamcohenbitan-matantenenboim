import * as React from 'react';
import ReactDOM from "react-dom/client";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState, useEffect} from 'react';
import SiteTitle from "./components/SiteTitle";
import Menu from "./components/Menu";
import Forecast from "./components/Forecast";
import Locations from "./components/Locations";
import NoPage from "./components/NoPage";


export default function App() {
    const [locationsList, setLocationsList] = useState([]);


    return (
        <div>
            <SiteTitle/>
            <BrowserRouter>
                <Menu/>
                <hr/>
                <Routes>
                    <Route path="/"
                           element={<Forecast locationsList={locationsList}/>}/>
                    <Route path="locations"
                           element={<Locations locationsList={locationsList} setLocationsList={setLocationsList}/>}/>
                    <Route path="*" element={<NoPage/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    );
}