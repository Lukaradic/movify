import { useEffect } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import API from './helper/API'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Watchlist from './pages/Watchlist'
import Navigation from './components/navigation/Navigation'

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/movies' exact>
          <Movies />
        </Route>
        <Route path="/watchlist" exact>
          <Watchlist />
        </Route>
      </Router>
    </div>
  );
}

export default App;
