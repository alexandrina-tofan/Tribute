import Script from 'next/script';
import Image from 'next/image';
import tributeImage from '../images/tribute-page-main-image.jpg';
import  Page_one  from './styled';
import downArrow from '../images/downarr.png';

export const Page_1 = () => {
  return (
      <><Page_one>
              <div className="pg1">
                  <div className="center">
                      <div className="backgroundp1">
                          <div className="backgroundw1">
                              <div className="grid1">
                                  <ul id="navBar">
                                      <li id="tribute">TRIBUTE</li>
                                      <a href=""><li id="about">ABOUT</li></a>
                                      <a href=""><li id="info">INFO</li></a>
                                  </ul>
                                  <div className="main-image"><Image src={tributeImage} alt="main image" width={522.57} height={347} /></div>
                                  <div className="content">
                                      <div className="main-grid">
                                          <div className="name"><p id="name">Dr. Norman Borlaug</p></div>
                                          <div className="quote"><p id="quote">The man who<br /> saved a billion lives</p></div>
                                          <div className="years"><p id="years">1914 - 2009</p>
                                          </div>
                                      </div>
                                      <p id="description">Dr. Norman Borlaug, third from the left, trains biologists in<br /> Mexico on how to increase wheat yields - part of his life-long<br /> war on hunger.</p>
                                      <div className="first-arrow"><a href="#date-1"><Image src={downArrow} alt="main image" width={30} height={45} /></a></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
      <Script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></Script>
      </Page_one>
      </>
  )
}

export default Page_1;