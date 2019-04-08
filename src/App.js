import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Header, Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Profile      from './components/profile.component'
import ProfileEdit  from './components/profile-edit.component'
import Login  from './components/login.component'
import Register  from './components/register.component'
import ScrumsList   from './components/scrums-list.component'
import ScrumEdit    from './components/scrum-edit.component'
import ScrumCreate  from './components/scrum-create.component'
import NavHeaderLogged  from './components/nav-header-logged.component'
import NavHeaderNotLogged  from './components/nav-header-not-logged.component'
import Welcome    from './components/welcome.component'


class App extends Component {

  constructor(){
    super();
    this.state = {
      logged: false
    }
  }

  render() {
    return (
        <Router>      
          <div className="container">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <img src="https://ullizee.files.wordpress.com/2013/01/scrum-org-logo-circles.png" width="30" height="30" alt="CodingTheSmartWay.com" />
              <Link to="/" className="navbar-brand">navbar in App.js</Link>
              {this.state.logged ? 
                  <NavHeaderLogged updatePageShowing={this.updatePageShowing}/> 
                  : <NavHeaderNotLogged updatePageShowing={this.updatePageShowing}/>}
            </nav>

            <br/>

            {this.state.logged ? 
              <Route path="/" exact omponent={ ScrumsList } />
              : <Route path="/" exact component={ Welcome } />}

            <Route path="/edit/:id"     component={ ScrumEdit } />
            <Route path="/create"       component={ ScrumCreate } />
            <Route path="/profile"      component={ Profile } />
            <Route path="/profile/edit" component={ ProfileEdit } />            
            <Route path="/login"        component={ Login } />
            <Route path="/register"     component={ Register } />

          </div>
        </Router>
    );
  }
}

export default App;