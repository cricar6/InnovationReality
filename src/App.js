
import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import { withFirebase } from './components/Firebase';

import './App.sass';
import { Menu } from './components/Menu/Menu';
import { Activity } from './components/Activity/Activity';
import { PostIt } from './components/PostIt/PostIt';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (

        <Router>
          <div>
            <Route path="/" component={Menu} />
            <Route exact path="/" component={Activity} />
            <Route path="/postit" component={PostIts} />
          </div>
        </Router>

    );

  }
}

const PostIts = withFirebase(PostIt);

export default App;
