import React, { Component } from 'react';
import PinDropIcon from '@mui/icons-material/PinDrop';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';

export class BtnComponent extends Component {
  render() {
    return (
      <div className="Btn">
        <PushPinOutlinedIcon color="secondary" fontSize="large" />
        <br />
        <br />
        <PinDropIcon color="error" fontSize="large" />
        <br />
        <br />
        <button>
          <PinDropIcon color="secondary" fontSize="large" />
        </button>
      </div>
    );
  }
}

export default BtnComponent;
