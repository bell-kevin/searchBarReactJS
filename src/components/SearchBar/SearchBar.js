import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    const products = props.products;

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const shouldDisplayButton = searchTerm.length > 0;

    const handleClear = () => {
        setSearchTerm("");
    }

    const filteredProducts = products.filter((product) => {
        return product.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search" />
            {shouldDisplayButton && <button onClick={handleClear}>Clear</button>}
            <br></br>
            <br></br>
            <div className="text-list">
                {filteredProducts.map((product) => {
                    return <div key={product}>{product}</div>;
                })}
            </div>
        </div>
    );
};

export default SearchBar;
