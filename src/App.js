import * as React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from 'react';
import SiteTitle from "./components/SiteTitle";
import Menu from "./components/Menu";
import Forecast from "./components/Forecast";
import Locations from "./components/Locations";
import NoPage from "./components/NoPage";

/**
 * This is the main app of this website. It contains all the other components
 * @returns {JSX.Element}
 * @constructor
 */
export default function App() {

    const [locationsList, setLocationsList] = useState([]); // this list contains instances of Location class

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