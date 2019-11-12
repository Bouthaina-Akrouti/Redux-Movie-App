import React from "react";
import MovieCard from './MovieCard';
import "./App.css";
import { connect } from "react-redux";
import Nav from "./Nav";
import { addMovie } from "./actions/MoviesActions";


function App(props) {
  const ajout = () => {
    var newId = Math.round(Math.random() * 1000);
    var newImage = prompt("Movie Image");
    var newTitle = prompt("Movie Title");
    var newYear = prompt("Movie Year");
    var newRating = prompt("Movie Rating");

    props.add({ id: newId, image: newImage, title: newTitle, year: newYear, rating: newRating});
  };

  return (
      <div className="App">
        <Nav movie={props.movie}/>
        <div className="movies">
          {props.movies.map(movie => <MovieCard movie={movie}/>)}
        </div>
        <button className="btn" onClick={(movie) => ajout(movie)}>
          +
        </button>
      </div>

  );
}

const mapDispatchToProps = dispatch => {
  return {
    add: movie => dispatch(addMovie(movie))
  };
};

const mapStateToProps = state => {
  return {
    movies: state.movie
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
