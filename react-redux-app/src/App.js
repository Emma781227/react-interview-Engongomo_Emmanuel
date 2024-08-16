import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteMovie,
  likeMovie,
  dislikeMovie,
  setFilter,
  setPage,
  setItemsPerPage,
  setMovies,
  setLoading,
} from './redux/actions';
import { movies$ } from './moviesService';

function App() {
  const movies = useSelector((state) => state.movies);
  const selectedCategories = useSelector((state) => state.selectedCategories);
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    movies$
      .then((movies) => {
        dispatch(setMovies(movies));
      })
      .catch((error) => {
        console.error('Failed to load movies:', error);
        dispatch(setLoading(false));
      });
  }, [dispatch]);

  const categories = [...new Set(movies.map((movie) => movie.category))];

  const filteredMovies = selectedCategories.length
    ? movies.filter((movie) => selectedCategories.includes(movie.category))
    : movies;

  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
  const currentMovies = filteredMovies.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleDelete = (index) => {
    dispatch(deleteMovie(index));
  };

  const handleLike = (index) => {
    dispatch(likeMovie(index));
  };

  const handleDislike = (index) => {
    dispatch(dislikeMovie(index));
  };

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    const newCategories = checked
      ? [...selectedCategories, value]
      : selectedCategories.filter((cat) => cat !== value);
    dispatch(setFilter(newCategories));
  };

  const handleItemsPerPageChange = (event) => {
    dispatch(setItemsPerPage(parseInt(event.target.value, 10)));
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  };

  if (loading) {
    return <div>Loading movies...</div>;
  }

  return (
    <div className="app">
      <div className="filter">
        <h3>Filter by Category :</h3>
        <div className='Categories'> 
        {categories.map((category) => (
          <div key={category}>
            <label>
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={handleCategoryChange}
              />
              {category}
            </label>
          </div>
        ))}
        </div>
      </div>
      <label>
          Items per page:
          <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={12}>12</option>
          </select>
        </label>
    

      <div className="movie-container">
        {currentMovies.map((movie, index) => (
          <div key={index} className="movie-card"
          style={{ 
              backgroundImage: `url(${movie.background})`, 
              backgroundColor: 'white',
              backgroundSize: 'cover',
              backgroundPosition: 'center', 
            }}
          >
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-category">{movie.category}</p>
            <div className="gauge">
              <div
                className="gauge-bar"
                style={{ width: `${(movie.likes / (movie.likes + movie.dislikes)) * 100}%` }}
              ></div>
            </div>
            <p>{movie.likes} Likes / {movie.dislikes} Dislikes</p>
            <button className="like-button" onClick={() => handleLike(index)}>
              Like
            </button>
            <button className="dislike-button" onClick={() => handleDislike(index)}>
              Dislike
            </button>
            <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>

      <div className="pagination-controls">
      
        <button onClick={handlePreviousPage} disabled={currentPage === 1} className='previous'>
          Précédent
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className='next'>
          Suivant
        </button>
      </div>
    </div>
  );
}

export default App;
