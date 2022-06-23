import React, {useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlinePhone } from 'react-icons/ai';
import { BiBrain } from 'react-icons/bi';
import { BsBriefcase } from 'react-icons/bs';

import './nav.css';

function Nav() {

    const [activeTab, setActiveTab] = useState('#home')

    return (
        <nav>
            <a href="#home"
                className={activeTab === "#home" ? "active" : ""}
                onClick={() => setActiveTab("#home")}
            >
                <AiOutlineHome />
            </a>
            <a href="#about"
                className={activeTab === "#about" ? "active" : ""}
                onClick={() => setActiveTab("#about")}
            >
                <AiOutlineUser />
            </a>
            <a href="#experience"
                className={activeTab === "#experience" ? "active" : ""}
                onClick={() => setActiveTab("#experience")}
            >
                <BiBrain />
            </a>
            <a href="#portfolio"
                className={activeTab === "#portfolio" ? "active" : ""}
                onClick={() => setActiveTab("#portfolio")}
            >
                <BsBriefcase />
            </a>
            <a href="#contact"
                className={activeTab === "#contact" ? "active" : ""}
                onClick={() => setActiveTab("#contact")}
            >
                <AiOutlinePhone />
            </a>
        </nav>
    );
}

export default Nav;