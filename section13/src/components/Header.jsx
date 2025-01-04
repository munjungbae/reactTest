import "./Header.css";

const Header = ({ title, left, right }) => {
  return (
    <header className="Header">
      <div className="header_left">{left}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">{right}</div>
    </header>
  );
};
export default Header;
