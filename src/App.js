import React, { Component } from 'react';
import Movie from './Movie/Movie';
import Navigation from './Navigation/Navigation';
import Komponent from './Komponent/Komponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
       <Movie data={this.props.data}/>
      </div>
    );
  }
}

export default App;
