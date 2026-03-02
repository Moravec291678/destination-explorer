function SearchBar({ searchDestination, userText }) {
  return (
    <input
      className="navSearch"
      type="text"
      placeholder="Hledat destinaci.."
      value={userText}
      onChange={(e) => searchDestination(e.target.value)}
    />
  );
}

export default SearchBar;
