import {
  SET_MOVIES,
  SET_LOADING,
  DELETE_MOVIE,
  LIKE_MOVIE,
  DISLIKE_MOVIE,
  SET_FILTER,
  SET_PAGE,
  SET_ITEMS_PER_PAGE,
} from './actions';

const initialState = {
  movies: [],
  selectedCategories: [],
  currentPage: 1,
  itemsPerPage: 4,
  loading: true,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_MOVIE:
      const updatedMovies = state.movies.filter((_, index) => index !== action.payload);
      return {
        ...state,
        movies: updatedMovies,
        selectedCategories: [...new Set(updatedMovies.map((movie) => movie.category))],
      };
    case LIKE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie, index) => {
          if (index === action.payload) {
            return {
              ...movie,
              likes: movie.liked ? movie.likes : movie.likes +1,
              dislikes: movie.liked === false ? movie.dislikes - 1 : movie.dislikes,
              liked: true,
            };
          }
          return movie;
        }),
      };
    case DISLIKE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie, index) => {
          if (index === action.payload) {
            return {
              ...movie,
              dislikes: movie.liked === false ? movie.dislikes : movie.dislikes + 1,
              likes: movie.liked ? movie.likes - 1 : movie.likes,
              liked: false,
            };
          }
          return movie;
        }),
      };
    case SET_FILTER:
      return {
        ...state,
        selectedCategories: action.payload,
        currentPage: 1,
      };
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_ITEMS_PER_PAGE:
      return {
        ...state,
        itemsPerPage: action.payload,
        currentPage: 1,
      };
    default:
      return state;
  }
};
