require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class CharLists extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let id = this.props.movieId;
    if (id == 0) {
      return (
        <div></div>
      )
    }
    let charas = [];

    this.props.charas.forEach((item, i) => {
      charas.push(
        <div className="container">
          <div className="col-sm-6 col-md-5">
            <li>
              <label key={i}>{item}</label>
            </li>
          </div>
        </div>
      )
    })

    return (
      <div className="container">
        <div className="col-sm-12 col-md-10">
          <h2>Characters</h2>
          <ul>
            {charas}
          </ul>
        </div>
      </div>
    );
  }
}
export default CharLists;
