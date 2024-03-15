// Library imports
import { Parallax } from 'react-parallax';
import { Link } from 'react-scroll'
import jsonData from '../../files/portfolio_data.json'


// icon imports 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faFile} from "@fortawesome/free-solid-svg-icons"
import {faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons"





//Style imports
import './Landing.scss';

// Image imports
// import landing-background from '../../images/ubc.JPG'
// import alex from '../../images/alex.jpeg'

const Landing = () => {
    const introduction = jsonData["introduction"]
    const isChrome = navigator.userAgent.indexOf("Chrome") !== -1;
    return(
        <div id='landing-container'>
            <div className='landing-parallax'>
            <Parallax 
                blur={{min:-15, max: 15}}      
                bgImage={process.env.PUBLIC_URL + '/images/fountaincropped.jpeg'}  
                bgImageAlt='Landing Background'                
                strength={-200}        
            >
                <div className='landing-content'>
                    <div className='intro-links-container'>
                        <div className='intro-block'>
                            <img className="profile-picture" src={process.env.PUBLIC_URL + '/images/LinkedInPP.png'} alt='profile'/> 
                            <p className='salutation'>Hey there, </p>
                            <h1 className="name">
                                I'm Alex
                                </h1>
                            <p className='intro'>
                                {introduction}
                            </p>
                                <Link to="bio-container" smooth={true} duration={1000} className="section-link">
                                    <div className='slide-button-container'>
                                        <i className='slide-button-icon'></i>
                                        <i className='slide-button-icon animated'></i>
                                    </div>  
                                </Link>
                        </div>  
                        <div className="social-links">
                            <div className='social-link-button-container'>
                                <a href="https://drive.google.com/file/d/12LoMexiV7vs4lwSZSiMrPnUdYi4a7cG9/view?usp=sharing" target="_blank" rel="noreferrer">
                                <button className='social-link-button file'>
                                <FontAwesomeIcon className='fa-btn file' icon={faFile} />                        
                                </button>
                                </a>
                                <p className={isChrome ? 'social-link-description chrome' : 'social-link-description'}>Resume</p>
                            
                            </div>
                                                
                            <div className='social-link-button-container'>
                                <a href="https://github.com/AlexLassooij" target="_blank" rel="noreferrer">
                                <button className='social-link-button git'>
                                <FontAwesomeIcon className='fa-btn git' icon={faGithubSquare} />                        
                                </button>
                                </a>
                                <p className={isChrome ? 'social-link-description chrome' : 'social-link-description'}>GitHub</p>
                            </div>
                            
                            <div className='social-link-button-container'>
                                <a href="https://www.linkedin.com/in/alexanderlassooij/" target="_blank" rel="noreferrer">
                                <button className='social-link-button in'>
                                <FontAwesomeIcon className='fa-btn in' icon={faLinkedin} />                        
                                </button>
                                </a>
                                <p className={isChrome ? 'social-link-description chrome' : 'social-link-description'}>LinkedIn</p>
                            </div>

                            <div className='social-link-button-container'>
                                <a href="mailto:alex.lassooij@icloud.com" target="_blank" rel="noreferrer">
                                <button className='social-link-button mail'>
                                <FontAwesomeIcon className='fa-btn mail' icon={faEnvelopeSquare} />                        
                                </button>
                                </a>
                                <p className={isChrome ? 'social-link-description chrome' : 'social-link-description'}>Contact</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Parallax>
            </div>
        </div>
     
    )
}

export default Landing
