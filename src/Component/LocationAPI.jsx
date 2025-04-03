import React, { useState, useEffect } from "react";

export const LocationAPI = (props) => {
  const [places, setPlaces] = useState([]);
  const [inputPlaces, setInputPlaces] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  console.log(suggestions)

  useEffect(() => {
    fetch("/Car-Rental/Locations.json",{mode:"no-cors"})
      .then((response) => response.json())
      .then((data) => setPlaces(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputPlaces(value);
     console.log(value);
    if (value === "") {
      setSuggestions([]);
    } else {

      const filteredSuggestions = places.filter((city) =>
        // console.log(city);
        city.toLowerCase().includes(value.toLowerCase())

      );
      // console.log(filteredSuggestions)
      setSuggestions(filteredSuggestions.slice(0, 3));
    }
  };

  const selectSuggestion = (city) => {
    setInputPlaces(city);
    setSuggestions([]);
  };

  return (
    <div>
      <input className={props.inputstyle} type="text" placeholder={props.placeholder}
       value={inputPlaces} onChange={handleInputChange}  style={props.style}/>
      {suggestions.length > 0 && (
        <ul
          style={{ marginTop: "3px", maxHeight: "auto", maxWidth: "auto", listStyle: "none",}}>
          {suggestions.map((city, index) => (
            <li key={index} onClick={() => selectSuggestion(city)}
              style={{ backgroundColor: "white", textAlign: "start", cursor: "pointer", padding: "5px",
                borderBottom: "2px solid #ddd"}}>
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
