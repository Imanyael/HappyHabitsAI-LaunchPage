import Placeholder from "../assets/photo.png";

function AboutUs() {
  return (
    <div className="Screen">
      <div className="aboutUsContainer">
        <p className="tag" id="about-us">
          About Us
        </p>
        <div className="container">
          <div className="left">
            <h1 className="section-title lg">The Heartbeat of HappyHabitsAI</h1>
            <p className="section-desc lg-text">
            At HappyHabitsAI, we’re more than just an app – we’re your dedicated partner in personal growth. Created by college students who understand the real struggles of forming good habits and battling self-doubt, our mission is to empower you. We’re committed to enhancing your personal health and boosting your self-confidence with a tool that genuinely supports your journey.


Embark on your path to a better you with HappyHabitsAI. Experience the future of habit formation and take the first step towards achieving your goals today. With HappyHabitsAI, transformation is just a click away.
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
