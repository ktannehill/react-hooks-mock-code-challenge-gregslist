import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDeleteList, searchTerm }) {

  const mappedListings = listings
    .filter(listing => (
      listing.description.toLowerCase().includes(searchTerm.toLowerCase())
    ))
    .map(listing => (
    <ListingCard key={listing.id} listing={listing} onDeleteList={handleDeleteList} />
  ))

  return (
    <main>
      <ul className="cards">
        {mappedListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
