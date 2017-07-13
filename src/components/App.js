import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import CharList from './CharList';
import MovieList from './MovieList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      MovieLists: [],
      Characters: [],
      SelectedMovieId: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // load Movie lists
  componentDidMount() {
    this.getMovieLists();
  }

  // get movie list
  getMovieLists() {
    const movieLists = [];
    let url = 'http://swapi.co/api/films/';
    let that = this;
    fetch(url)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(function (data) {
        for (let i = 0; i < data.results.length; i++) {
          movieLists.push(data.results[i].title);
          // get all movies and store in states
          if (i === data.results.length - 1) {
            that.setState({
              MovieLists: movieLists
            });
          }
        }
      });
  }

  // display the character list
  getCharacterLists(id) {
    let that = this;
    let url = 'http://swapi.co/api/films/' + id;
    fetch(url)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(function (data) {
        let characters = [];
        let charUrls = data.characters;
        for (let i = 0; i < charUrls.length; i++) {
          fetch(charUrls[i])
            .then(function (response) {
              if (response.status >= 400) {
                throw new Error('Bad response from server');
              }
              return response.json();
            })
            .then(function (data) {
              characters.push(data.name);
              if (i === charUrls.length - 1) {
                that.setState({
                  Characters: characters,
                  SelectedMovieId: id
                });
              }
            });
        }
      });
  }

  // movie click handle
  handleClick(id) {
    this.getCharacterLists(id);
  }

  render() {
    return (
      <div className="container">
        <div className="center-block">
          <h1>StarWar</h1>
          <hr/>
          <MovieList movies={this.state.MovieLists} onCheck={this.handleClick}/>
          <hr />
          <CharList charas={this.state.Characters}/>
        </div>
      </div>
    );
  }
}
