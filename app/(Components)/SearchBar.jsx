"use client";
import { ImSearch } from "react-icons/im";
import React, { useState, useRef } from "react";

const SearchBar = () => {
  const [queryString, setQueryString] = useState("");

  const handleSearch = (e) => {
    const q = e.target.value;
    setQueryString(q);
  };

  return (
    <div className="relative">
      <input
        onChange={handleSearch}
        value={queryString}
        type="text"
        placeholder="Search (/)"
        className="w-full p-4 pl-12 mb-0 transition-all border-2 shadow-lg border-slate-900/20 active:border-slate-900/80 placeholder:text-slate-900/60 focus:shadow-2xl rounded-xl"
      />
      <ImSearch className="absolute top-0 mt-[18px] ml-4 text-xl text-slate-900/70 left" />
    </div>
  );
};

export default SearchBar;
