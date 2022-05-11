import * as React from 'react';
import App from "../App";
import {Link, Route} from "react-router-dom";


function SiteTitle() {
    return (
        <>
            <br/>
            <div className='row'>
                <div className='col-4 d-flex justify-content-end'>
                    <img src={"cloud.png"} alt={''}/>
                </div>
                <div className='col-4 d-flex justify-content-center'><h1>ex3 - Forecast</h1></div>
                <div className='col-4 d-flex justify-content-start'><img src={"storm.png"} alt={''}/></div>
            </div>


        </>
    )

}


export default SiteTitle;
