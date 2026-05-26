"use client";

import { useEffect, useState } from "react";

function AutoComplete() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  async function fetchData(query) {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`,
    );
    const data = await response.json();
    setResult(data?.recipes || []);
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      if (input.length > 0) {
        fetchData(input);
      } else {
        setResult([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div className="flex flex-col items-center mt-10">
      <p className="mb-4 text-2xl">AutoComplete Component Example</p>
      <input
        className="border border-gray-300 rounded-md p-2 w-1/2 "
        type="text"
        placeholder="Type to search..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setShowDropdown(false)}
      />
      {showDropdown && (
        <div className="w-full flex flex-col items-center max-h-96 overflow-y-auto">
          {result.map((item) => (
            <div className="w-1/2 border border-gray-300 cursor-pointer hover:bg-gray-100 rounded-md p-2">
              <span key={item.id}>{item.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AutoComplete;
