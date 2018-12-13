import React, { Component } from 'react';
import Movie from './Movie/Movie';
import Navigation from './Navigation/Navigation';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterMovie: [],
      category: ""
    }
  }

  componentDidMount() {
    const {data} = this.props;
    const param = this.state.category;
      if(param === "") {
        this.setState({
          filterMovie: this.props.data,
        });
      }
      else{
        const ListFilm = data.map(el => {
          return el.category === param ? el : null;
        });
        console.log(ListFilm);
        this.setState({
          filterMovie: ListFilm
        });
      }
  }

  categoryFilter = (categoryParam) => {
    this.setState({
      category: categoryParam
    });
    const {data} = this.props;

      if(categoryParam === "") {
        this.setState({
          filterMovie: this.props.data,
        });
      }
      else{

        let ListFilm = [];

        data.map(el => {
          return el.category === categoryParam ? ListFilm.push(el) : null;
        });
        console.log(ListFilm);
        this.setState({
          filterMovie: ListFilm
        });
      }
  }

  render() {
    return (
      <div className="App">
      <Navigation handleCategoryFilter={this.categoryFilter}/>
      <Movie data={this.state.filterMovie}/>
      </div>
    );
  }
}

export default App;
