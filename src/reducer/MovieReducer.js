import { ADD_MOVIE, DELETE_MOVIE, UPDATE_MOVIE, SEARCH_MOVIE } from '../actions/types'
let initialstate = [
    {
        id: Math.round(Math.random() * 1000),
        image: 'https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1565363492/amc-cdn/production/2/movies/53700/53730/PosterDynamic/87999.jpg',
        title: 'Maleficent',
        year: '2014',
        rating: 3
    },
    {
        id: Math.round(Math.random() * 1000),
        image: "http://fr.web.img6.acsta.net/c_215_290/pictures/19/07/24/11/24/3992643.jpg",
        title: 'Scary Stories',
        year: '2019',
        rating: 5
    },
    {
        id: Math.round(Math.random() * 1000),
        image: "https://m.media-amazon.com/images/M/MV5BYTZmOTY1MDAtOTYxOC00YTQ1LTlkNDUtMmJiZDEyYmE1YmRmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY268_CR16,0,182,268_AL_.jpg",
        title: 'Drive',
        year: '2011',
        rating: 2

    },
    {
        id: Math.round(Math.random() * 1000),
        image: "https://www.promenadesfilms.com/medias/promenadesfilms/Cartel%20El%20Silencio%20del%20Viento.jpg",
        title: 'El Cilencio Del Viento',
        year: '2017',
        rating: 1

    },
    {
        id: Math.round(Math.random() * 1000),
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Artemis_Fowl_poster.jpg/220px-Artemis_Fowl_poster.jpg",
        title: 'Sartemis Fowl',
        year: '2019',
        rating: 4


    },
    {
        id: Math.round(Math.random() * 1000),
        image: "https://media.services.cinergy.ch/media/box1600/2adad8d68850dd65b02425ea64c3c758955f22f6.jpg",
        title: 'Valerian',
        year: '2017',
        rating: 3
    },
    {
        id: Math.round(Math.random() * 1000),
        image: "http://fr.web.img5.acsta.net/c_215_290/pictures/14/08/20/12/54/429006.jpg",
        title: 'Snatch',
        year: '2000',
        rating: 2
    }
]


const MovieReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return [...state,
            action.payload
            ]
        case DELETE_MOVIE:
            return state.filter(el => el.id !== action.payload)
        case UPDATE_MOVIE:
            return state.map(el => el.id === action.payload.id ? action.payload : el)
        case SEARCH_MOVIE:
            return initialstate.filter(el => el.rating >= action.payload.rating && el.title.toUpperCase().includes(action.payload.keyword.toUpperCase().trim()))
        default:
            return state
    }
}
export default MovieReducer