import React from 'react';

function Navbar({ pages, currentPage, setCurrentPage }) {
    return (
        <>
            <nav className="nav">
                <div id="nav-container">
                    <h3 onClick={() => setCurrentPage("About Me")}>ROBERT SLOCUMBE</h3>
                    <ul id="nav-list">
                        <li className="nav-item" onClick={() => setCurrentPage("About Me")}>ABOUT ME</li>
                        <li className="nav-item" onClick={() => setCurrentPage("Projects")}>PORTFOLIO</li>
                        <li className="nav-item" onClick={() => setCurrentPage("Resume")}>RESUME</li>
                        <li className="nav-item" onClick={() => setCurrentPage("Contact")}>CONTACT ME</li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;