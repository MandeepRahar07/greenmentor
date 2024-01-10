
import './App.css';
import { Home } from './components/Dashboard';
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
        )}
      </div>
    </div>
  );
}
export default App;
