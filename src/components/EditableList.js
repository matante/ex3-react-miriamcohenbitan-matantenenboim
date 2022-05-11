import * as React from 'react';

function EditableList(props) {


    return (<>
        <div className="card">
            <div className='container-fluid'>
                <ol>
                    {props.list.map(location => (<li key={location.getName()}>
                        <div className="row">
                            <div className="col-xl-10 col-sm-10">
                                name: {location.getName()}
                            </div>
                            <div className="col-3">
                                latitude: {location.getLatitude()}
                            </div>
                            <div className="col-3">
                                longitude: {location.getLongitude()}
                            </div>


                            <div className="col-xl-3 col-sm-10">
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