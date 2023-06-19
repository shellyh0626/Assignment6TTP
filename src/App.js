import {Table} from "./components";
import React,{Component} from "react";
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="App">
        <Table/>
      </div>
    );
  };
}

export default App;
