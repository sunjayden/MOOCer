import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Navbar from './components/CustomNavbar';

class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home}/>
            <Route path="/catalog" component={Catalog}/>
          </div>
        </Router>
    );
  }
}

export default App;