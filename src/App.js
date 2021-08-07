import React,{useState} from 'react';
import Tweet from './Tweet';

function App(){

  const [users,setUsers] = useState([
    {name : 'Dazzler',message : 'I am programmer'},
    {name : 'Trevor',message : 'I am Aggressive'},
    {name : 'Franklin',message : 'I am Awesome'}
  ])
  // const [isRed,setRed] = useState(false);
  // const [count,setCount] = useState(0);

  // function increment(){
  //     setCount(count + 1);
  //     setRed(!isRed);
      
  // }
  

  return(
    <div className = "app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    {/* /* <h1 className={isRed ? "red" : ""}>Change my Color</h1>
    <button onClick={increment}>Increment</button>
    <h1>{count}</h1> */ }
    </div>
  );
}

export default App;