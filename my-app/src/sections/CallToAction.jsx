import React, { useState } from 'react';
import { supabase } from '../../supabaseClient.js';

function CallToAction() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [excitementLevel, setExcitementLevel] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        { name: name, email: email, excitement_level: excitementLevel }
      ]);

    if (error) {
      setMessage('Error submitting the form. Please try again.');
    } else {
      setMessage('Thank you for joining the waitlist!');
      setName('');
      setEmail('');
      setExcitementLevel('');
    }
  };

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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <select
                value={excitementLevel}
                onChange={(e) => setExcitementLevel(e.target.value)}
                required
              >
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
            {message && <p className="form-message">{message}</p>}
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
