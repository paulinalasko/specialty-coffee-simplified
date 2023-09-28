import "../styles/Regions.css";
import RegionsNavbar from "../components/RegionNavbar";
import coffeeFarmer from "../assets/colombian-coffee-farmer.jpeg";
import centralCoffee from "../assets/central-coffee-farm.jpeg";
import coffeeBags from "../assets/coffee-bags.jpeg";
import africaFarm from "../assets/african-coffee-farm.jpeg";
import arabicCoffee from "../assets/coffee-with-cardamom.jpeg";
import arabicFarm from "../assets/saudi-arabia-coffee-farm.jpeg";
import sumatraFarm from "../assets/coffee-from-sumatra.jpg";

const Regions = () => {
  return (
    <div className="regions-container">
      <div className="region-header">
        <h1>Regions</h1>
      </div>
      <div className="sticky region-nav">
        <RegionsNavbar />
      </div>
      <div className="region-sections">
        <div className="about-container" id="about">
          <h2>About</h2>
          <div className="about-text">
            <p>
              Let's talk about regions. Coffee can survive in a lot of different
              environments, with each one giving it unique flavor
              characteristics. The primary growing regions are Central and South
              America, Africa, the Middle East, and Asia. You can have a coffee
              with tea-like floral jasmine notes from Ethiopia, or you could
              have a more medium-bodied cup with notes of black forest cake and
              nougat from El Salvador. The world is your oyster, go crazy and
              drink the coffee that you love.
            </p>
            <p>
              The finest coffees tend to be grown in the Bean Belt. The Bean
              Belt is located along the equator between the Tropic of Cancer and
              the Tropic of Capricorn. The popular phrase "geography is a
              flavor" is still mostly accurate today but I would take that with
              a few grains of salt. Coffee flavors do vary greatly based on
              weather, soil chemistry, rainfall, altitude, and processing
              methods. Each region tends to have their own set of
              characteristics and flavor profiles that we all know and love. I
              would keep in mind though, with the ever-growing information
              circulating, and the more access coffee farmers get to processing
              and growing techniques, you'd be surprised what varieties you can
              taste in a cup.
            </p>
          </div>
        </div>
        <div className="central-south-container" id="central-south-america">
          <h2>Central and South Americas</h2>
          <div className="flex-row">
            <div className="americas-text">
              <p>
                Most coffees in the Central region come from Guatemala,
                Nicaragua, El Salvador, Honduras, and Costa Rica. Central
                American coffee beans are exceptionally well-balanced,
                medium-bodied and clean. Some prominent flavor notes you can see
                range from fruit, honey and medium-to-dark chocolate with a hint
                of nuttiness.
              </p>
              <p>
                Centrals are ranked among the world's top coffees. They tend to
                have extraordinary single origins with mild fruity notes to it,
                all the way to having delicate almond notes with a hint of
                citrus. This region has almost near perfect growing conditions-
                with soaring mountains, rich volcanic soil and old growth
                forests. I would highly recommend trying this region of coffees,
                especially if you are trying specialty coffee for the first time
                and want a mellow and balanced introduction.
              </p>
              <p>
                The South American coffee regions comes from Brazil, Colombia,
                Bolivia, and Ecuador. Even though Colombian coffee is talked
                about the most, Brazil produces the highest volume of coffee in
                the world. South America coffees are so tasty and resemble
                Central American coffees. South American coffees tend to be
                mild-bodied, creamier, and have more chocolate notes.
              </p>
            </div>
            <div className="img-container">
              <img
                className="resize-img"
                src={coffeeFarmer}
                alt="Coffee farmer harvesting coffee cherries"
              />
              <img
                className="resize-img"
                src={centralCoffee}
                alt="Coffee farm in Central America"
              />
            </div>
          </div>
        </div>
        <div className="africa-container" id="africa">
          <h2>Africa</h2>
          <div className="flex-row">
            <div className="africa-text">
              <p>
                The African coffee region includes Kenya, Ethiopia, Rwanda,
                Burundi, Uganda, and a lot of others that are just as good.
                These coffee beans produce some fun and funky flavors that are
                personally my favorite. You'll find very sweet, fruity and
                delicate floral notes from these regions. Coffee from this
                region also tends to be lighter-bodied, almost resembling a
                tea-like mouthfeel. Specialty Coffee shops love African coffees
                and you'll tend to see a lot towards the end of spring and
                summertime.
              </p>
              <p>
                Most people who try cups from this region tend to have very
                memorable experiences. It's hard to forget a coffee that tastes
                like fruit punch, deep berries, or even like jasmine. When I
                first started in the coffee industry, I remember having my first
                natural processed coffee that literally tasted like blueberries.
                Before that, I didn't really understand flavor notes until
                having that cup. Since then, I have fallen in love and it has
                opened up a whole world to me of expanding my palette and
                exploring new flavor notes.
              </p>
            </div>
            <div className="img-container">
              <img
                className="resize-img"
                src={coffeeBags}
                alt="Vehicle filled with lots of coffee bags"
              />
              <img
                className="resize-img"
                src={africaFarm}
                alt="Coffee farm in Africa"
              />
            </div>
          </div>
        </div>
        <div className="middle-east-container" id="middle-east">
          <h2>Middle East</h2>
          <div className="flex-row">
            <div className="middle-east-text">
              <p>
                The middle east is actually where coffee originated from. Modern
                day Yemen is a coffee pioneer and people have been enjoying it
                since the 1200s, while the rest of the world didn't get coffee
                until the 1600s. Arabic coffee is typically boiled, filtered and
                brewed with cardamom. Each region has its own take on coffee,
                adjusting herbs and spices to create unique flavors.
              </p>
              <p>
                Coffee grown in Yemen tends to have a complex earthiness which
                often holds tones of dried fruit. Coffee here is grown at high
                altitudes and rocky, volcanic soil. A typical cup from Yemen
                boasts a well-balanced, medium-bodied chocolatey finished with
                bright acidity. If it wasn't for Yemen, we wouldn't be enjoying
                this delicious beverage today.
              </p>
            </div>
            <div className="img-container">
              <img
                className="resize-img"
                src={arabicFarm}
                alt="Coffee farm in Saudi Arabia"
              />
              <img
                className="resize-img"
                src={arabicCoffee}
                alt="Coffee with cinnamon from middle east"
              />
            </div>
          </div>
        </div>
        <div className="asia-container" id="asia">
          <h2>Asia</h2>
          <div className="flex-row">
            <div className="asia-text">
              <p>
                Southeast Asia is famous for growing coffee beans, particularly
                in Vietnam and Indonesia. Indonesian coffee is known for
                producing full bodied, rich and earthy beans. If you are a dark
                roast lover, you probably would fall in love with this region.
              </p>
              <p>
                Vietnam is actually the world's second larget coffee exporter.
                The coffee from here tends to be mild, delicate and
                medium-bodied.
              </p>
            </div>
            <div className="img-container">
              <img
                className="resize-img"
                src={sumatraFarm}
                alt="Coffee cherries from the island of Sumatra"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regions;
