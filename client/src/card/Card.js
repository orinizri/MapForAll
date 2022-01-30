import React, { useEffect, useState } from 'react';
import "./card.css"

function Card(props) {
    const [placesInfo, setPlacesInfo] = useState([])
    console.log(props.placeData)

    useEffect(() => {
        setPlacesInfo(props.placeData)
    }, [props.placeData])

    return <div className='box-container'>

        {props.placeData ? <> {props.placeData.map(place => {
            return <div className='box'>
                <p>  {place.text}</p>
            </div>
        })}</> : <div className='box'></div>
        }

    </div>;
}

export default Card;
