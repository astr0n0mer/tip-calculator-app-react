import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <h1>
        <img src={logo} alt="Splitter" className="logo" />
      </h1>
    </header>
  );
};

export default Header;
