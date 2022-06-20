import React from 'react'
import magnifier from "../assets/icon-search.svg"
import "./Search.scss"

const Search = () => {
  return (
    <div>
    <form className='search__form'>
        <img className='search__mag' src={magnifier}></img>
        <input className='search__input' placeholder='Search Github username...'></input>
        <button className='search__btn'>Search</button>
    </form>

    </div>
  )
}

export default Search