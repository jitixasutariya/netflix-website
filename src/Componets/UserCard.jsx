import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./UserCard.css";

import profile_icon from "./Assets/damshel.jpg";
import profile_icon2 from "./Assets/don't_look_up.jpg";
import profile_icon3 from "./Assets/red_notice.jpg";

// Card component to display individual profile cards
const Card = ({ image, altText, description, title, link }) => (
  <div className="col-sm-12 col-md-6 col-lg-4 mb-4 mt-4">
    <div className="card h-100">
      <img src={image} alt={altText} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a
          href={link}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch Now
        </a>
      </div>
    </div>
  </div>
);

// UserProfileCard component to display a row of profile cards
const UserProfileCard = () => {
  return (
    <div className="container">
      <h1 className="main-title">Top Action Movies on Netflix</h1>
      <div className="row">
        <Card
          image={profile_icon}
          altText="Damsel"
          description="A NETFLIX ORIGINAL SERIES"
          title="Damsel"
          link="https://www.netflix.com/au/title/80991090"
        />
        <Card
          image={profile_icon2}
          altText="Don't Look Up"
          description="A NETFLIX ORIGINAL SERIES"
          title="Don't Look Up"
          link="https://www.netflix.com/au/title/81252357"
        />
        <Card
          image={profile_icon3}
          altText="Red Notice"
          description="A NETFLIX ORIGINAL SERIES"
          title="Red Notice"
          link="https://www.netflix.com/au/title/81161626"
        />
      </div>
    </div>
  );
};

export default UserProfileCard;
