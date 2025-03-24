import { ReactNode, FC, useState } from "react";

type MainNavbarProps = {
  children: ReactNode;
};
const MainNavbar: FC<MainNavbarProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div
          className={`${open ? "dropdown-open" : "dropdown"}`}
          onClick={() => setOpen(!open)}
        >
          <div role="button" className="btn btn-ghost btn-circle"></div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow absolute opacity-90">
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
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
