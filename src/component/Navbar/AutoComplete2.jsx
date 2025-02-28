import React, { useState, useEffect, useRef } from "react";

const dataList = [
  "Jasmine Kim", "Allison Kauffman", "Paula Carmer", "Kim Logan", 
];

const AutoCompleteSearch2 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(dataList); // Show all by default
  const [showSuggestions, setShowSuggestions] = useState(true);
  const containerRef = useRef(null); // Ref for detecting outside clicks

  // Filter suggestions as user types
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData(dataList); // Show all when input is empty
      setShowSuggestions(true);
    } else {
      const filtered = dataList.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered.length > 0 ? filtered : []);
      setShowSuggestions(true);
    }
  }, [searchTerm]);

  // Hide suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSelect = (item) => {
    setSearchTerm(item);
    setShowSuggestions(false);
  };

  return (
    <div ref={containerRef} className="autocomplete-container" style={{ width: "", margin: "5px 1px 15px 1px", position: "relative" }}>
        {/* <span class="icon__Kj5DB"><img alt="" src="svg/Search_Icon.svg"/></span> */}
      <input
        type="text"
        placeholder="Search by topic"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "25px",
          border: "1px solid #d3d3e3",
          
        }}
      />
      {showSuggestions && (
        <ul
          style={{
            listStyleType: "none",
            padding: "10px",
            margin: 0,
            background: "#fff",
            borderRadius: "5px",
            border: "1px solid #ccc",
            position: "absolute",
            width: "100%",
            zIndex: 1000,
            maxHeight: "200px",
            overflowY: "auto"
          }}
        >
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <li
                key={index}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  borderBottom: "1px solid #ddd",
                }}
                onClick={() => handleSelect(item)}
              >
                {item}
              </li>
            ))
          ) : (
            <li style={{ padding: "8px", color: "#999", textAlign: "center" }}>
              No data found
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteSearch2;
