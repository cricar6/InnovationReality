import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";


import './App.sass';
import { Menu } from './components/Menu/Menu';
import { Activity } from './components/Activity/Activity';
import { PostIt } from './components/PostIt/PostIt';


function App() {
  return (
    <Router>
      <div>
        
        <Route path="/" component={Menu} />
        <Route path="/activity" component={Activity} />
        <Route path="/postit" component={PostIt} />
      </div>
    </Router>
  );
}

export default App;
