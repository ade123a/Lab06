
import logo from './logo.svg';
import './App.css';
import EngineeringTopics from './EngineeringTopics';

function App() {
  let currentYear = new Date().getFullYear();
  let isLoggedin = true;
  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      

      <p>Current Year: {currentYear}</p>

      
      {isLoggedin ? <p>Welcome back!</p> : <p>Please Login</p>}

      <EngineeringTopics />
    </div>
  )
}

export default App;


