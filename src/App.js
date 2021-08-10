import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Video from "./components/Video";


function App() {

  // Write javascript code here
  const [counter,setCounter] = useState(0);
  const [toggle,setToggle] = useState(false);
  
  const incrementer = () => {
    // setCounter(prev => prev + 1);
    setCounter(counter + 1)
    console.log(counter);
  }
  const decrementer = () => {
    // setCounter(prev => prev - 1);
    setCounter(counter - 1);
    console.log(counter);
  }

  const toggler = () => {
    setToggle(prev => !prev);
  }
  return (
    <div className="App">
      {/* <h1 className = {toggle ? "active" : ""}>Hello React</h1>
     <h1>Counter {counter} </h1>
     <button onClick = {incrementer}>+</button>
     <button onClick = {decrementer}>-</button>
     <button onClick = {toggler}>toggle</button> */}
     <Nav toggle = {toggle} />
     <Video nr = {counter} setToggle = {toggler} />
    </div>
  );
}

export default App;
