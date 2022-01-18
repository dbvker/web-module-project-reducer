import React, { useReducer } from 'react';
import reducer, { initialState } from '../reducers';
import { applyNumber, changeOperation, clearDisplay, memoryAdd, memoryCombine, memoryClear } from '../actions';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addNumberHandler = (number) => {
    dispatch(applyNumber(number));
  };

  const changeOperatorHandler = (operator) => {
    dispatch(changeOperation(operator));
  };

  const clearDisplayHandler = () => {
    dispatch(clearDisplay());
  };

  const memoryAddHandler = () => {
    dispatch(memoryAdd());
  };

  const memoryCombineHandler = () => {
    dispatch(memoryCombine());
  };

  const memoryClearHandler = () => {
    dispatch(memoryClear());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => memoryAddHandler()} />
              <CalcButton value={"MR"} onClick={() => memoryCombineHandler()} />
              <CalcButton value={"MC"} onClick={() => memoryClearHandler()} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => addNumberHandler(1)} />
              <CalcButton value={2} onClick={() => addNumberHandler(2)} />
              <CalcButton value={3} onClick={() => addNumberHandler(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => addNumberHandler(4)} />
              <CalcButton value={5} onClick={() => addNumberHandler(5)} />
              <CalcButton value={6} onClick={() => addNumberHandler(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => addNumberHandler(7)} />
              <CalcButton value={8} onClick={() => addNumberHandler(8)} />
              <CalcButton value={9} onClick={() => addNumberHandler(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => changeOperatorHandler("+")} />
              <CalcButton value={"*"} onClick={() => changeOperatorHandler("*")} />
              <CalcButton value={"-"} onClick={() => changeOperatorHandler("-")} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => clearDisplayHandler()} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
