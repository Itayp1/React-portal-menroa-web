import React, { useState } from "react";

const SearchBar = ({ searchBarDetails }) => {
  const { placeHolder = "הקלד לחיפוש", engineSearch = "https://google.com" } = searchBarDetails;
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (input.length > 0) {
      const searchLink = `${engineSearch}/search?q=${input}`;
      window.open(searchLink, "_blank");
    }
  };

  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <div className="searchBar">
          <i onClick={onSearchSubmit} type="submit" className="fa fa-chevron-left round-icon"></i>
          <input type="text" className="form-control text-input" value={input} onChange={handleInputChange} id="searchbar" placeholder={placeHolder} />
        </div>
      </form>

      <style jsx>{`
        .searchBar {
          width: 17%;
          min-width: 250px;

          margin: auto;
          display: flex;
          position: relative;
        }
        .text-input {
          border-radius: 20px;
        }
        .round-icon {
          border-radius: 60px;
          box-shadow: 0px 0px 2px #888;
          padding: 0.35em 0.45em;
          background-color: #fde5dc;
          position: absolute;
          left: 5px;
          top: 0.19em;
        }

        .round-icon:hover {
          background-color: #f1cdbf;
        }
      `}</style>
      {/* position: relative; */}
    </>
  );
};

// handleChange(event) {
//   this.setState({value: event.target.value});
// }

export default SearchBar;
