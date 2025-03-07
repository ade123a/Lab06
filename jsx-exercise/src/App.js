import logo from './logo.svg';
import './App.css';

function App() {
  let currentYear = new Date().getFullYear();
  let isLoggedin = true;
  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      

      <p>Current Year: {currentYear}</p>

      
      {isLoggedin ? <p>Welcome back!</p> : <p>Please Login</p>}
    </div>
  )
}

export default App;



/*
return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
*/