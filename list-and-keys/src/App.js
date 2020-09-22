import React from 'react';
import './App.css';
import MoviesList from './MoviesList';

const moviesData = [
  { 'hasOscars': false, 'title': 'The Shawshank Redemption', 'director': 'Frank Darabont', 'rate': '9.3', 'id': 0 },
  { 'hasOscars': true, 'title': 'The Godfather', 'director': 'Francis Ford Coppola', 'rate': '9.2', 'id': 1 },
  { 'hasOscars': true, 'title': 'The Godfather: Part II', 'director': 'Francis Ford Coppola', 'rate': '9.0', 'id': 2 },
  { 'hasOscars': true, 'title': 'The Dark Knight', 'director': 'Christopher Nolan', 'rate': '9.0', 'id': 3 },
  { 'hasOscars': false, 'title': '12 Angry Men', 'director': 'Sidney Lumet', 'rate': '8.9', 'id': 4 }
];

class App extends React.Component {

  state = {
    movies: moviesData
    // movies: []
  }

  addMovie = () => {
    const newMovie = { 'hasOscars': true, 'title': 'Interstellar', 'director': 'Christopher Nolan', 'rate': '9.3', 'id': 31 }
    // alternative
    const moviesCopy = this.state.movies.slice();
    moviesCopy.push(newMovie);
    this.setState({
      movies: moviesCopy
      // movies: [...this.state.movies, newMovie]
    })
    // this.setState((state) => ({
    //   movies: state.movies.concat(newMovie)
    // }))
  }

  render() {
    return (
      <div className='App'>
        <h1>Movies</h1>
        <button onClick={this.addMovie}>Add a movie</button>

        {/* // if length of movies is 0 then show an h2 no movies ... */}
        {this.state.movies.length === 0 && <h2>No movies to display 🙃</h2>}

        <MoviesList movies={this.state.movies} />
      </div>
    )
  }
}

export default App;
