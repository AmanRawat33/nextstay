import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="bg-slate-200">
        <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
          <Link to="/">
            <h1 className="sm:text-2xl font-bold flex flex-wrap">
              <span className="text-slate-500">Next</span>
              <span className="text-slate-700">Stay</span>
            </h1>
          </Link>
          <form className="flex items-center bg-slate-100 p-3 rounded-xl">
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent focus:outline-none w-24 sm:w-64"
            />
            <FaSearch className="text-slate-600" />
          </form>
          <ul className="flex gap-2 items-center">
            <Link to="/">
              <li className="hidden sm:inline text-slate-600 font-semibold sm:text-lg hover:cursor-pointer hover:bg-slate-300 hover:text-slate-900 rounded-sm p-1">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="hidden sm:inline text-slate-600 font-semibold sm:text-lg hover:cursor-pointer hover:bg-slate-300 hover:text-slate-900 rounded-sm p-1">
                About
              </li>
            </Link>
            <Link to="/sign-in">
              <li className="text-slate-600 font-semibold sm:text-lg hover:cursor-pointer hover:bg-slate-300 hover:text-slate-900 rounded-sm p-1">
                Sign in
              </li>
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
