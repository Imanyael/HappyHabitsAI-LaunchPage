import Logo from "../assets/lgo.png";

function Footer() {
  return (
    <footer>
      <div className="Screen">
        <div className="imgContainer">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <a href="#whoAreWe">WHO ARE WE</a>
          <p>|</p>
          <a href="#features">FEATURES</a>
          <p>|</p>
          <a href="#about">ABOUT US</a>
        </div>
      </div>
      <p>@ 2024 HappyHabits AI. All Rights Reserved </p>
    </footer>
  );
}

export default Footer;
