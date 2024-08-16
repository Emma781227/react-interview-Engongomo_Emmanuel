import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { likeMovie, dislikeMovie, deleteMovie } from './movieSlice';

function MovieCard({ movie }) {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(likeMovie(movie.id));
  };

  const handleDislike = () => {
    dispatch(dislikeMovie(movie.id));
  };

  const handleDelete = () => {
    dispatch(deleteMovie(movie.id));
  };

}

function MovieList() {
  const movies = useSelector(state => state.movies.filteredMovies);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = useSelector(state => {
    const allCategories = state.movies.movies.map(movie => movie.category);
    return [...new Set(allCategories)];
  });

  const handleCategoryChange = (category) => {
    const newSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(cat => cat !== category)
      : [...selectedCategories, category];

    setSelectedCategories(newSelectedCategories);
  };

  const filteredMovies = selectedCategories.length > 0
    ? movies.filter(movie => selectedCategories.includes(movie.category))
    : movies;

  return (
    <div>
      <div className="filter-container">
        {categories.map(category => (
          <label key={category}>
            <input
              type="checkbox"
              value={category}
              onChange={() => handleCategoryChange(category)}
              checked={selectedCategories.includes(category)}
            />
            {category}
          </label>
        ))}
      </div>

      <div className="movie-container">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
