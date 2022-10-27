import open from "../../assets/images/icon-menu.svg";
import close from "../../assets/images/icon-menu-close.svg";
import { useState } from "react";

function Nav() {
  const navItems = ["Home", "New", "Popular", "Trending", "Categories"];
  const [navState, setNavState] = useState(false);

  return (
    <nav role={"navigation"}>
      <ul className="hidden gap-4 md:flex">
        {navItems.map((e, i) => (
          <li key={i} className="text-slate-700 hover:text-orange-400">
            <a className="text-lg font-medium" href={`/${e}`}>
              {e}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="absolute right-6 top-6"
        onClick={() => setNavState(!navState)}
      >
        <img className="md:hidden" src={navState ? close : open} alt="" />
      </button>
      {navState ? (
        <>
          <div className="absolute top-0 right-0 h-screen w-9/12 bg-white py-40 px-6 md:hidden">
            <button
              className="absolute right-6 top-6"
              onClick={() => setNavState(!navState)}
            >
              <img className="md:hidden" src={navState ? close : open} alt="" />
            </button>
            <ul className="flex flex-col gap-5 ">
              {navItems.map((e, i) => (
                <li key={i} className="text-slate-700 hover:text-orange-400">
                  <a className="text-xl font-semibold" href={`/${e}`}>
                    {e}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute inset-0 -z-10 bg-black opacity-20 md:hidden"></div>
        </>
      ) : (
        <></>
      )}
    </nav>
  );
}
export default Nav;
