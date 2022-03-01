import React from 'react'
import worldIcon from '../images/world-icon.svg'

export default function Navbar(){
    return (
        <nav>
            <img className="nav--world-icon" src={worldIcon} />
            <h1 className="nav--title">my travel journal.</h1>
        </nav>
    )
}
