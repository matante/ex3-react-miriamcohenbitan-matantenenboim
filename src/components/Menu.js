import * as React from 'react';
import {Link} from "react-router-dom";

/**
 *
 * A simple component to display a menu with links
 * @returns {JSX.Element}
 * @constructor
 */
function Menu() {
    return (
        <>
            <nav>
                <div className="row">
                    <div className="col-6 d-flex justify-content-end">
                        <Link to="/locations" className="btn btn-outline-primary">Locations</Link>
                    </div>
                    <div className="col-6">
                        <Link to="/" className="btn btn-outline-primary">Forecast</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}


export default Menu;
