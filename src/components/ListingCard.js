import React, { useState } from "react";

function ListingCard({ listing, onDeleteList }) {
  const { description, image, location } = listing
  const [favorite, setFavorite] = useState(false)

  const handleFavoriteClick = () => {
    setFavorite(favorite => !favorite)
  }

  const handleDeleteClick = () => {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(() => onDeleteList(listing))
    .catch(err => alert(err))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleFavoriteClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavoriteClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
