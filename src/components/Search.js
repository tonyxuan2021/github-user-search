import React, { useContext, useState } from "react";
import { AppContext } from "../context";
import magnifier from "../assets/icon-search.svg";
import "./Search.scss";

const Search = () => {
  const [user, setUser] = useState("");
  const { searchGithubUser } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGithubUser(user);
    }
    e.target.reset()
  };

  return (
    <div>
      <form className="search__form" onSubmit={handleSubmit}>
        <img className="search__mag" src={magnifier}></img>
        <input
          className="search__input"
          placeholder="Search Github username..."
          value={user}
          onChange={(e) => setUser(e.target.value)}
        ></input>
        <button className="search__btn">Search</button>
      </form>
    </div>
  );
};

export default Search;
