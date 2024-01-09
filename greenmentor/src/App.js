import logo from './logo.svg';
import './App.css';
import { Barchart } from './components/Barchart';
import {  DoughnutChart } from './components/Bar2';
import Tablechart from './components/Table';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      {/* <Barchart/> */}
      {/* <DoughnutChart/> */}
      {/* <Tablechart/> */}
      <Home/>
    </div>
  );
}

export default App;
