import "../styles/Home.css";
import photoOne from "../assets/pexels-og-mpango.jpg";
import photoTwo from "../assets/pexels-denis-zagorodniuc.jpg";
import photoThree from "../assets/pexels-bill-salazar.jpg";
import chemexIcon from "../assets/icons8-chemex-64.png";
import coffeePlant from "../assets/icons8-coffee-plant-64.png";
import coffeeBeans from "../assets/icons8-coffee-bean-64.png";
import coffeeBag from "../assets/icons8-coffee-bag-100.png";
import coffeeCup from "../assets/icons8-coffee-cup-100.png";
import coffeeGrinder from "../assets/icons8-coffee-grinder-64.png";
import communityIcon from "../assets/icons8-community-64.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-images">
        <div className="image-cont">
          <img
            className="header-image"
            src={photoOne}
            alt="person holding coffee plant"
          />
          <p className="photo-one-text">Connection</p>
        </div>
        <div className="image-cont">
          <img
            className="header-image"
            src={photoTwo}
            alt="lady holding green coffee cherries"
          />
          <p className="photo-two-text">Community</p>
        </div>
        <div className="image-cont">
          <img
            className="header-image"
            src={photoThree}
            alt="person holding a chemex coffee brewer"
          />
          <p className="photo-three-text">Intentionality</p>
        </div>
      </div>
      <div className="home-text">
        <p>
          Coffee is one of the few things in this world that everyone has a
          connection to. Humans have been enjoying it since the sixteenth
          century and its origin goes back even further. Coffee is nothing new,
          however, the golden era of Specialty Coffee is. Coffee tastes better
          than ever before, there is more intentionality behind brewing it and
          there is a lot more respect for it.
        </p>
        <p>
          We are here to educate people more about specialty coffee to bring an
          appreciation towards this special plant that connects the world around
          us. Let's bridge the gap of farmers and consumers through education.
          Our goal is to give power and respect back to the hard workers who
          grow this magical crop while simultaneously educating the public.
        </p>
        <div className="home-icons">
          <img className="reg-image" src={chemexIcon} alt="chemex icon" />
          <img className="reg-image" src={coffeePlant} alt="coffee plant" />
          <img className="reg-image" src={coffeeBeans} alt="coffee beans" />
          <img className="smaller-image" src={coffeeBag} alt="coffee bag" />
          <img className="smaller-image" src={coffeeCup} alt="coffee cup" />
          <img className="reg-image" src={coffeeGrinder} alt="coffee grinder" />
          <img
            className="reg-image"
            src={communityIcon}
            alt="group of people"
          />
        </div>
      </div>
      <div className="home-directory">
        <h1>
          Let's explore the journey of coffee. What are you interested in?
        </h1>
        <div className="directory-boxes">
          <NavLink
            className="directory-link green"
            to="/specialty-coffee-simplified/origin"
          >
            Coffee Origin
          </NavLink>
          <NavLink
            className="directory-link purple"
            to="/specialty-coffee-simplified/regions"
          >
            Regions
          </NavLink>
          <NavLink
            className="directory-link yellow"
            to="/specialty-coffee-simplified/processing"
          >
            Coffee Processing
          </NavLink>
          <NavLink
            className="directory-link blue"
            to="/specialty-coffee-simplified/specialty-coffee"
          >
            Specialty Coffee
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
