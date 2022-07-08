import React from 'react';
import { AiOutlinePhone } from 'react-icons/ai'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import './contact.css';

function Contact() {
    return (
        <section id="contact">
            <h2>CONTACT</h2>

            <div className="container contact__container">

                <article className="contact__option">
                    <AiOutlinePhone />
                    <h4>Phone</h4>
                    <h5>706-340-2125</h5>
                    <a href="tel:706-340-2125" target="_blank" rel="noreferrer">Call</a>
                </article>
                
                <article className="contact__option">
                    <MdOutlineEmail />
                    <h4>Email</h4>
                    <h5>rslocumbe93@gmail.com</h5>
                    <a href="mailto:rslocumbe93@gmail.com" target="_blank" rel="noreferrer">Send an email</a>
                </article>

                <article className="contact__option">
                    <BsLinkedin />
                    <h4>LinkedIn</h4>
                    <h5>Robert Slocumbe</h5>
                    <a href="https://www.linkedin.com/in/robert-slocumbe-111b5314b/" target="_blank" rel="noreferrer">View my profile</a>
                </article>

            </div>
        </section>
    );
}

export default Contact;