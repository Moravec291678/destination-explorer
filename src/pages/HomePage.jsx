import { useState } from "react";
import DestinationCard from "../components/DestinationCard";
import { destinations } from "../data/destinations";
import "./HomePage.css";
function HomePage({ addToWishList, userText }) {
  const [count, setCount] = useState(10);
  const data = destinations
    .filter((d) => {
      return d.name
        .toLocaleLowerCase()
        .includes((userText || "").toLocaleLowerCase());
    })
    .slice(0, count);

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
            isWishlist={false}
          />
        ))}
      </div>
      {count < destinations.length && (
        <button className="destinationsMore" onClick={() => setCount(count + 10)}>
          Zobrazit vice destinaci
        </button>
      )}
    </div>
  );
}

export default HomePage;
