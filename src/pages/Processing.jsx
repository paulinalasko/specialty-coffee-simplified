import "../styles/Processing.css";
import waterIcon from "../assets/icons8-water-64.png";
import smellIcon from "../assets/icons8-smelling-50.png";

const Processing = () => {
  return (
    <div className="processing-container">
      <div className="processing-header">
        <h1>Processing</h1>
      </div>
      <div className="sticky process-nav">
        <div className="processing-links">
          <a className="processing-link" href="#about-processing">
            About
          </a>
          <a className="processing-link" href="#washed">
            Washed
          </a>
          <a className="processing-link" href="#natural">
            Natural
          </a>
          <a className="processing-link" href="#honey">
            Honey
          </a>
        </div>
      </div>
      <div className="processing-sections">
        <div className="about-processing" id="about-processing">
          <h2 className="mg-bottom">About</h2>
          <div className="about-processing-text">
            <p>Coffee processing, what is that?</p>
            <p>
              To give you a little rundown, coffee processing refers to the way
              the seed is removed from a coffee cherry. There are various way to
              remove the seed, the most common you'll find are washed, honey,
              and natural processes. The different processes will each give
              unique and complex qualities to the bean. Even processing the same
              bean two different ways can make it taste like a different coffee.
              Let's dive in to learn more about each process and flavor
              characteristics that come with that.
            </p>
            <div style={{ display: "flex", gap: 15, padding: 30 }} className="sensory-box">
              <img className="icon" src={waterIcon} alt="water icon" />
              <p>Water used in processing method</p>
              <img className="icon" src={smellIcon} alt="nose icon" />
              <p>Common tasting notes/aromas</p>
            </div>
          </div>
        </div>
        <div className="washed-container" id="washed">
          <h2 className="mg-bottom">Washed</h2>
          <div className="washed-text">
            <p>
              Washed coffees are exactly what you think they are, they are
              processed with water! Depulpers remove the cherry around each seed
              and then they are washed thoroughly to remove any mucilage or
              fruit remaining. After the bean is washed, it is set out onto
              coffee beds to dry out in the sun.
            </p>
            <p>
              Despite the name, "washed" coffees are not cleaner than other
              processes. Natural and honey processes are just as clean! Washing
              the fruit muciliage off during the washed process just changes the
              flavor profile of the bean drastically. Washed coffees tend to
              have balanced, crisp tasting notes. They typically also have a
              more subtle acidity that balances out the sweetness of the cup.
            </p>
          </div>
          <div className="icons flex-row">
            <div className="flex-row sensory-box">
              <img src={waterIcon} alt="water icon" />
              <p>:Yes</p>
            </div>
            <div className="flex-row sensory-box" style={{ marginLeft: 50 }}>
              <img src={smellIcon} alt="nose icon" />
              <p>Cleaner, crisp, light body, bright acidity, balanced</p>
            </div>
          </div>
        </div>
        <div className="natural-container" id="natural">
          <h2 className="mg-bottom">Natural</h2>
          <div className="natural-text">
            <p>
              A natural processed coffee is truly a wonderful thing that we are
              lucky to experience. Most popular don't actually realize how
              fruity and tea-like coffee can be when processed fully naturally.
              A natural process is considered a dry process. It originated in
              Ethiopia because of the perfect conditions that the weather
              permits over there, plus it is a billion times cheaper/more
              enviornmentally friendly. To process a coffee naturally, you
              harvest a ripe coffee cherry and automatically start drying it on
              raised beds afterwards. While the coffee dries the next 3-6 weeks,
              it naturally ferments and the sugar/mucilage stick to the seeds.
              Once the cherry is fully dry, a machine separates the pulp and
              skin from the seed. This produces some vibrant flavors that are
              very fruit-forward, floral, sweet and a little punchy.{" "}
            </p>
          </div>
          <div className="icons flex-row">
            <div className="flex-row sensory-box">
              <img src={waterIcon} alt="water icon" />
              <p>:No</p>
            </div>
            <div className="flex-row sensory-box" style={{ marginLeft: 50 }}>
              <img src={smellIcon} alt="nose icon" />
              <p>Sweet, juicy, syrupy, floral</p>
            </div>
          </div>
        </div>
        <div className="honey-container" id="honey">
          <h2 className="mg-bottom">Honey</h2>
          <div className="honey-text">
            <p>
              A honey processed coffee is a combination of both the natural and
              washed processes. It is quite rare to get this process because of
              how demanding the steps are. When you receive a honey processed
              cup though, it is oh so worth it. This process entails harvesting
              a ripe coffee cherry and then putting it through a depulper to
              separate the cherry from the seed. The difference from a washed to
              honey processed bean is that it does not go through a washing
              cycle. The separated bean goes to dry afterwards with the
              mucilage/natural sugars still on the seed. During the drying
              process, the seeds are raked to prevent molding and to allow equal
              drying. Honey processed coffees tend to have cleaner bodies, but
              retain notes of syrupy sweetness from the left over mucilage.
            </p>
          </div>
          <div className="icons flex-row">
            <div className="flex-row sensory-box">
              <img src={waterIcon} alt="water icon" />
              <p>:No</p>
            </div>
            <div className="flex-row sensory-box" style={{ marginLeft: 50 }}>
              <img src={smellIcon} alt="nose icon" />
              <p>Clean, mild acidity, syrupy, sweet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Processing;
