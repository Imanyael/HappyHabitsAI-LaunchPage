import Placeholder from "../assets/placeholder-image.jpg";

function WhoAreWe() {
  return (
    <div className="Screen">
      <hr />
      <div className="whoAreWeSection">
        <p className="tag">Who Is HappyHabits AI</p>
        <h1 className="section-title">Your Personalized Habit Builder</h1>
        <p className="section-desc sm">
          Unlock personalized habit formation with Happy Habits. Our AI-driven
          app creates a daily routine tailored to your needs from a quick quiz.
          Enjoy seamless integration and easy tracking to achieve your goals
          effortlessly.
        </p>
        <img src={Placeholder} alt="" />
      </div>
    </div>
  );
}

export default WhoAreWe;
