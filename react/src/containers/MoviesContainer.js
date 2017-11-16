import React, { Component } from 'react';
import MoviesIndex from '../components/MoviesIndex'
import FormContainer from './FormContainer'

class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
    this.addNewMovie = this.addNewMovie.bind(this)
  }

  componentDidMount(){
    fetch('/api/v1/movies')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        movies: body.movies
      })

    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  addNewMovie(newMovie) {
    fetch('/api/v1/movies', {
      method: "POST",
      body: JSON.stringify(newMovie)
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      let updatedMovies = this.state.movies.concat(body)
      this.setState({
        movies: updatedMovies
      })

    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <div className="container">
        <img src="https://media.giphy.com/media/4fPXbU1Eld8fm/giphy.gif"/>
        <h1>Classic Disney Movies</h1>
        <hr />
        <MoviesIndex
          movies={this.state.movies}
        />
        <hr />
        <FormContainer
          addNewMovie={this.addNewMovie}
        />
      </div>
    )
  }

}

export default MoviesContainer;
