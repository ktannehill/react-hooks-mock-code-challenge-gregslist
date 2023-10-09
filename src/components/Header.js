import React from "react";
import Search from "./Search";

function Header({ onFilterSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onFilterSearch={onFilterSearch} />
    </header>
  );
}

export default Header;
