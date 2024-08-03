import Placeholder from "../assets/placeholder-image.jpg";

function AboutUs() {
  return (
    <div className="Screen">
      <div className="aboutUsContainer">
        <p className="tag" id="about">
          About Us
        </p>
        <div className="container">
          <div className="left">
            <h1 className="section-title lg">The Heart of Happy Habits</h1>
            <p className="section-desc lg-text">
              HappyHabitsAI is an innovative habit tracker app created by
              college students who understand the challenges of building good
              habits and overcoming self-doubt. It aims to enhance personal
              health and boost self-confidence.
            </p>
          </div>
          <div className="right">
            <img src={Placeholder} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
