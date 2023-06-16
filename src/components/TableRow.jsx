import React, { Component } from 'react';
import TableCell from './TableCell/TableCell'

class TableRow extends Component {
    constructor(props){
      super(props);
      this.state = {
        cells: []
      };
    }
    
    addNewCell = () => {
      this.setState({
        cells: [...this.state.cells, <TableCell key = {this.state.cells.length + 1} />]
      })
    }
    
    render() {
    return (
      <React.Fragment>
      <tr>
        {this.state.cells}
      </tr>
      </React.Fragment>
    )
  }
}

export default TableRow;
