import { Link } from "react-router-dom";
// import Signup from "../pages.jsx/Signup";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">AI Interview Mastery</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-blue-200">
              Home
            </a>
          </li>
          <li>
            <a href="/interviews" className="hover:text-blue-200">
              Interviews
            </a>
          </li>
          <li>
            <a href="/progress" className="hover:text-blue-200">
              Progress
            </a>
          </li>
          <li>
            <a href="/resources" className="hover:text-blue-200">
              Resources
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-200">
              Contact
            </a>
          </li>
          <li>
            <a href="/signin" className="hover:text-blue-200">
              Log In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
