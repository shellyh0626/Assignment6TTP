import React, { Component } from 'react';
import TableCell from './TableCell/TableCell'

const TableRow = ({numCols, changeCellColor}) => {
  const popCells = () => {
    var cells = [];
    for (let i = 0; i < numCols; i++) {
        cells.push(<TableCell changeCellColor={(e) => changeCellColor(e)} key={i}/>);
    }
    return cells;
  }
  
  return (
    <tr>{popCells()}</tr>
  )
}

export default TableRow;
