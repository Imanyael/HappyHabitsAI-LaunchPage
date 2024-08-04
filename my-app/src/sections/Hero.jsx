function Hero() {
  return (
    <div className="Screen">
      <div className="headlineContainer">
        <button className="btn-tag">Version 1.0 Released Soon</button>
        <h3 className="gradient-text">
          Transform Your Daily Routine with HappyHabitsAI
        </h3>
        <p>Welcome to HappyHabitsAI – where your path to a healthier, more confident 
          you begins. Our state-of-the-art habit tracker app harnesses the power of AI 
          to redefine how you build and sustain habits, guiding you to unlock your full 
          potential with ease and enjoyment.
        </p>
        {/* <p>
          Our innovative habit tracker app is designed to enhance personal{" "}
          <br />
          health and boost self-confidence
        </p> */}
        <a href="#waitlist">
          <button className="btn btn-headline">Join The Waitlist</button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
