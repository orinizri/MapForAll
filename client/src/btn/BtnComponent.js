import React from 'react';
import './btn.css'
const BtnComponent = (props) => {



    return (
        <div className="">
            <button className="button-15" onClick={() => props.setSelectedLanguage(props.id)}>
                {props.title}
            </button>
        </div>
    );
}

export default BtnComponent;
