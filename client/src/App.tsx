import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Forms from './pages/Forms/Forms';
import Quotes from './pages/Quotes/Quotes';
import Login from './pages/Home/Login';
import NavBar from './pages/NavBar/NavBar';

const Links = ['Dashboard', 'Projects', 'Team'];

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <NavBar />

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/forms">Forms</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/quotes">
            <Quotes />
          </Route>
          <Route path="/forms">
            <Forms />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
