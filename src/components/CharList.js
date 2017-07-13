import React, {Component} from 'react';

export default class CharList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let id = this.props.movieId;
    if (id === 0) {
      return null;
    }
    let charas = [];

    this.props.charas.forEach((item, i) => {
      charas.push(
        <div className="col-sm-6 col-md-5" key={i}>
          <li>
            <label>{item}</label>
          </li>
        </div>
      )
    });

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
