import React, { useState, useEffect } from "react";

export const CarAPI = (props) => {
  const [car, setCars] = useState([]);
  const [inputCars, setInputCars] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  console.log(suggestions)

  useEffect(() => {
    fetch("/Car-Rental/Car.json",{mode:"no-cors"})
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputCars(value);
     console.log(value);
    if (value === "") {
      setSuggestions([]);
    } else {

      const filteredSuggestions = car.filter((car) =>
        // console.log(car);
        car.toLowerCase().includes(value.toLowerCase())

      );
      // console.log(filteredSuggestions)
      setSuggestions(filteredSuggestions.slice(0, 3));
    }
  };

  const selectSuggestion = (car) => {
    setInputCars(car);
    setSuggestions([]);
  };

  return (
    <div>
      <input className={props.inputstyle} type="text" placeholder={props.placeholder}
       value={inputCars} onChange={handleInputChange}  style={props.style}/>
      {suggestions.length > 0 && (
        <ul style={{ marginTop: "3px", maxHeight: "auto", maxWidth: "auto", listStyle: "none",}}>
          {suggestions.map((car, index) => (
            <li key={index} onClick={() => selectSuggestion(car)}
              style={{ backgroundColor: "white", textAlign: "start", cursor: "pointer", padding: "5px",
                borderBottom: "2px solid #ddd"}}>
              {car}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
