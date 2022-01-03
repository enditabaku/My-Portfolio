import './App.css';
import sign from './images/sign.png';
import door from './images/dooricon.png';
import linkedin from './images/linkedinicondraw.png';
import github from './images/githubicondraw.png';
import codepen from './images/codepenicondraw.png';
import darkwaves1 from './images/darkwaves1.jpg';
import darkwaves2 from './images/darkwaves2.jpg';
import darkwaves3 from './images/darkwaves3.jpg';
import boatwaves1 from './images/w1.jpg';
import boatwaves2 from './images/w2.jpg';
import boatwaves3 from './images/w3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
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
                      <a className='Menu-text' href="#Skills-Section">skills</a>
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
            <p className='Info-text'>
              <span className='Choose-from-menu'>--------   </span>
              <span className='Choose-from-menu'>  choose from the menu to explore</span>
            </p>
          </div>
          <div className="Image-background-column"></div>
        </div>
      </header>

      {/* About Section */}
      {/**************** */}
      {/* Work Experience Pragmatic Software */}
      <header className="About-header" id='About-Section'>
          <div className="Two-columns-grid" data-aos="fade-up" data-aos-duration="3000">
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
      <header className="Education-header">
      <div className="Two-columns-grid">
            <div className="Side-bar"></div>
            <div className='About-column' data-aos="fade-right" data-aos-duration="2000">
                <p>
                  <span className='Right-text Education'>- - - - education</span>
                </p>
            </div>
       </div>
       <div className='Education-rows'>
         <div className='Bachelor-Row'>
           <div className='Two-columns'>
              <div className="Side-image" data-aos="fade-right" data-aos-duration="2000">
                <img src={boatwaves1} className="Round-back-photo" />
              </div>            
              <div className='Education-info' data-aos="fade-right" data-aos-duration="2000">
                  <br/>
                  <span className='Large-title'>bachelor diploma in <span className='Green-text'>business informatics</span></span>
                  <br/>
                  <span className='Medium-title'>economics faculty, university of tirana</span>
                  <br/><br/><br/><br/><br/>
                  <span className='Large-title-date'>10/2018 – 07/2021</span>
              </div>
           </div>

           <div className='Two-columns-equal'>
              <div className='Half-page-col'>
                  <div className='Two-columns-40-60'>
                    <div className="Side-image" data-aos="fade-right" data-aos-duration="2000">
                      <img src={boatwaves2} className="Round-back-photo-ml8" />
                    </div>            
                    <div className='Education-info' data-aos="fade-right" data-aos-duration="2000">
                        <br/>
                        <span className='Medium-title'>high school diploma</span>
                        <br/>
                        <span className='Medium-title'>‘arben broci’ high school</span>
                        <br/><br/><br/><br/><br/>
                        <span className='Large-title-date-white'>09/2015 – 07/2018</span>
                    </div>
                 </div>
              </div>
              <div className='Half-page-col'>
                  <div className='Two-columns-40-60'>
                    <div className="Side-image" data-aos="fade-right" data-aos-duration="2000">
                      <img src={boatwaves3} className="Round-back-photo-mt3" />
                    </div>            
                    <div className='Education-info-mt3' data-aos="fade-right" data-aos-duration="2000">
                        <br/>
                        <span className='Medium-title'>primary school diploma</span>
                        <br/>
                        <span className='Medium-title'>‘1 qershori’ primary school</span>
                        <br/><br/><br/><br/><br/>
                        <span className='Large-title-date-white'>09/2006 – 06/2015</span>
                    </div>
                 </div>
              </div>
           </div>


           
           
         </div>
       </div>
      </header>

      {/* Skills Section */}
      {/**************** */}
      {/* Languages */}
       <header className="Skills-header" id='Skills-Section'>
       <div className="Two-columns-grid">
            <div className="Side-bar"></div>
            <div className='Skills-column' data-aos="fade-right" data-aos-duration="2000">
                <p>
                  <span className='Center-text Skills'>- - - - skills - - - -</span>
                </p>
            </div>
       </div>
        <div className="Three-columns-grid">
            <div className="Side-empty"></div>
            <div className='Main-column-skills'>
              <div className="Languages-Div">
                 <span className='Center-text Skills-text'>languages</span>
                 <br/>
                 <span className='Medium-title Skills-text'>mother tongue(s): albanian language</span>
                 <br/>
              </div>
              <br/> <br/>
              <span className='Small-text'>levels: A1/2: basic user - B1/2: independent user - C1/2 proficient user</span>
            </div>
            <div className="Image-background-column-skills" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"></div>
         </div>
         <br/>
         <div className="Three-columns-grid">
            <div className="One-Equal-Column">
                <span className='red-text'> english</span>
                <p className='language-grades'>
                  <span>understanding</span>
                  <ul className='language-ul'>
                    <li>listening  C1</li>
                    <li>reading  C1</li>
                  </ul>
                  <br/>
                  <span>speaking</span>
                  <ul className='language-ul'>
                    <li>spoken interaction  B2</li>
                    <li>spoken productin  B2</li>
                  </ul>
                  <br/>
                  <span>writing  B1</span>
                </p>
            </div>
            <div className="One-Equal-Column">
              <span className='red-text'> french</span>
              <p className='language-grades'>
                    <span>understanding</span>
                    <ul className='language-ul'>
                      <li>listening  A1</li>
                      <li>reading  A1</li>
                    </ul>
                    <br/>
                    <span>speaking</span>
                    <ul className='language-ul'>
                      <li>spoken interaction  A1</li>
                      <li>spoken productin  A1</li>
                    </ul>
                    <br/>
                    <span>writing  A1</span>
               </p>
            </div>
            <div className="One-Equal-Column">
              <span className='red-text'> italian</span>
               <p className='language-grades'>
                      <span>understanding</span>
                      <ul className='language-ul'>
                        <li>listening  A1</li>
                        <li>reading  A1</li>
                      </ul>
                      <br/>
                      <span>speaking</span>
                      <ul className='language-ul'>
                        <li>spoken interaction  A1</li>
                        <li>spoken productin  A1</li>
                      </ul>
                      <br/>
                      <span>writing  A1</span>
               </p>
            </div>
         </div>
       </header>
      {/* Computer Skills */}
      <header className="Skills-header Computer">
          <div className="Three-columns-grid mt-3">
              <div className="Side-empty"></div>
              <div className='Main-column-skills'>
                <div className="Computer-Div">
                  <span className='Center-text Skills-text'>computer <br/> skills</span>
                  <br/>
                </div>
                <br/> <br/>
              </div>
              <div className="Image-background-column-computer" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"></div>
          </div>
       </header>








    </div>
  );
}

export default App;
