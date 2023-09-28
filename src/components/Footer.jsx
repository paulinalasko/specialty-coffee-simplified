import '../styles/Footer.css';
import logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-links">
                <a>About</a>
                <a>Contact</a>
                <a>Newsletter</a>
                <a>Careers</a>
                <a>Specialty Coffee <br/>Recommendations</a>
                <a>FAQ</a>
            </div>
            <div className="input-box">
                <p>Have any questions or coffee input you would like to add? </p>
                <button><a href="mailto:paulinal@hawaii.edu" className="link">Email us here!</a></button>
                
            </div>
            <div className="footer-logo">
                <img src={logo} alt="Specialty coffee simplified logo" />
            </div>
            <div className="copyright">
                <p>Copyright 2023 © paulinalasko</p>
            </div>
        </div>
    )
}

export default Footer;