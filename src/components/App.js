import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(listData => setListings(listData))
  }, [])

  const handleDeleteList = (deletedListing) => {
    const updatedListings = listings.filter(listing => listing.id !== deletedListing.id)
    setListings(updatedListings)
  }

  const handleFilterSearch = (newSearch) => {
      setSearchTerm(newSearch)
  }

  return (
    <div className="app">
      <Header onFilterSearch={handleFilterSearch} />
      <ListingsContainer listings={listings} handleDeleteList={handleDeleteList} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
