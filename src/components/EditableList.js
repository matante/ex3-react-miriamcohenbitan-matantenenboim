import * as React from 'react';

/**
 *
 * @param props list - a list of Location class.
 * action - the action that will happen when pressing on the button
 * actionText - the text that will be shown on the button
 * buttonColor - as name describes
 * @returns {JSX.Element}
 * @constructor
 */
function EditableList(props) {

    // for each Location, add it properties to the list, and add a delete button.
    return (<>
        <div className="card">
            <div className='container-fluid'>
                <ol>
                    {props.list.map(location => (<li key={location.getName()}>
                        <div className="row">
                            <div className="col-3">
                                name: {location.getName()}
                            </div>
                            <div className="col-3">
                                latitude: {location.getLatitude()}
                            </div>
                            <div className="col-3">
                                longitude: {location.getLongitude()}
                            </div>

                            <div className="col-3 col-xs-12">
                                <button type="button" className={`btn btn-${props.buttonColor}`}
                                        onClick={() => props.action(location)}>
                                    {props.actionText}</button>
                            </div>
                            <br/>
                            <br/>
                        </div>
                    </li>))}
                </ol>
            </div>
        </div>

    </>);
}

export default EditableList;