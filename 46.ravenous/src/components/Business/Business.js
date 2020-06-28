import React from "react";
import "./Business.css";

// const business = {
//   imageSrc: "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
//   name: "MarginOtto Pizzeria",
//   address: "1010 Paddington Way",
//   city: "Bordertown",
//   state: "NY",
//   zipCode: "10101",
//   category: "Italian",
//   rating: 4.5,
//   reviewCount: 90
// };

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={this.props.business.imageSrc} alt="" />
        </div>
        <h2> {this.props.business.name} </h2>
        <div className="Business-information">
          <div className="Business-address">
            <p> {this.props.business.address} </p>
            <p> {this.props.business.city} </p>
            <p>
              {`${this.props.business.state} ${this.props.business.zipCode}`}
            </p>
          </div>
          <div className="Business-reviews">
            <h3> {this.props.business.category.toUpperCase()} </h3>
            <h3 className="rating">{`${this.props.business.rating} stars`} </h3>
            <p> {`${this.props.business.reviewCount} reviews`} </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Business;
