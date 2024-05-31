import { useState } from "react"

export default function SearchInput({searchTodoList}) {
    const [searchValue, setSearchValue] = useState('')

    function handleClick(e) {
        e.preventDefault();
        searchTodoList(searchValue);
    }

    return (
      <>
        <input 
            type="text"
            name="search" 
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)} 
            id="search"
        />
        <button type="button" onClick={handleClick}>Search</button>
      </>
    )
  }