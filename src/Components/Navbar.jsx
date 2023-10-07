import { Link, NavLink } from "react-router-dom";
import { CiMenuFries} from 'react-icons/Ci';
const Navbar = () => {
  const links = [
    { name: "Home", to: "/", id: 1 },
    { name: "Donation", to: "/donation", id: 2 },
    { name: "Statistics", to: "/statistics", id: 3 },
  ];

  return (
    <div className="navbar w-11/12 mx-auto bg-slate-400">
      <div className="navbar-start">
        <Link to="/">
          <img src="image/Logo.png" className="w-auto" alt="Logo" />
        </Link>
      </div>
      <div className="navbar-end">
        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0}>
              <CiMenuFries className="text-red-600 text-2xl"></CiMenuFries>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow bg-base-100 rounded-box w-32"
            >
              {links.map((link) => (
                <NavLink key={link.id} to={link.to}>
                  {link.name}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-12">
            {links.map((link) => (
              <NavLink key={link.id} to={link.to}>
                {link.name}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
