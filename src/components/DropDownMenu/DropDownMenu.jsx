import React, { Component } from 'react'

class DropDownMenu extends Component {
  render() {
    return (
      <div>
        <select className='colorPicker'>
            <option value="">default</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yello">Yellow</option>
            <option value="pink">Pink</option>
            <option value="white">White</option>
        </select>
      </div>
    );
  };
}

export default DropDownMenu;
