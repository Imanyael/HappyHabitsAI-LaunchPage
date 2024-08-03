function CallToAction() {
  return (
    <div className="callToActionContainer">
      <div className="Screen">
        <div className="ctaContainer" id="waitlist">
          <h1 className="section-title white">Be First to Join</h1>
          <p className="section-desc white-desc">
            Sign up to get exclusive updates and early access.
          </p>
          <br />
          <br />
          <div className="inputContainer">
            <form>
              <input type="text" placeholder="Name..." required />
              <input type="email" placeholder="Email..." required />
              <select required>
                <option value="">Select Excitement Level</option>
                <option value="1">1 - Not Very Excited</option>
                <option value="2">2 - Somewhat Excited</option>
                <option value="3">3 - Moderately Excited</option>
                <option value="4">4 - Very Excited</option>
                <option value="5">5 - Extremely Excited</option>
              </select>
              <button type="submit" className="btn btn-headline">
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default CallToAction;
