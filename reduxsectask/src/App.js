// import logo from './logo.svg';
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addNumber, minNumer } from "./action/plusMinAction";
import Todo from "./component/Todo";
import { useEffect } from "react";
import {getTodoData} from "./action/todoAction"
// import axios from 'axios';
// import { useEffect } from "react";

function App() {
  const resultNum = useSelector((state) => state.incerementDecerement);
  const dispatch = useDispatch();

  const [todata] = useSelector((state)=> state.todotask)

  useEffect(()=>{
    dispatch(getTodoData())

  },[dispatch])

  return (
    <>
      <button onClick={() => dispatch(addNumber())}>+</button>
      <input type="number" value={resultNum} />
      <button onClick={() => dispatch(minNumer())}>-</button>

      {todata.map((todod) => (
        <Todo key={todod.id} todod={todod} />
      ))}

      <br />
      {/* <Todo></Todo> */}
    </>
  );
}

export default App;
