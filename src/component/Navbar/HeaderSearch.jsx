import React, { useState, useEffect, useRef } from "react";

const dataList = [
  "", 
];

const HeaderSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]); // Initially empty
  const [showSuggestions, setShowSuggestions] = useState(false); // Hide suggestions initially
  const containerRef = useRef(null); 

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredData([]);
      setShowSuggestions(false);
    } else {
      const filtered = dataList.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
      setShowSuggestions(true); // Ensure suggestions box opens even if no match found
    }
  }, [searchTerm]);

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
    <div ref={containerRef} className="autocomplete-container" style={{ width: "100%", margin: "5px 1px 5px", position: "relative" }}>
      <input
        type="text"
        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => searchTerm && setShowSuggestions(true)} // Show only if searchTerm is not empty
        style={{
          width: "100%",
          padding: "15px",
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

export default HeaderSearch;
