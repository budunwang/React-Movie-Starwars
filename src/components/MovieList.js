require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // movie list click
  handleClick(i) {
    this.props.onCheck(i + 1);
  }

  render() {
    let movies = [];

    this.props.movies.forEach((item, i) => {
      movies.push(
        <div class="container">
          <div class="col-sm-6 col-md-5">
            <li>
              <label onClick={this.handleClick.bind(null, i)} key={i}>{item}</label>
            </li>
          </div>
        </div>
      )
    })

    return (
      <div class="container">
        <div class="col-sm-12 col-md-10">
          <h2>Movies</h2>
          <ul>
            {movies}
          </ul>
        </div>
      </div>
    );
  }
}
export default MovieList;
