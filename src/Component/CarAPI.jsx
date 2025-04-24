import React, { useState, useEffect } from "react";

export const CarAPI = ({ inputstyle, placeholder }) => {
  const [cars, setCars] = useState([]);
  const [inputCars, setInputCars] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("/Car-Rental/Car.json")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCars(data);
        } else {
          console.error("Unexpected data format:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputCars(value);

    if (!value) {
      setSuggestions([]);
    } else {
      const filteredSuggestions = cars.filter((car) =>
        car.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions.slice(0, 3));
    }
  };

  const selectSuggestion = (car) => {
    setInputCars(car);
    setSuggestions([]);
  };

  return (
    <div>
      <input className={inputstyle}type="text"
        placeholder={placeholder}value={inputCars} onChange={handleInputChange}/>
      {suggestions.length > 0 && (
        <ul style={{marginTop: "2px",listStyle: "none",position: "absolute",
            zIndex: "5",width: "100%",backgroundColor: "white",padding: 0,}}>
            {suggestions.map((car, index) => (
            <li key={index}
              onClick={() => selectSuggestion(car)}
              style={{backgroundColor: "white",textAlign: "start",
                cursor: "pointer",padding: "5px",borderBottom: "2px solid #ddd",
              }}>{car}
            </li>
          ))}
        </ul>
        )}</div>
  );
};
