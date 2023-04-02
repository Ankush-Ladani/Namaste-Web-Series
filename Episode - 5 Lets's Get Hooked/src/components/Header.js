import Logo from "../../Assets/websiteLogo.png";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={Logo} alt="website-logo" width="100px" />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Services</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
