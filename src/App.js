import React, { Component } from 'react';
import logo from './logo.svg';
import Movie from './movie';
import './App.css';

class App extends Component {

  state = {
    movies: [],
    error: null
  }

  // With Promises
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=eb8852fb04f1569c57fd1e56080fd202&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
    .then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(movies =>
      this.setState({
        movies: movies.results
      })
    )
    .catch(err =>
      console.log('Whoops')
      /*
      // This is where you could set a user-facing message
      this.setState({
          error: 'Could not fetch',
          loading: false
      })
      */
    );
  }
  
  /*
  // With async/await
  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=eb8852fb04f1569c57fd1e56080fd202&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies: movies.results,
      });
    } catch(e) {
      console.log(e);
    }
  }
*/

  render() {
    console.log(this.state.movies);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
      </div>
    );
  }
}

export default App;
