import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <form className='searchform' action="" onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input 
        type="text"
        id='search'
        role='searchbox'
        placeholder='Search Items'
        aria-label='search'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem