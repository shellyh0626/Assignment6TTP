import React, { Component } from 'react'
import { TableRow } from 'components';
import './table.css';
class Table extends Component {
  constructor(props){
    super(props);
    this.state ={
      rows: []
    };
  }

  addNewRow = () => {
    this.setState({
      rows: [...rows, <TableRow key = {this.staterows.length + 1} />]
    })
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.state.rows}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;
