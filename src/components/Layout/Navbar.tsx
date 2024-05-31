import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";


const Navbar = () => {


  return (
    <nav className="relative bg-gray-100 border-b-[1px] border-gray-900 mx-4">
      <div className="w-full sm:px-6 md:px-10 py-3 mx-auto flex">
        <div className="flex items-center justify-between grow ">
          <Link to="/">
            <p className="font-bold text-gray-800 text-lg">LOGO</p>
          </Link>
        </div>
        <div className="relative flex items-center gap-10">
          <UserProfile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
