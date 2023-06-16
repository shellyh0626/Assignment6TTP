import React, { Component } from 'react'
import { TableRow } from 'components';
import './table.css';
class Table extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <TableRow />
            <TableRow />
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;
