import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "./amalMap.css";
// import { placeDate } from "../data/skateboard-parks.json";
// console.log(placeDate.features)
export default function Map(props) {
  const [places, setPlaces] = useState([])
  const [viewport, setViewport] = useState({
    latitude: 31.7959242,
    longitude: 35.2119808,
    width: "50vw",
    height: "100vh",
    zoom: 7
  });

  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    console.log(props)
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
  
  useEffect(()=> {
    setPlaces(props.data)
  }, [props])

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
        {places && places.map(place => (
          <Marker
            key={place._id}
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
              <img className='location-marker' src="/pin.png" alt="Skate Park Icon" width="5px" />
            </button>
          </Marker>
        ))}

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


