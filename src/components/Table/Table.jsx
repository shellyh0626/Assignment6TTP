import React, { Component } from 'react'
import { TableCell, TableRow } from 'components';
import './table.css';
import { useState, useEffect } from 'react';

const Table = () => {
  const [rows, setRows] = useState([]);
  const [numCols, setNumCols] = useState(1);

  const addCell = () => {
    setNumCols(numCols+1);
  }

  const redrawRows = () => {
    const newRows = [];
    for (let i = 0; i < rows.length; i++) {
      newRows.push(<TableRow numCols={numCols} />)
    }
    setRows(newRows);
  }

  useEffect(() => {redrawRows()}, [numCols]);

  const addRow = () => {
    setRows([...rows, <TableRow numCols={numCols} />]);
  }
        
  return (
    <div>
        <button onClick={addCell}>Add Cell</button>
        <button onClick={addRow}>Add Row</button>
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  )
}

export default Table;
