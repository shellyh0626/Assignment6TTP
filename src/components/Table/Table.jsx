import React, { Component } from 'react'
import {TableRow } from 'components';
import './table.css';
import { useState, useEffect } from 'react';

const Table = () => {
  const [rows, setRows] = useState([]);
  const [numCols, setNumCols] = useState(1);
  const [color, setColor] = useState("white");
  const addColumn = () => {
    setNumCols(numCols+1);
  }

  const redrawRows = () => {
    const newRows = [];
    for (let i = 0; i < rows.length; i++) {
      newRows.push(<TableRow numCols={numCols} key={i}/>)
    }
    setRows(newRows);
  }

  useEffect(() => {redrawRows()}, [numCols]);

  const addRow = () => {
    setRows([...rows, <TableRow numCols={numCols} key={rows.length}/>]);
  }

  //removes a row from the grid utilizing the slice method
  const removeRow = () =>{
    setRows(rows.slice(0,-1));
  }

  //removes column from the grid as long as the numCol is more than 0
  //so the program doesnt try to set the numCols to an negative number
  const removeColumn = () =>{
    if(numCols>0){
      setNumCols(numCols-1);
    }
  }

  //Updates the color whenever it is changed in the dropdown menu
  const handleColorChange= (event) =>{
    setColor(event.target.value);
  }
  {console.log(color)}
  return (
    <div>
      <div className='colorPicker'>
        <select onChange={handleColorChange}>
            <option value="white">default</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yello">Yellow</option>
            <option value="pink">Pink</option>
            <option value="white">White</option>
        </select>
      </div>
        <button onClick={addColumn}>Add Column</button>
        <button onClick={addRow}>Add Row</button>
        <button onClick={removeRow}>Remove Row</button>
        <button onClick={removeColumn}>Remove Column</button>
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  )
}

export default Table;
