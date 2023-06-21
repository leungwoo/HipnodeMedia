'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import images from '../assets';

function SearchItem({ id, title, onSearchItemClick }: any) {
  const router = useRouter();

  const handleNavigation = () => {
    onSearchItemClick();
    router.push(`/post-details/${id}`);
  };

  return (
    <button
      type="button"
      onClick={handleNavigation}
      className="text-left focus:outline-none w-full hover:text-button hover:bg-light3 dark:hover:bg-dark3 rounded p-2"
    >
      {title}
    </button>
  );
}

function Searchbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchItemClick = () => {
    setSearchQuery('');
  };

  useEffect(() => {
    async function fetchSearchResults() {
      if (searchQuery.trim() !== '') {
        const res = await fetch(`/api/search?query=${searchQuery}`);
        const result = await res.json();
        setFilteredData(result.posts);
      } else {
        setFilteredData([]);
      }
    }

    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div className="relative flex flex-row justify-center items-center  ">
      <div className="w-full flex items-center">
        <input
          type="text"
          className="flex p-2 lg:pl-2 pl-10 text-slateGray dark:text-light2 rounded-lg w-full bg-light3 dark:bg-dark4 border-none font-sans font-semibold text-[12px] lg:text-[16px]"
          placeholder="Type here to search..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className="absolute p-3 flex lg:right-0 lg:left-auto left-0">
          <Image src={images.searchIcon} width={20} height={20} alt="searchicon" onChange={handleSearch} className="cursor-pointer" />
        </div>
      </div>
      {
        // !filteredData ? "" :
        filteredData &&
        filteredData.length > 0 && (
          <div className="absolute top-full mt-1 left-0 right-0 z-50 rounded-b-lg bg-white dark:bg-dark2 shadow-lg font-sans font-semibold text-[12px] lg:text-[16px] text-dark3 dark:text-light2">
            <ul>
              {filteredData.map((item: any) => (
                <li key={item._id}>
                  <SearchItem id={item._id} title={item.title} onSearchItemClick={handleSearchItemClick} />
                </li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
}

export default Searchbar;
