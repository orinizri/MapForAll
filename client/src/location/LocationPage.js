import React from 'react';
import Info from '../info/Info';
import Post from '../post/Post';
import Card from "../card/Card.js"
import './location.css'
function LocationPage(props) {

  
  return (<div className="location-container">
    <Card placeData={props.placeData[0]}/>
    {/* <Post article="post article"/> */}
    <Info info="try"/>
  </div>)
}

export default LocationPage;
