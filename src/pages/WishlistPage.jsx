import DestinationCard from "../components/DestinationCard";
import "./WishlistPage.css";

function WishlistPage({ wishlist, removeFromWishlist, clearWishlist, userText}) {
  const filteredList = wishlist.filter((w) => {return w.name.toLocaleLowerCase().includes((userText || "").toLocaleLowerCase())})
  return (
    <div className="wishlistWrapper">
      <h1 className="wishlistTitle">Wishlist</h1>

      {wishlist.length ? (
        <>
          <div className="homeList">
            {filteredList.map((d) => (
              <DestinationCard
                key={d.id}
                id={d.id}
                name={d.name}
                image={d.image}
                rating={d.rating}
                price={d.price}
                removeFromWishlist={removeFromWishlist}
                isWishlist={true}
              />
            ))}
          </div>

          <div className="clearWishlistWrapper">
            <button
              className="clearWishlistBtn btn"
              onClick={() => clearWishlist()}
            >
              Smazat seznam prani
            </button>
          </div>
        </>
      ) : (
        <p className="emptyWishlist">Seznam prani je prazdny!</p>
      )}
    </div>
  );
}

export default WishlistPage;
