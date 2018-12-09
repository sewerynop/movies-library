import React, {Component} from 'react';
import Header from './Header';
import './Movie.css';

class Movie extends Component {
    render() {
        
        const {data} = this.props;
        const ListOfFilms = data.map(el => {
            return(
            <div className="Film" key={el.id}>
                <img src={el.poster} alt={el.title}/>
                <h3>{el.title}</h3>
                <button onClick={() => window.open(el.trailer)}>TRAILER</button>
            </div>
            )
        })

        return(
            <div className="ListMovie">
                <Header />
                {ListOfFilms}
            </div>
        )
    }
};

export default Movie;