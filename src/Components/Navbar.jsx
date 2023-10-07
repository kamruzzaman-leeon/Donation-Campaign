import { Link, NavLink, useLocation } from "react-router-dom";
import { CiMenuFries} from 'react-icons/Ci';
const Navbar = () => {
  const links = [
    { name: "Home", to: "/", id: 1 },
    { name: "Donation", to: "/donation", id: 2 },
    { name: "Statistics", to: "/statistics", id: 3 },
  ];

  const location = useLocation();
  const isHome = location.pathname ==="/";

  return (
   
    <div className={`navbar ${isHome ? "absolute top-0 left-0": "sticky top-0 left-0 right-0" }`}>
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
              className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow bg-base-100 rounded-box w-32 text-xl "
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
          <ul className="menu menu-horizontal px-1 text-xl gap-12">
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
