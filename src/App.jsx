import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { useState } from "react";
import WishlistPage from "./pages/WishlistPage";
import Navbar from "./components/Navbar";
import { destinations } from "./data/destinations";

function App() {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  const addToWishList = (destination) => {
    setWishlist((prev) => {
      if (prev.some((d) => d.id === destination.id)) return prev;
      const newWishlist = [...prev, destination];
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      return newWishlist;
    });
  };

  const removeFromWishlist = (id) => {
    const newWishlist = wishlist.filter((destination) => destination.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
    setWishlist(newWishlist);
  };

  const clearWishlist = () => {
    localStorage.setItem("wishlist", JSON.stringify([]));
    setWishlist([]);
  };
  const [userText, setUserText] = useState("");
  const searchDestination = (inputUserText) => {
    setUserText(inputUserText);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar wishlistCounter={wishlist.length} searchDestination={searchDestination} />
        <Routes>
          <Route
            path="/"
            element={<HomePage userText={userText} addToWishList={addToWishList} />}
          />
          <Route path="/destinace/:id" element={<DetailPage />} />
          <Route
            path="/wishlist"
            element={
              <WishlistPage
                userText={userText}
                wishlist={wishlist}
                removeFromWishlist={removeFromWishlist}
                clearWishlist={clearWishlist}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
