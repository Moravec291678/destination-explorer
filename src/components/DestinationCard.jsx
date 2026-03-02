import { Link } from "react-router-dom";
import "./DestinationCard.css";
function DestinationCard({
  id,
  name,
  image,
  rating,
  price,
  addToWishList,
  removeFromWishlist,
  isWishlist,
}) {
  return (
    <div className="desCardWrapper">
      <Link to={`/destinace/${id}`}>
        <div className="desCard">
          <h2 className="desCardTitle">{name}</h2>
          <img className="desCardImg" src={image} alt={name} />
          <div className="destinationCardFooter">
            <p>{rating}</p>
            <p>{price}</p>
          </div>
        </div>
      </Link>
      {isWishlist ? (
        <button className="btn"
          onClick={() => {
            removeFromWishlist(id);
          }}
        >
          Odebrat ze seznamu prani
        </button>
      ) : (
        <button
          className="addToWishList btn"
          onClick={() => {
            addToWishList({ id, name, image, rating, price });
          }}
        >
          Pridat do seznamu prani
        </button>
      )}
    </div>
  );
}

export default DestinationCard;
