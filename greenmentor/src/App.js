import logo from './logo.svg';
import './App.css';
import { Barchart } from './components/Barchart';
import { DoughnutChart } from './components/Bar2';
import Tablechart from './components/Table';
import { Home } from './components/Home';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gettingDataSuccess } from './redux/actions';

function App() {
  const data = useSelector((store) => store.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gettingDataSuccess());
  }, [dispatch]);

  return (
    <div className="App">
      <div>
        {data.length > 0 ? (
          <Home/> 
        ) : (
          <p>Loading data...</p>
          /* You can replace the loading message with any other UI element */
        )}
        {/* <DoughnutChart/> */}
        {/* <Tablechart/> */}
        {/* <Home/> */}
      </div>
    </div>
  );
}

export default App;
