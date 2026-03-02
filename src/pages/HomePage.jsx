import DestinationCard from "../components/DestinationCard";
import { destinations } from "../data/destinations";
import "./HomePage.css";
function HomePage({ addToWishList, userText}) {
  const data = destinations.filter((d) => {return d.name.toLocaleLowerCase().includes((userText || "").toLocaleLowerCase())});
  
  return (
  <div className="homeGrid">
    <h1 className="homeTitle">Destinace</h1>
    <div className="homeList">
      {data.map((d) => (
        <DestinationCard
          key={d.id}
          id={d.id}
          name={d.name}
          image={d.image}
          rating={d.rating}
          price={d.price}
          addToWishList={addToWishList}
          d={d}
          isWishlist={false}
        />
      ))}
    </div>
  </div>
);
}

export default HomePage;
