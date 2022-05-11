import * as React from 'react';
import Constants from "../Constants";

/**
 * Simple component to display a title with pictures
 * @returns {JSX.Element}
 * @constructor
 */
function SiteTitle() {
    return (
        <>
            <br/>
            <div className='row'>
                <div className='col-4 d-flex justify-content-end'>
                    <img src={Constants.paths.cloud} alt={''}/>
                </div>
                <div className='col-4 d-flex justify-content-center'>
                    <h1>Weather Forecast</h1>
                </div>
                <div className='col-4 d-flex justify-content-start'>
                    <img src={Constants.paths.storm} alt={''}/>
                </div>
            </div>
        </>
    )
}


export default SiteTitle;
