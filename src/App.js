import { DropDownMenu, Table, TableRow, TableCell } from "./components";
import React,{Component} from "react";
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="App">
        <DropDownMenu/>
        <Table/>
      </div>
    );
  };
}

export default App;
