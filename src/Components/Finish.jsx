import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'


export default function Finish(props) {
    return (
        <div className="finish">
            <FontAwesomeIcon icon={props.icon === "faCheckCircle" ? faCheckCircle : faTimesCircle} className={props.class} />
        </div>
    )
}
