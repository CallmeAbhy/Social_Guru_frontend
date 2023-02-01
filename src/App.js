
import Landing from './components/Landing';
import './App.css';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Employee from './components/Employee';
import Organization from './components/Organization';
import NavBar from './components/NavBar';
import You from './components/You';
import Notification from './components/Notification';
import Connect from './components/Connect';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <Nav />
        <NavBar />
      </header>
      
      <main>
      <Switch>
      <Route path="/" exact component={ Landing }></Route>
      <Route path="/Login" component={ Login }></Route>
      <Route path="/Employee" component={ Employee }></Route>
      <Route path="/Organization" component={ Organization }></Route>
      <Route path="/Notification" component={ Notification }></Route>
      <Route path="/You" component={ You }></Route>
      <Route path="/Connect" component={ Connect }></Route>

      </Switch>
      </main>
      </BrowserRouter>

    </div>
  );
}

export default App;
