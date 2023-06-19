import React, { Component } from 'react'
import './tableCell.css'

const TableCell = ({changeCellColor, changeCellColorOnDrag}) => {

  return (
    <td onMouseOver={(e) => changeCellColorOnDrag(e)} onMouseDown={(e) => changeCellColor(e)}></td>
  )
}

export default TableCell;
