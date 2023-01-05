// Library imports

//Style imports
import './Footer.scss';
import { Link } from 'react-scroll'


// Image imports

const Footer = () => {
    
    return(
        <div className='footer-container'> 
         <i className='line_separator_horizontal'></i>      

            {/* <div className='bio-header'> */}
                <h3 className='built-message'>Designed & Built by Alex Lassooij</h3> 
                <Link to="landing-container" smooth={true} duration={1000} className="footer-scroll">
                    <p>Back To Top</p>
                </Link>
        </div>
    )
}

export default Footer