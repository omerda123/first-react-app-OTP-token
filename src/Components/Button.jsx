import React from 'react'

export default function Button(props) {
    return (
        <div >
           <button className={props.class} onClick={props.click}>{props.value}</button>
        </div>
    )
}
