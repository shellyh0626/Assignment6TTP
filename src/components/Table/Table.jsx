import React, { Component } from 'react'
import {TableRow } from 'components';
import './table.css';
import { useState, useEffect } from 'react';

const Table = () => {
  const [rows, setRows] = useState([]);
  const [numCols, setNumCols] = useState(1);
  const [color, setColor] = useState("white");

  useEffect(() => {redrawRows()}, [numCols]);

  const addColumn = () => {
    setNumCols(numCols+1);
  }

  const redrawRows = () => {
    const newRows = [];
    for (let i = 0; i < rows.length; i++) {
      newRows.push(<TableRow numCols={numCols} changeCellColor={changeCellColor} key={i}/>)
    }
    setRows(newRows);
  }

  const addRow = () => {
    setRows([...rows, <TableRow numCols={numCols} changeCellColor={changeCellColor} key={rows.length}/>]);
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

  useEffect(() => {redrawRows()}, [color])

  const changeCellColor = (event) => {
    event.target.style.backgroundColor = color;
  }


  //When the color All button is clicked, the cells color will change
  //based on the currently selected color
  const colorAll = () => {
    //gets all the cell from the table and iterates using forEach to change the color
    const tableCells = document.querySelectorAll('.Table td');
    tableCells.forEach((cell) => {
      cell.style.backgroundColor = color;
    });
  };


  //Resets the color of all the cells to default
  const resetColor =()=>{
    const tableCells = document.querySelectorAll('.Table td');
    tableCells.forEach((cell) => {
      cell.style.backgroundColor = "";
    });
  }


  return (
    <div className='Table'>
        <button className="button" onClick={addColumn}>Add Column</button>
        <button className="button" onClick={addRow}>Add Row</button>
        <button className="button" onClick={removeRow}>Remove Row</button>
        <button className="button" onClick={removeColumn}>Remove Column</button>
        <button className="button" onClick={colorAll}>Color All</button>
        <button className="button" onClick={resetColor}>Reset Color</button>
        <div className='colorPicker'>
        <select className={`select-color ${color}`} onChange={handleColorChange}>
            <option value="white">default</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="pink">Pink</option>
        </select>
      </div>
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  )
}

export default Table;
