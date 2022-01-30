import React from 'react';
import BtnComponent from "../btn/BtnComponent";
import Map from "../map/Map";
import "./homepage.css";


function Homepage() {
  return <>
  <div>map website</div>
   <div className="map-amal"> <Map/> <BtnComponent className="btn"/> </div> </> ;
}

export default Homepage;
