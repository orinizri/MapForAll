import React from 'react';
import BtnComponent from "../btn/BtnComponent";
import Map from "../map/Map";
import "./homepage.css";
import api from '../api/api';
import { useState, useEffect } from 'react';
import LocationPage from '../location/LocationPage.js'

function Homepage() {
  const [places, setPlaces] = useState([]);
  const [placeOnMap, setplaceOnMap] = useState([]);

  const getAllPlaces = async () => {
    try {
      const response = await api.get('/places');
      if (response) {
        setPlaces(response.data)
      } else {
        console.log("errrrr")
      }
    } catch (e) {
      throw new Error('cannot get response from server :(')
    }
  }
  useEffect(() => {
    getAllPlaces()
  }, [])

  const bringPlaceFromMap = (val) => {
    setplaceOnMap(val);
    console.log(val)
  }


  return <div className='homepage-container'>
    {/* <div>map website</div> */}
    <div className="map">
      <Map data={places}  placeOnMap={bringPlaceFromMap} />
    </div>
    <LocationPage placeData={placeOnMap} /> 
  </div>;
}

export default Homepage;
