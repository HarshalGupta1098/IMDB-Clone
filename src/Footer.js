import { Copyright } from '@material-ui/icons'
import React from 'react'
import './Footer.css'

function Footer() {
    const footerString = "Copyright 2021 - By Harshal Gupta - Developed using ReactJS, NodeJS, Express and Firebase"
    return (
        <div className="footer">
            <Copyright id="copyright" />
            {footerString}
        </div>
    )
}

export default Footer
