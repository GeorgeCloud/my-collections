import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBusinesses } from './features/businesses/businessesThunk'
import Collections from './components/Collections';
import AccessPage from './components/AccessPage';
import NavBar from './components/NavBar';
import Home from './components/Home';

import './styles/App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const searchTerm = useSelector(state => state.searchReducer.searchTerm)
  const dispatch   = useDispatch()

  useEffect(() => {
      (async function() {
        navigator.geolocation.getCurrentPosition(async function(position){
            dispatch(
                getBusinesses({ position: position, searchTerm: searchTerm })
            )
        })
    })()
  }, [searchTerm])

  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/collections' element={<Collections/>} />
          <Route path='/access' element={<AccessPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
