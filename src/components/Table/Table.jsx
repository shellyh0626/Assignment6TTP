import React, { Component } from 'react'
import { TableCell, TableRow } from 'components';
import './table.css';
import { useState, useEffect } from 'react';

const Table = () => {
  const [rows, setRows] = useState([]);
  const [numCols, setNumCols] = useState(1);

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
  return (
    <div>
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
