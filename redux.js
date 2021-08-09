
console.clear();

function App(){
  return (
    <div>
      <h1>Hello</h1>
     <Nav/> 
      <Home/>
    </div>
  ) 
}

function Nav(){
  return (
    <nav>
      <h1>Logo</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

function Home(){
  return(
    
    <div>
  <h2>join our magic club</h2>
  <p>Harry Potter geek REJOICE</p>
  <button>Buy your shit</button>
  
</div>
  )
}



ReactDOM.render(<App/>,document.querySelector('#main'));
