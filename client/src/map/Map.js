import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import "./amalMap.css";
// import { placeDate } from "../data/skateboard-parks.json";
// console.log(placeDate.features)
export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 31.7959242,
    longitude: 35.2119808,
    width: "100vw",
    height: "100vh",
    zoom: 7
  });

  // let placeDate = JSON.parse(placeDate);

  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPlace(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={"pk.eyJ1IjoiaG9wZS1tYXNoYWwiLCJhIjoiY2t5ajViMnMxMDRxdjJvbnpsYXBtODhzdiJ9.E8sfygVq1dwcUv-jHyj0rw"}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      > 
        {/* {placeDate.features.map(place => (
          <Marker
            key={place.PLACE_ID}
            latitude={place.coordinates[0]}
            longitude={place.coordinates[1]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPlace(place);
              }}
            >
              <img src="/pin.png" alt="Skate Park Icon" />
            </button>
          </Marker>
        ))} */}

        {selectedPlace ? (
          <Popup
            latitude={selectedPlace.coordinates[0]}
            longitude={selectedPlace.coordinates[1]}
            onClose={() => {
              setSelectedPlace(null);
            }}
          >
            <div>
              <center>
                <img src={selectedPlace.images[0]} alt="place" width="200px"/>
                <h2>{selectedPlace.name}</h2>
              </center>
            </div>
          </Popup>
        ) : null} 
      </ReactMapGL>
    </div>
  );
}


