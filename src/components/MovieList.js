import React, {Component} from 'react';

export default class MovieList extends Component {
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
        <div className="col-sm-6 col-md-5" key={i}>
          <li>
            <label onClick={this.handleClick.bind(null, i)}>{item}</label>
          </li>
        </div>
      )
    });

    return (
      <div className="container">
        <div className="col-sm-12 col-md-10">
          <h2>Movies</h2>
          <ul>
            {movies}
          </ul>
        </div>
      </div>
    );
  }
}
