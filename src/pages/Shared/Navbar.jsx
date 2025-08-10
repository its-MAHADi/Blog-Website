import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';
import { FaHome, FaPlus, FaListAlt, FaStar, FaHeart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success('Logged out successfully!'))
      .catch((error) => toast.error(`Logout failed: ${error.message}`));
  };

  // Guest routes
  const guestLinks = [
    { to: '/', label: 'Home', icon: <FaHome /> },
    { to: '/all-blog', label: 'All Blogs', icon: <FaListAlt /> },
    { to: '/featured-blog', label: 'Featured', icon: <FaStar /> },
  ];

  // User routes
  const userLinks = [
    { to: '/', label: 'Home', icon: <FaHome /> },
    { to: '/add-blog', label: 'Add Blog', icon: <FaPlus /> },
    { to: '/all-blog', label: 'All Blogs', icon: <FaListAlt /> },
    { to: '/featured-blog', label: 'Featured', icon: <FaStar /> },
    { to: '/wishlist', label: 'Wishlist', icon: <FaHeart /> },
  ];

  const navLinks = user ? userLinks : guestLinks;

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-blue-800 shadow-md px-4 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl text-white drop-shadow-lg">
          .Blog
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-1 font-semibold transition-colors duration-300 ${
                  isActive
                    ? 'bg-white text-indigo-600 rounded-md'
                    : 'text-white hover:text-indigo-200'
                }`
              }
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Auth Buttons for Desktop */}
        <div className="hidden lg:flex items-center font-semibold gap-3">
          {user?.photoURL && (
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src={user.photoURL}
              alt="User Profile"
            />
          )}
          {user ? (
            <button
              onClick={handleLogOut}
              className="px-4 py-1 border-2 border-white text-white rounded hover:bg-red-500 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="px-4 py-1 border-2 border-white text-white rounded hover:bg-green-500 transition"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="px-4 py-1 border-2 border-white text-white rounded hover:bg-blue-500 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          {user?.photoURL && (
            <img
              className="w-8 h-8 rounded-full border-2 border-white"
              src={user.photoURL}
              alt="User Profile"
            />
          )}
          <div
            className="text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white/20 backdrop-blur-md shadow-md mt-3 rounded-md px-3 py-2">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md ${
                    isActive
                      ? 'bg-indigo-500 text-white'
                      : 'text-white hover:bg-indigo-400'
                  }`
                }
              >
                {link.icon}
                {link.label}
              </NavLink>
            ))}

            <div className="border-t border-white/50 mt-2 pt-2 flex flex-col gap-2">
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="px-4 py-1 border-2 border-white text-white rounded hover:bg-red-500 transition"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/auth/login"
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-1 border-2 border-white text-white rounded hover:bg-green-500 transition"
                  >
                    Login
                  </Link>
                  <Link
                    to="/auth/register"
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-1 border-2 border-white text-white rounded hover:bg-blue-500 transition"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
