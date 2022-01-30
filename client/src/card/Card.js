import React from 'react';
import "./card.css"

function Card(props) {
    console.log(props.placeData)
    return <div className='box-container'>
        {props.placeData?<> { props.placeData.map(place => {
            return <div className='box'>
              <p>  {place.text}</p>
            </div>
        })}</>:<div className='box'></div>
        }
    </div>;
}

export default Card;
