// src/App.js

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  plusOne,
  minusOne,
  addNumber,
  minusNumber,
} from "./redux/modules/counter";

//component에서 redux의 스토어 조회 할때 useSelector사용

const App = () => {
  const [number, setNumber] = useState(0);

  const dispatch = useDispatch();
  const globalNumber = useSelector((state) => state.counter.number);

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setNumber(+value);
  };
  const plusHandler = () => {
    dispatch(addNumber(number));
  };
  const minusHandler = () => {
    dispatch(minusNumber(number));
  };

  return (
    <div>
      {globalNumber}
      <input type="number" onChange={onChangeHandler} />
      <button onClick={plusHandler}>+</button>
      <button onClick={minusHandler}>-</button>
    </div>
  );

  // const counterStore = useSelector(function (state) {
  //   return state
  // }
  // const number = useSelector(function(state)=>state.counter.number)
};

export default App;
