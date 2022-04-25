import Form from "./components/Form"

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Outlet, Link, BrowserRouter, Routes, Route} from 'react-router-dom';
import Location from './routes/location';


// import {useState} from "react";

function App() {
    return (
        <BrowserRouter>
            <h4>Miriam Cohen Bitan and Matan Tenenboim ex3</h4>

            <Routes>


                <Route path="location" element={<Location/>}/>

                <Route
                    path="*"
                    element={
                        <main style={{padding: '1rem'}}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />

            </Routes>
        </BrowserRouter>
        // <div className="App">
        //     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        //         <div className="container-fluid">
        //             <div className="collapse navbar-collapse" id="navbarNav">
        //                 <ul className="navbar-nav">
        //                     <li className="nav-item">
        //                         <a className="nav-link active" aria-current="page" href="#">Forecast</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link to="/location">Location</Link>
        //                         {/*<a className="nav-link" href="#">Locations</a>*/}
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        //     <Outlet/>
        //
        //     {/*<Form url={"http://localhost:8080/"}/>*/}
        //
        //
        // </div>
    );
}


export default App;
