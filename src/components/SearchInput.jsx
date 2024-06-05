import { useState } from "react"

export default function SearchInput({ searchTodoList }) {
    const [searchValue, setSearchValue] = useState('')

    function handleClick(e) {
        e.preventDefault()
        searchTodoList(searchValue)
    }

    return (
        <input
            type="text"
            name="search"
            className="mb-4"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            onKeyUp={handleClick}
            id="search"
            placeholder="Search Todos"
        />
    )
}