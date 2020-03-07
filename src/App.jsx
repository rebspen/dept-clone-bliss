import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Views/Home"
import Work from "./Views/Work"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/work" component={Work}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
