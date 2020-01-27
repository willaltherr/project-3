import React from 'react';
import './footer.css'

var style = {
    backgroundColor: "#151D2E",
    borderTop: "1px solid #151D2E",
    textAlign: "center",
    color: "#FBB92C",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100vw",
    fontFamily: "monospace",
    zIndex: 10,
}
function Footer({ children }) {
    return (
        <div className ="footer footer-fluid col s12">
            <div className="phantomFooter col s12 "style={style}>
                { children }
                <img className="footer-logo" src="/images/logo.jpg"></img>
            </div>
        </div>
    )
}

export default Footer;