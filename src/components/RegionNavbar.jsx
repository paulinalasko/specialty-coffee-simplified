import '../styles/Regions.css';
import { NavLink } from 'react-router-dom';

const RegionsNavbar = () => {
    return (
        <div className='region-navbar'>
              <div className="region-links">
                <a className="region-link" href="#about">About</a>
                <a className="region-link" href="#central-south-america">Central and South Americas</a>
                <a className="region-link" href="#africa">Africa</a>
                <a className="region-link" href="#middle-east">Middle East</a>
                <a className="region-link" href="#asia">Asia</a>
              </div>
        </div>
    )
}

export default RegionsNavbar;