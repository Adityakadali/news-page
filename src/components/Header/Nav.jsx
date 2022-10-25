import open from "../../assets/images/icon-menu.svg";
import close from "../../assets/images/icon-menu-close.svg";
import { useState } from "react";

function Nav() {
  const navItems = ["Home", "New", "Popular", "Trending", "Categories"];
  const [navState, setNavState] = useState(true);

  if (navState == true) {
    return (
      <nav role={"navigation"}>
        <ul className="hidden gap-4 md:flex">
          {navItems.map((e, i) => (
            <li key={i} className="text-slate-700 hover:text-orange-400">
              <a href={`/${e}`}>{e}</a>
            </li>
          ))}
        </ul>
        <button
          className="absolute right-6 top-6"
          onClick={() => setNavState(!navState)}
        >
          <img className="md:hidden" src={navState ? open : close} alt="" />
        </button>
      </nav>
    );
  } else {
    return (
      <nav
        role={"navigation"}
        className="absolute top-0 right-0 grid h-screen w-56 place-content-center bg-white py-4"
      >
        <button
          className="absolute right-6 top-6"
          onClick={() => setNavState(!navState)}
        >
          <img className="md:hidden" src={navState ? open : close} alt="" />
        </button>
        <ul className="flex flex-col gap-5">
          {navItems.map((e, i) => (
            <li key={i} className="text-slate-700 hover:text-orange-400">
              <a className="text-xl" href={`/${e}`}>
                {e}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
