import { ReactNode, FC, useState } from "react";
import { Menu } from "react-feather";
import { Link } from "react-router";

type MainNavbarProps = {
  children: ReactNode;
};

const MainNavbar: FC<MainNavbarProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div
          className={`dropdown ${open ? "dropdown-open" : " "} `}
          onClick={() => setOpen(!open)}
        >
          <div role="button" className="btn btn-ghost btn-circle">
            <Menu />
          </div>
          <ul
            className={`${
              !open ? " hidden" : " "
            } menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow absolute opacity-90`}
          >
            <li>
              <Link onClick={() => setOpen(false)} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} to="buildData">
                Build data
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} to="buildPlan">
                Bild plan
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-end">{children}</div>
    </div>
  );
};

export default MainNavbar;
