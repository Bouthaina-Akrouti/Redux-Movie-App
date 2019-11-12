import {ADD_MOVIE, DELETE_MOVIE, UPDATE_MOVIE, SEARCH_MOVIE } from './types'



export const addMovie = movie => {
    return {
        type : ADD_MOVIE,
        payload : movie
    }
}


export const deleteMovie = id => {
    return {
        type : DELETE_MOVIE,
        payload : id
    }
}


export const updateMovie = movie => {
    return {
        type : UPDATE_MOVIE,
        payload : movie
    }
}
export const searchMovie = ({rating, keyword}) => {
    return {
        type: SEARCH_MOVIE,
        payload: {rating, keyword}

    }
}