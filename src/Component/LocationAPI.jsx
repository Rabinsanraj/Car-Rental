import React, { useState, useEffect } from "react";

export const LocationAPI = (props) => {
  const [cities, setCities] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("/Car-Rental/Locations.json")
      .then((response) => response.json())
      .then((data) => setCities(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() === "") {
      setSuggestions([]);
    } else {
      const filteredSuggestions = cities.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions.slice(0, 5));
    }
  };

  const selectSuggestion = (city) => {
    setInputValue(city);
    setSuggestions([]);
  };

  return (
    <div>
      <input
        className="form-control"
        type="text"
        placeholder={props.placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <ul
          style={{
            marginTop: "3px",
            maxHeight: "auto",
            maxWidth: "auto",
            listStyle: "none",
          }}
        >
          {suggestions.map((city, index) => (
            <li
              key={index}
              onClick={() => selectSuggestion(city)}
              style={{
                backgroundColor: "white",
                textAlign: "start",
                cursor: "pointer",
                padding: "5px",
                borderBottom: "2px solid #ddd",
              }}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
