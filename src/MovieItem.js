import React from 'react'
import { connect } from 'react-redux'

const MovieItem = (props) => {
    const movie = props.movies.filter(el => String(el.id) == props.match.params.id)[0]

    return (
        <div>
            <img src={movie.image} />
            <h1>{movie.title}</h1>
            <p>{movie.year}</p>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        movies: state.movie
    }
}

export default connect(mapStateToProps)(MovieItem)