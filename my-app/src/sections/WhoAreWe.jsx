import Placeholder from "../assets/file.png";

function WhoAreWe() {
  return (
    <div className="Screen">
      <hr />
      <div className="whoAreWeSection">
        <p className="tag" id="about">
          Who Is HappyHabits AI
        </p>
        <h1 className="section-title">Discover Your Perfect Routine</h1>
        <p className="section-desc sm">
          Unlock Your Potential: Embrace a transformative experience with HappyHabitsAI. 
          Our intelligent app crafts a bespoke daily routine just for you, based on a quick 
          yet insightful quiz. Seamlessly integrate habit-building into your life and watch your 
          goals come to fruition with unparalleled ease.
        </p>
        <img src={Placeholder} alt="" />
      </div>
    </div>
  );
}

export default WhoAreWe;
