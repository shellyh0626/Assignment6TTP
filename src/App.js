import './App.css';
import { Table, TableRow, TableCell } from "./components";

function App() {
  return (
    <div className="App">
      <select className='colorPicker'>
        <option value="">default</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yello">Yellow</option>
        <option value="pink">Pink</option>
        <option value="white">White</option>
      </select>
      <Table/>
    </div>
  );
}

export default App;
