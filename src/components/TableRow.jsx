import React, { Component } from 'react';
import TableCell from './TableCell/TableCell'

const TableRow = ({numCols}) => {
  const popCells = () => {
    var cells = [];
    for (let i = 0; i < numCols; i++) {
      cells.push(<TableCell />);
      return cells;
    }
  }
  
  return (
    <tr>{popCells()}</tr>
  )
}

export default TableRow;
