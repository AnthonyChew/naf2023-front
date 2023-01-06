import React, { useState } from 'react';

export default function SearchBar(props) {
  const [query, setQuery] = useState('');
  const { searchCallback } = props;


  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  function search() {
    //console.log(query)
    searchCallback(query)
  }

  function handlePress(e) {
    if (e.keyCode == 13) {
      //console.log(e.target.value)
      search(e.target.value)
    }
  }

  return (
    <div class="relative lg:w-[20%] w-[100%]">
        <input onKeyDown={(e) =>handlePress(e)} onChange={handleInputChange} id="search" class="block w-full p-4 text-sm  border rounded-lg " placeholder="Search" required/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2  " onClick={search}>
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
    </div>
  );
}
