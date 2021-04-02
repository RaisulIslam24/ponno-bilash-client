import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Admin from "./components/Admin/Admin";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/checkout/:id">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
