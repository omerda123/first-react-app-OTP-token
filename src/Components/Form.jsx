import React from 'react'
import Spinner from './spinner'

export default function Form(props) {
    return (
        <div className="form">
            <div className="inputs">
                <input type="text" maxLength="1"  onBlur={(e) => props.setUserPassword(e)}></input>
                <input type="text" maxLength="1" onBlur={(e) => props.setUserPassword(e)}></input>
                <input type="text" maxLength="1" onBlur={(e) => props.setUserPassword(e)}></input>
                <input type="text" maxLength="1" onBlur={(e) => {
                    props.setUserPassword(e);
                    }}></input>
            </div>
            <Spinner></Spinner>

        </div>

    )
}
