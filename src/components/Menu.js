import * as React from 'react';
import App from "../App";
import {Link, Route} from "react-router-dom";
import Locations from "./Locations";
import Forecast from "./Forecast";

function Menu() {
    console.log("Hello from Menu");
    return (
        <>

            <nav>
                <ul>
                    <li>
                        <Link to="/locations">Locations</Link>
                    </li>
                    <li>
                        <Link to="/">Forecast</Link>
                    </li>
                </ul>
            </nav>


        </>
    )

    // return (
    //     <h1>Menu</h1>
    // );
}


export default Menu;
