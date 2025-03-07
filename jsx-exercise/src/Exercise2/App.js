

import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  let currentYear = new Date().getFullYear();
  let isLoggedin = true;
  let titles = ['Home Page', 'About Us', 'Contact Us']
  let messages = {
    home: 'Welcome to our Website',
    about: 'We are passionate about delivering quality experiences.',
    contact: 'Feel free to reach out to us via email or phone.'
  };
  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>

      <p>Current Year: {currentYear}</p>

      {isLoggedin ? <p>Welcome back!</p> : <p>Please Login</p>}
      
      <Home  title={titles[0]} message={messages.home}/>
      <About title={titles[1]} message={messages.about}/>
      <Contact title={titles[2]} message={messages.contact}/>

      <Contact />
    </div>
  )
}

export default App;


