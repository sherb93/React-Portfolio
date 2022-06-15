import React from 'react';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

function Page({ currentPage }) {

    const renderPage = () => {
        switch (currentPage) {
            case "About Me":
                return <AboutMe />;
            case "Projects":
                return <Projects />;
            case "Resume":
                return <Resume />;
            case "Contact Me":
                return <Contact />;
            default:
                return <AboutMe />
        }
    }

    return (
        <section className="about-background">
            {renderPage()}
        </section>
    );
}

export default Page;