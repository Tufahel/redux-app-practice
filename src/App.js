import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decNumber, incNumber } from './actions/index';

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch({});
  return (
    <div className="App">
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>

        <div className="quantity">
          <a href="/" className="quantity-minus" title="Decrement" onClick={(event) => { event.preventDefault(); dispatch(decNumber(5)); }}><span>-</span></a>
          <input type="text" name="quantity" className="quantity-input" value={myState} />
          <a href="/" className="quantity-plus" title="Increment" onClick={(event) => { event.preventDefault(); dispatch(incNumber()); }}><span>+</span></a>
        </div>
      </div>
    </div>
  );
}

export default App;
