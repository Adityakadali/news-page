import Nav from "./Header/Nav";
import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <img src={logo} alt="" />
        <Nav />
      </div>
    </header>
  );
}

export default Header;
