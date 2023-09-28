import "../styles/Origin.css";
import coffeeCherry from "../assets/coffee-cherry.jpeg";
import coffeeFarm from "../assets/coffee-farm.png";
import greenCoffee from "../assets/green-coffee-beans.jpeg";
import cafe from "../assets/cafe.jpeg";

const Origin = () => {
  return (
    <div className="origin-container">
      <h1>Coffee Origin</h1>
      <div className="origin-main">
        <div class="origin-text">
          <p>
            Coffee is a fruit. <br /> The roasted, lovely product we all enjoy
            daily actually starts its life as a seed inside of a piece of fruit.
            The flowering plant called <em>Coffea</em> produces a red fruit
            which is known as a coffee cherry. The first photo on the right is
            of a ripe coffee cherry that will be harvested by an artisan farmer.
            The actual coffee bean is the pit inside of the pulp of the cherry.
            This tiny pit is what is processed and exported all around the world
            for us to enjoy in our daily cup of coffee.
          </p>
          <p>
            <em>Coffea</em> is a member of the taxonomical family{" "}
            <em>Rubiaceae</em>, a family of small trees and flowering shrubs.
            There are several species of coffee, but for simple purposes I'll
            only mention the two that are the most common for coffee drinking.
            There is Arabica, which is most commonly found and what high-end,
            flavor-focused coffee has been centered around. There is also
            Robusta, which tends to be hearty, easy to grow, fights off disease
            well, and has twice the amount of caffeine.
          </p>
          <h3>Arabica</h3>
          <p>
            Arabica coffee is what the specialty coffee world revolves around.
            Arabica beans create such complex and unique coffees that will blow
            your mind when you try them. It's definitely an oxymoron because
            Arabica is actually very hard to manage when it's growing, prone to
            disease, and it's just very fussy. However, the taste is so
            luxurious and beautiful that it is the only species used in the
            specialty coffee industry. Similar to wine, coffee has their own
            typicity and genetic diversity. In specialty coffee, you will
            typically be able to find some of these varieties such as: Typica,
            Caturra, Bourbon, Pacamara, and Geshas. Depending on the coffee
            variety, each variety will have different qualities and tasting
            profiles to it just like Chardonnay and Cabernet wines taste
            completely different. There are definitely certain varieties that
            are crowd pleasers, and soon you'll be able to find out yourself
            after experimenting and tasting a few.
          </p>
          <h3>Robusta</h3>
          <p>
            Robusta is comparatively a lot easier to grow, fights off disease
            well, and has twice the amount of caffeine as Arabica. This coffee
            is traditionally darker in flavor, resembling almost a smokey and
            burnt flavor. Not many cafes use Robusta beans, mostly because of
            the flavor notes at the moment. There is a lot of potential for
            robusta beans in the future though, especially because of climate
            change. I'm not sure if we will always have the luxury of being able
            to grow Arabica beans. Whenever that moment comes, Robusta will come
            to the rescue. However, there are still a few things that need to be
            figured out growing wise to increase the flavor profile.
          </p>
        </div>
        <div class="coffee-collage">
          <img src={coffeeCherry} alt="coffee cherry" />
          <img src={coffeeFarm} alt="coffee farm" />
          <img src={greenCoffee} alt="green unroasted coffee" />
          <img src={cafe} alt="coffee shop" />
        </div>
      </div>
    </div>
  );
};

export default Origin;
