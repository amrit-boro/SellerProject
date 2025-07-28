import React, { useState } from "react";

const SearchWithLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [distance, setDistance] = useState("");
  const [unit, setUnit] = useState("meters");

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject("Geolocation is not supported by your browser.");
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const loc = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };
            setLocation(loc);
            resolve(loc);
          },
          (err) => {
            reject("Permission denied or location unavailable.");
          }
        );
      }
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      let userLocation = location;

      if (!userLocation) {
        userLocation = await getLocation(); // Ask for location if not already available
      }

      // You now have the location and form data — proceed with API call or further logic
      console.log("Distance:", distance);
      console.log("Unit:", unit);
      console.log("User Location:", userLocation);

      // You can call your API here using distance, unit, and userLocation
    } catch (err) {
      setError(err);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      style={{ background: "#eee", padding: "20px", width: "250px" }}
    >
      <label>Enter Distance:</label>
      <input
        type="number"
        placeholder="e.g. 10"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        required
      />

      <br />
      <br />

      <label>Unit:</label>
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="meters">Meters</option>
        <option value="km">Kilometers</option>
        <option value="mi">Miles</option>
      </select>

      <br />
      <br />

      <button type="submit">Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default SearchWithLocation;
