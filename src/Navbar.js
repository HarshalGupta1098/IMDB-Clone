import React from 'react'
import Popcorn from './assests/popcorn.png'
import './Navbar.css'
import { AccountCircleSharp } from '@material-ui/icons';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0BqPvfe7tNnck20G4VEDnwHaEj%26pid%3DApi&f=1" alt="logo" />
            </div>

            <div className="navbar__popcorn">
                <img src={Popcorn} alt="popcorn icon"/>
            </div>
            <p id="watchlist">Watchlist</p>
            <p style={{float: "right", position: "absolute", top: "40px", right: "150px", fontSize: "30px"}}>Hello user</p>
            <p style={{float: "right", position: "absolute", top: "40px", right: "10px", fontSize: "30px"}}>Log out</p>
        </div>
    )
}

export default Navbar
