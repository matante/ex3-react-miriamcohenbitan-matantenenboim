import Form from "./components/Form"

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Outlet, Link, BrowserRouter, Routes, Route} from 'react-router-dom';
import Locations from './components/Locations';
import Layout from './components/Layout';
import Forecast from './components/Forecast';
import NoPage from './components/NoPage';


// import {useState} from "react";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Locations />} />
                    <Route path="/forecast" element={< Forecast />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>


    );
}


export default App;
