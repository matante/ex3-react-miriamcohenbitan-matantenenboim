import * as React from 'react';
import App from "../App";
import {Link, Route} from "react-router-dom";


function Menu() {
    return (
        <>
<br/>
            <nav>
                <div className="row">
                    <div className="col-6 d-flex justify-content-end">


                        <Link to="/locations" className="btn btn-outline-primary" >Locations</Link>

                    </div>
                    <div className="col-6">

                        <Link to="/" className="btn btn-outline-primary">Forecast</Link>
                    </div>

                </div>
            </nav>


        </>
    )

}


export default Menu;
