import React from 'react';
import BtnComponent from "../btn/BtnComponent";
import Map from "../map/Map";
import "./homepage.css";
import api from '../api/api';
import { useState, useEffect } from 'react';


function Homepage() {
  const [places, setPlaces] = useState([]);

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



  return <>
    <div>map website</div>
    <div className="map-amal">
      <Map data={places} />
    </div>
  </>;
}

export default Homepage;
