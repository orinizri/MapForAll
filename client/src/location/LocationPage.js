import Info from '../info/Info';
import Post from '../post/Post';
import Card from "../card/Card.js";
import React, { useEffect, useState } from 'react';
import BtnComponent from '../btn/BtnComponent';

import './location.css'
function LocationPage(props) {
  const [placesInfo, setPlacesInfo] = useState([])
  const [selectedLanguage, setSelectedLanguage] = useState(0)
  console.log(props.placeData)

  useEffect(() => {
    setPlacesInfo(props.placeData)
  }, [props.placeData])

  const lang = ['Hebrew', 'English', 'Russian', 'Arabic'];

  return (<div className="location-container">
    {lang.map((oneLang, index) => {
      return (
        <BtnComponent id={index} title={oneLang} setSelectedLanguage={setSelectedLanguage} />
      )
    })}
    <h1>{lang[selectedLanguage]}</h1>
    <Card placeData={props.placeData[0]} />
    {/* <Post article="post article"/> */}
    <Info info="try" />
  </div>)
}

export default LocationPage;
