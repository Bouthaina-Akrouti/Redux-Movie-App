import React from 'react'
import { deleteMovie, updateMovie } from "./actions/MoviesActions";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Rating from './Rating'

const MovieCard = (props) => {
    const edit = x => {
        var Image = prompt(" New Movie Image");
        var Title = prompt("New Movie Title");
        var Year = prompt("New Movie Year")
        var Rating = prompt("Movie Rating");

        props.update({id: x.id, image: Image, title: Title, year: Year, rating: Rating});
      }
    return(
        <div key={props.movie.id}>
            <img
              className="movie-img"
              src={props.movie.image}
              style={{ width: "215px", height: "290px" }}
            >
            </img>
            <h2 className="title">{props.movie.title}</h2>
            <h4 className="annee">{props.movie.year}</h4>
            <Rating count={props.movie.rating}/>

            <Link to={`/movie/${props.movie.id}`}><button className="btn">Movie Description</button></Link>
            <button className="btn" onClick={() => edit(props.movie)}>Edit</button>
            <button className="btn" onClick={() => props.delete(props.movie.id)}>Remove</button>
          </div>
    )
}
const mapDispatchToProps = dispatch => {
    return{
    delete: id => dispatch(deleteMovie(id)),
    update: movie => dispatch(updateMovie(movie))
    }
}
export default connect(null, mapDispatchToProps)(MovieCard)