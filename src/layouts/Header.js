import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

function Header() {
    const setStyle = {
        textAlign: 'center',
        background: 'black',
        color: 'white',
        padding: '10px'
    }

    return (
        <div style={setStyle}>
            <h1>Ini Aplikasi Todo</h1>
            <p>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </p>
        </div>
    )
}

export default Header
