import './App.css';
import Dashboard from './MyComponents/Dashboard';
import Loginpage from './MyComponents/Loginpage';
import Sign from './MyComponents/Sign';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (

    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/signup" element={<Sign />} />
          </Routes>
        </div>
      </Router>

      {/* <Dashboard/> */}

      {/* <Loginpage /> */}
      {/* <Sign/> */}
    </>

  );
}

export default App;
