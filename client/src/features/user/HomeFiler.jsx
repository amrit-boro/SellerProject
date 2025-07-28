import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  updateDistance,
  updateError,
  updateItemName,
  updatelat,
  updatelng,
  updatelocation,
  updateUnit,
} from "../filterSlice";
import { set } from "react-hook-form";

const Sidebar = () => {
  const [distance, setDistance] = useState("");
  const [unit, setUnit] = useState("m");
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [itemName, setItemName] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const isAuthenticate = useSelector((state) => state.user.isAuthenticate);

  const filterState = useSelector((state) => state.filter);

  const {
    // distance,
    // unit,
    lat,
    lng,
    // filterError,
    // filteritemName,
    // filterlocation,
  } = filterState;
  const handleSearch = async () => {
    if (!isAuthenticate) {
      console.log("🔒 User not authenticated. Redirecting to login...");
      navigate("/login");
      return;
    }

    if (!distance) {
      alert("Please enter a distance");
      return;
    }

    console.log("📏 Distance entered:", distance);
    console.log("📐 Unit selected:", unit);

    try {
      let userLocation = location;

      if (!userLocation) {
        console.log(
          "📍 Location not yet available. Requesting user location..."
        );

        if (!navigator.geolocation) {
          alert("Geolocation is not supported by your browser.");
          console.error("❌ Geolocation not supported.");
          return;
        }

        userLocation = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude, accuracy } = position.coords;

              console.log("✅ Raw Location Data:", {
                latitude,
                longitude,
                accuracy: `${accuracy} meters`,
              });

              // if (accuracy > 500) {
              //   alert(
              //     `⚠️ Your location is not very accurate (${Math.round(
              //       accuracy
              //     )} meters).\n\nFor better accuracy, please:\n\n- Use a mobile device\n- Enable GPS\n- Make sure you're outside or near a window`
              //   );
              // }

              const loc = { latitude, longitude };
              setLocation(loc);
              resolve(loc);
            },
            (err) => {
              console.error("❌ Geolocation error:", err);
              reject("Permission denied or location unavailable.");
            },
            {
              enableHighAccuracy: true, // Use GPS if possible
              timeout: 10000,
              maximumAge: 0,
            }
          );
        });
      } else {
        console.log("📍 Using previously saved location:", userLocation);
      }

      console.log("🚀 Final search data:");
      console.log(" - Distance:", distance);
      console.log(" - Unit:", unit);
      console.log(" - Latitude:", userLocation.latitude);
      console.log(" - Longitude:", userLocation.longitude);

      dispatch(updateItemName(itemName));
      dispatch(updatelat(userLocation.latitude));
      dispatch(updatelng(userLocation.longitude));
      dispatch(updateDistance(distance));
      dispatch(updateUnit(unit));
    } catch (err) {
      console.error("❌ Location Error:", err);
      // dispatch(updateError(err));
      setError(err);
      alert("Location Error: " + err);
    }
  };

  return (
    <aside
      style={{
        width: "250px",
        padding: "20px",
        backgroundColor: "#f1f1f1",
        borderRight: "1px solid #ccc",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <label>
        Item:
        <input
          type="text"
          placeholder="Search for items..."
          style={{ width: "90%", padding: "8px", marginTop: "5px" }}
          // value={filteritemName}
          value={itemName}
          // onChange={(e) => dispatch(updateItemName(e.target.value))}
          onChange={(e) => setItemName(e.target.value)}
        />
      </label>
      <label>
        Enter Distance:
        <input
          type="number"
          value={distance}
          // onChange={(e) => dispatch(updateDistance(e.target.value))}
          onChange={(e) => setDistance(e.target.value)}
          placeholder="e.g. 10"
          style={{ width: "90%", padding: "8px", marginTop: "5px" }}
        />
      </label>

      <label>
        Unit:
        <select
          value={unit}
          // onChange={(e) => dispatch(updateUnit(e.target.value))}
          onChange={(e) => setUnit(e.target.value)}
          style={{ padding: "8px", width: "100%", marginTop: "5px" }}
        >
          <option value="km">Kilometers</option>
          <option value="m">Meters</option>
        </select>
      </label>

      <button
        onClick={handleSearch}
        style={{
          padding: "10px",
          cursor: "pointer",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Search
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        {distance}
        {/* {filteritemName} */}
        {itemName}
        latitue: {lat}
        lng : {lng}
      </div>
    </aside>
  );
};

export default Sidebar;
