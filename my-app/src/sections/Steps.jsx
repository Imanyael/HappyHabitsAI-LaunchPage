import Progress from "../assets/progress.png";
import Routine from "../assets/routine.png";
import Insight from "../assets/insight.png";

function Steps() {
  return (
    <div className="Screen">
      <div className="stepsSection">
        <p className="tag" id="features">
          Why Choose Us?
        </p>
        <h1 className="section-title">The Ultimate Habit Tool</h1>
        <div className="stepsCardContainer">
          <div className="card">
            <img src={Routine} alt="" />
            <h3>Custom Routine Building</h3>
            <p>Tailored habits to fit your unique needs and goals</p>
          </div>
          <div className="card">
            <img src={Insight} alt="" />
            <h3>AI-Driven Insights</h3>
            <p>Personalized recommendations based on your quiz answers.</p>
          </div>
          <div className="card">
            <img src={Progress} alt="" />
            <h3>Progress Tracking</h3>
            <p>
              Monitor your progress and stay motivated with built-in tracking.
            </p>
            <p></p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Steps;
