import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Forms from './pages/Forms/Forms';
import Quotes from './pages/Quotes/Quotes';
import Login from './pages/Account/Login';
import NavBar from './pages/NavBar/NavBar';
import Signup from './pages/Account/Signup';
import Home from './pages/Home/Home';

const Links = ['Dashboard', 'Projects', 'Team'];

function App() {
  return (
       
    <div className="App">
      <Router>
      <div>
        <NavBar />

       
        <Switch>
          <Route path="/quotes">
            <Quotes />
          </Route>
          <Route path="/forms">
            <Forms />
          </Route>
          <Route path="/signup">
            <Signup />
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
