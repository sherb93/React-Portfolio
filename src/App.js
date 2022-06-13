import React, {useState} from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Page from './components/Page';


function App() {

  const [pages] = useState(
    [
      "About Me",
      "Projects",
      "Resume",
      "Contact Me"
    ]
  );

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (  
    <>
      <header>
        <Navbar
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        >
        </Navbar>
      </header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer/>
    </>
  )
}

export default App;
