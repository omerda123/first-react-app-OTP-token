import React from 'react'
import Button from './Button'

export default function Banner(props) {
    return (
        <div className="banner">
            {props.text}<Button value="Resend" class="small"></Button>
        </div>
    )
}
