import React from 'react';
import './App.css';
import { Switch, Route, Redirect} from "react-router-dom";
import Home from "./pages/Home"
import Sorry from "./pages/Sorry"
import Flights from "./pages/Flights"
import SingleFlight from './pages/SingleFlight';

const App = (props) => {
  return (
    <Switch>
      
      <Route path='/home' component={Home} />
      <Route path='/sorry' component={Sorry} />
      <Route path='/flights' component={Flights} />
      <Route exact path="/flight/:id" component={SingleFlight} />
      <Redirect from='/' to='/home' />
      
    </Switch>
  )
}

export default App;
