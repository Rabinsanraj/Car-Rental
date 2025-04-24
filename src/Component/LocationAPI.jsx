import React, { useState, useEffect } from "react";

export const LocationAPI = (props) => {
  const [places, setPlaces] = useState([]);
  const [inputPlaces, setInputPlaces] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("/Car-Rental/Locations.json")
      .then((response) => response.json())
      .then((data) => setPlaces(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputPlaces(value);

    if (value === "") {
      setSuggestions([]);
    } else {
      const filteredSuggestions = places.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions.slice(0, 3));
    }
  };

  const selectSuggestion = (city) => {
    setInputPlaces(city);
    setSuggestions([]);
  };

  return (
    <div>
      <input className={props.inputstyle}type="text"
        placeholder={props.placeholder}value={inputPlaces}onChange={handleInputChange}/>
      {suggestions.length > 0 && (
        <ul style={{marginTop: "3px",listStyle: "none",position: "absolute",zIndex: "5",
        width: "100%",backgroundColor: "white",paddingLeft: 0}}>{suggestions.map((city, index)=>
          (<li key={index}onClick={() => selectSuggestion(city)}style={{textAlign: "start",
           cursor: "pointer",padding: "5px",borderBottom: "2px solid #ddd"}}>{city}
          </li>
          ))}
        </ul>
      )}</div>
  );
};
