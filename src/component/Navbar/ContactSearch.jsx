import React, { useState } from 'react';

const ContactSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");

    console.log(searchTerm);

    return (
        <div className="autocomplete-container" style={{ width: "100%", margin: "5px 1px 5px", position: "relative" }}>
            <input
                type="text"
                placeholder="Search here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    width: "100%",
                    padding: "15px",
                    fontSize: "16px",
                    borderRadius: "25px",
                    border: "1px solid #d3d3e3",
                }}
            />
        </div>
    );
};

export default ContactSearch;
