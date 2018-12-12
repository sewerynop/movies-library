import React, {Component} from 'react';
import Header from './Header';
import './Movie.css';

class Movie extends Component {
    render() {
        
        const {data} = this.props;
        const ListOfFilms = data.map(el => {
            return(
            <div className="Film" key={el.id}>
                <div className="FilmContent">
                    <img className="image" src={el.poster} alt={el.title}/>
                    <div className="middle">
                        <div className="text">{el.title}</div>
                    </div>
                </div>
                <h3 className="TitleMovie">{el.title}</h3>
                    <button className="button" onClick={() => window.open(el.trailer)}>TRAILER</button>
            </div>
            )
        })

        return(
            <div className="ListMovie">
                <Header />
                <div className="AllMovies">
                    {ListOfFilms}
                </div>
            </div>
        )
    }
};

export default Movie;