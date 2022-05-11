import * as React from 'react';
import Constants from "../Constants";

/**
 * if the url is not valid, show this page.
 * @returns {JSX.Element}
 * @constructor
 */
export default function NoPage() {

    return (
            <h1>{Constants.messages.invalidURL}</h1>
    );
}
