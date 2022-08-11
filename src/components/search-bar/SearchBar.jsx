import React from 'react'
import "./SearchBar.scss"

const SearchBar = ({handleChange,handleSubmit,term,inputRef}) => {
  return (
    <div className="input-wrapper">
        <form onSubmit={handleSubmit}>
          <input 
            className='search-bar'
            type="text"
            placeholder="Search for charachters..."
            onChange={handleChange}
            ref={inputRef}
            value={term}
          />
          <input className="submit" type="submit" value="Search" />
        </form>
      </div>
  )
}

export default SearchBar