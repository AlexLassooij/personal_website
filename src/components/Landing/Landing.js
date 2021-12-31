// Library imports
import {Background, Parallax} from 'react-parallax';
import { Link } from 'react-scroll'


// icon imports 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faFile} from "@fortawesome/free-solid-svg-icons"
import {faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons"





//Style imports
import './Landing.css';

// Image imports
// import landing_background from '../../images/ubc.JPG'
// import alex from '../../images/alex.jpeg'

const Landing = () => {
    return(
        <div className='landing_container'>
            <div className='landing_parallax'>
            <Parallax 
                blur={{min:-15, max: 15}}      
                bgImage={process.env.PUBLIC_URL + '/' + 'images/fountaincropped.jpeg'}  
                bgImageAlt="Landing Background"                
                strength={-200}        
            >
                
                
                <div className="landing_content">
                    <h1 className="name">Alex Lassooij</h1>
                    <img className="profile_picture" src={process.env.PUBLIC_URL + '/images/profile5:7.jpeg'} alt='profile'/> 
                    
                         
                    <div className="social_links">

                    
                    <div className='social_link_button_container'>
                        <a href="https://drive.google.com/file/d/1PINQpmtHlz3GT_SLv8Oj4NrFNN-XTK4n/view?usp=sharing" target="_blank">
                        <button className='social_link_button file'>
                        <FontAwesomeIcon className='fa-btn file' icon={faFile} />                        
                        </button>
                        </a>
                        <p className='social_link_description'>Resume</p>
                    
                    </div>
                                        
                    <div className='social_link_button_container'>
                        <a href="https://github.com/AlexLassooij" target="_blank">
                        <button className='social_link_button git'>
                        <FontAwesomeIcon className='fa-btn git' icon={faGithubSquare} />                        
                        </button>
                        </a>
                        <p className='social_link_description'>GitHub</p>
                    </div>

                    <Link to="bio_container" smooth={true} duration={1000} className="section_link">
                    <div className='slide_button_container'>
                        <i className='slide_button_icon'></i>
                    </div>  
                    </Link>
                    
                    <div className='social_link_button_container'>
                        <a href="https://www.linkedin.com/in/alexanderlassooij/" target="_blank">
                        <button className='social_link_button in'>
                        <FontAwesomeIcon className='fa-btn in' icon={faLinkedin} />                        
                        </button>
                        </a>
                        <p className='social_link_description'>LinkedIn</p>
                    </div>

                    <div className='social_link_button_container'>
                        <a href="mailto:alex.lassooij@icloud.com" target="_blank">
                        <button className='social_link_button mail'>
                        <FontAwesomeIcon className='fa-btn mail' icon={faEnvelopeSquare} />                        
                        </button>
                        </a>
                        <p className='social_link_description'>Contact</p>
                    </div>

                    </div>
                </div>
            </Parallax>
            </div>
            
        </div>
     
    )
}

export default Landing