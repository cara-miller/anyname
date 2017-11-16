import React, { Component } from 'react';
import TextInputField from '../components/TextInputField'

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      releaseYear: '',
      runtime: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onReleaseYearChange = this.onReleaseYearChange.bind(this)
    this.onRuntimeChange = this.onRuntimeChange.bind(this)
  }

  handleClearForm(event) {
    this.setState({
      title: '',
      releaseYear: '',
      runtime: ''
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    debugger
    let formPayLoad ={
      title: this.state.title,
      release_year: this.state.releaseYear,
      runtime: this.state.runtime
    }
    this.props.addNewMovie(formPayLoad)
    this.handleClearForm();
  }


  onTitleChange(event) {
    this.setState({ title: event.target.value })
  }

  onReleaseYearChange(event) {
    this.setState({ releaseYear: event.target.value })
  }

  onRuntimeChange(event) {
    this.setState({ runtime: event.target.value })
  }

  render() {
    return(
      <form className='callout' onSubmit={this.handleFormSubmit}>
        <TextInputField
          onChange={this.onTitleChange}
          label="Movie Title"
          name="movieTitle"
          value={this.state.title}
        />
        <TextInputField
          onChange={this.onReleaseYearChange}
          label="Movie Release Year"
          name="movieReleaseYear"
          value={this.state.releaseYear}
        />
        <TextInputField
          onChange={this.onRuntimeChange}
          label="Movie Runtime (in minutes)"
          name="movieRuntime"
          value={this.state.runtime}
        />

        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default FormContainer;
