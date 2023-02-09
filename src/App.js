import NavBar from './components/NavBar';
import Home from './components/Home';
import Collections from './components/Collections';
import './styles/App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/collections' element={<Collections/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
