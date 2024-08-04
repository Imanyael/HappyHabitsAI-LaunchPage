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
        <h1 className="section-title">Your Ultimate Habit-Building Partner</h1>
        <div className="stepsCardContainer">
          <div className="card">
            <img src={Routine} alt="" />
            <h3>Custom Routine Building</h3>
            <p>Personalized Precision: Say goodbye to one-size-fits-all solutions. Our app delivers habit recommendations tailored to your individual needs, goals, and preferences, ensuring a perfect fit for your unique lifestyle.</p>
          </div>
          <div className="card">
            <img src={Insight} alt="" />
            <h3>AI-Driven Insights</h3>
            <p>Smart Recommendations: Tap into the power of cutting-edge AI technology. Our system analyzes your quiz responses to provide insightful, actionable suggestions that align perfectly with your personal journey.</p>
          </div>
          <div className="card">
            <img src={Progress} alt="" />
            <h3>Progress Tracking</h3>
            <p>
            Visualize Success: Stay motivated and track your journey with built-in progress monitoring tools. Celebrate your milestones, view your achievements, and keep your motivation soaring as you advance towards your goals.
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
