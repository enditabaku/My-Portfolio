import './App.css';
import sign from './images/sign.png';
import door from './images/dooricon.png';
import linkedin from './images/linkedinicondraw.png';
import github from './images/githubicondraw.png';
import codepen from './images/codepenicondraw.png';
import darkwaves1 from './images/darkwaves1.jpg';
import darkwaves2 from './images/darkwaves2.jpg';
import darkwaves3 from './images/darkwaves3.jpg';

function App() {
  return (
    <div className="App">

      {/* Welcome Section & Side bar Menu */}
      <header className="App-header">
        <div className="Three-columns-grid">
          <div className="Side-bar-menu">
            <div className="Menu-items">
              <img src={sign} className="App-sign" />
              <div className='Menu-links-columns'>
                <ul className='Menu-list'>
                  <li className='Menu-link'>
                      <a className='Menu-text' href="#About-Section">about</a>
                  </li>
                  <li className='Menu-link'>
                      <a className='Menu-text' href="#">skills</a>
                  </li>
                  <li className='Menu-link'>
                      <a className='Menu-text' href="#">projects</a>
                  </li>
                  <li className='Menu-link'>
                      <a className='Menu-text' href="#">contact</a>
                  </li>
                </ul>
                <ul className='Menu-list'>
                  <li className='Menu-link' style={{marginRight:"8em"}}>
                    <a href="https://www.linkedin.com/in/endi-tabaku-93282019a/" target="_blank">
                      <img src={linkedin} className="Social-links" />
                    </a>
                  </li>
                  <li className='Menu-link'>
                  <a href="https://github.com/enditabaku" target="_blank"> 
                    <img src={github} className="Social-links" />
                  </a>
                  </li>
                  <li className='Menu-link'>
                  <a href="https://codepen.io/enditabaku" target="_blank">
                     <img src={codepen} className="Social-links" />
                  </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className='Leave-development-div'>
              <img src={door} className="App-door" /> <br/>
              <span className='Leave-devclub-text'>enter to the nondevelopment club</span>
            </div> */}
          </div>
          <div className='Main-column'>
            <p>
              <span className='Welcome-text'>welcome</span>
              <br/>
              <span className='Sub-title'>to my development club</span>
              <br/><br/><br/><br/><br/><br/><br/>
            </p>
            {/* <p className='Info-text'>
              <span className='Choose-from-menu'>--------   </span>
              <span className='Choose-from-menu'>  choose from the menu to explore</span>
            </p> */}
          </div>
          <div className="Image-background-column"></div>
        </div>
      </header>

      {/* About Section */}

      {/* Work Experience Pragmatic Software */}
      <header className="About-header" id='About-Section'>
          <div className="Two-columns-grid">
            <div className="Side-bar">
                <span className='Left-text'>(since Dec 2020)</span>
            </div>
            <div className='About-column'>
                <p>
                  <span className='Sub-title'>-i am endi tabaku</span>
                  <br/><br/>
                  <p className='Sub-text'>
                    <span>currently working as a full time </span>
                    <span className='Underline-FrontEnd-Text'>front-end developer</span>
                    <span className='Pragmatic-Software'> at pragmatic software</span>
                    <br/>
                    <span className='Dots'>. . . . . . . . .</span>
                    <br/>
                    <span className='Pragmatic-Software'>also</span>
                    <br/>
                    <span>❧ front end development internship : 2 months</span>
                    <br/>
                    <span className='Right-text'>❧ c# & .net programming internship : 6 months</span>
                  </p>
                </p>
              </div>
          </div>
          <div className="Photos-background-row">
            <img src={darkwaves1} className="Three-photo" />
            <img src={darkwaves2} className="Three-photo" />
            <img src={darkwaves3} className="Three-photo" />
          </div>
      </header>

      {/* Education Informations */}  
      <header className="App-header">
        <div className="Three-columns-grid">
          <div className="Side-bar-menu">
            <div className="Menu-items">
              <img src={sign} className="App-sign" />
              <div className='Menu-links-columns'>
                <ul className='Menu-list'>
                  <li className='Menu-link'>
                      <a className='Menu-text' href="#About-Section">about</a>
                  </li>
                  <li className='Menu-link'>
                      <a className='Menu-text' href="#">skills</a>
                  </li>
                  <li className='Menu-link'>
                      <a className='Menu-text' href="#">projects</a>
                  </li>
                  <li className='Menu-link'>
                      <a className='Menu-text' href="#">contact</a>
                  </li>
                </ul>
                <ul className='Menu-list'>
                  <li className='Menu-link' style={{marginRight:"8em"}}>
                    <a href="https://www.linkedin.com/in/endi-tabaku-93282019a/" target="_blank">
                      <img src={linkedin} className="Social-links" />
                    </a>
                  </li>
                  <li className='Menu-link'>
                  <a href="https://github.com/enditabaku" target="_blank"> 
                    <img src={github} className="Social-links" />
                  </a>
                  </li>
                  <li className='Menu-link'>
                  <a href="https://codepen.io/enditabaku" target="_blank">
                     <img src={codepen} className="Social-links" />
                  </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className='Leave-development-div'>
              <img src={door} className="App-door" /> <br/>
              <span className='Leave-devclub-text'>enter to the nondevelopment club</span>
            </div> */}
          </div>
          <div className='Main-column'>
            <p>
              <span className='Welcome-text'>welcome</span>
              <br/>
              <span className='Sub-title'>to my development club</span>
              <br/><br/><br/><br/><br/><br/><br/>
            </p>
            {/* <p className='Info-text'>
              <span className='Choose-from-menu'>--------   </span>
              <span className='Choose-from-menu'>  choose from the menu to explore</span>
            </p> */}
          </div>
          <div className="Image-background-column"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
