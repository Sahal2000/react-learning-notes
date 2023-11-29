import React, { Component } from "react";
import image from "../abc.jpg"
import image2 from "../star-icon-vector.jpg"

export default class ClassStateUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "John",
      lastName: "Doe",
      phone: "+1 (719) 555-1212",
      email: "itsmyrealname@example.com",
      isFavorite: false,
    };
  }
  toggleFavorite = () => {
    this.setState((prevContact) => ({
      // ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  };

  render() {
    let starIcon = this.state.isFavorite ? "star-filled.png" : "star-empty.png";
    return (
      <main>
        <article className="card">
          <img src={image} className="card--image" />
          <div className="card--info">
            <img
              src={image2}
              className="card--favorite"
              onClick={this.toggleFavorite}
            />
            <h2 className="card--name">
              {this.state.firstName} {this.state.lastName}
            </h2>
            <p className="card--contact">{this.state.phone}</p>
            <p className="card--contact">{this.state.email}</p>
          </div>
        </article>
      </main>
    );
  }
}
