export const SET_MOVIES = 'SET_MOVIES';
export const SET_LOADING = 'SET_LOADING';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const LIKE_MOVIE = 'LIKE_MOVIE';
export const DISLIKE_MOVIE = 'DISLIKE_MOVIE';
export const SET_FILTER = 'SET_FILTER';
export const SET_PAGE = 'SET_PAGE';
export const SET_ITEMS_PER_PAGE = 'SET_ITEMS_PER_PAGE';

export const setMovies = (movies) => ({
  type: SET_MOVIES,
  payload: movies,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

export const deleteMovie = (index) => ({
  type: DELETE_MOVIE,
  payload: index,
});

export const likeMovie = (index) => ({
  type: LIKE_MOVIE,
  payload: index,
});

export const dislikeMovie = (index) => ({
  type: DISLIKE_MOVIE,
  payload: index,
});

export const setFilter = (categories) => ({
  type: SET_FILTER,
  payload: categories,
});

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const setItemsPerPage = (itemsPerPage) => ({
  type: SET_ITEMS_PER_PAGE,
  payload: itemsPerPage,
});
