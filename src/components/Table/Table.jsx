import React, { Component } from 'react'
import {TableRow } from 'components';
import './table.css';
import { useState, useEffect, useRef } from 'react';

const Table = () => {
  const [rows, setRows] = useState([<TableRow key={1} />]);
  const [numCols, setNumCols] = useState(1);
  const [color, setColor] = useState("white");
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef();
  isDraggingRef.current = isDragging;

  useEffect(() => {redrawRows()}, [numCols]);
  
  useEffect(() => {
    const handleMouseDown = () => {
      setIsDragging(true);
      console.log(isDragging)
    };
    const handleMouseUp = () => {
      setIsDragging(false);
      console.log(isDragging)
    };
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => console.log(isDragging),[isDragging])

  const addColumn = () => {
    setNumCols(numCols+1);
  }

  const redrawRows = () => {
    const newRows = [];
    for (let i = 0; i < rows.length; i++) {
      newRows.push(<TableRow numCols={numCols} changeCellColor={changeCellColor} changeCellColorOnDrag={changeCellColorOnDrag} key={i}/>)
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

  const changeCellColorOnDrag = (event) => {
    console.log("here:" + isDraggingRef.current)
    if (isDraggingRef.current) {
      event.target.style.backgroundColor = color;
    }
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

  //this function is called when the fill uncolored button is clicked
  //this function colors all the default colored cell with the color
  //that is currently selected
  const fillUncoloredCell = ()=>{
    const tableCells = document.querySelectorAll('.Table td');
    tableCells.forEach((cell) => {
      if(cell.style.backgroundColor === "" || cell.style.backgroundColor === "white"){
        cell.style.backgroundColor = color;
      }
    });
  }

  return (
    <div className='Table'>
        <button className="button" onClick={addColumn}>Add Column</button>
        <button className="button" onClick={addRow}>Add Row</button>
        <button className="button" onClick={removeRow}>Remove Row</button>
        <button className="button" onClick={removeColumn}>Remove Column</button>        <button className="button" onClick={colorAll}>Color All</button>
        <button className="button" onClick={fillUncoloredCell}>Fill Uncolored</button>
        <button className="button" onClick={resetColor}>Reset Color</button>
        <div className='colorPicker'>
        <label>Select color:</label>
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
