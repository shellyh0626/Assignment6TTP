import React, { Component } from 'react'
import './tableCell.css'

const TableCell = ({changeCellColor}) => {

  return (
    <td onClick={(e) => changeCellColor(e)}></td>
  )
}

export default TableCell;
