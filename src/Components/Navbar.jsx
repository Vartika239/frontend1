import { useState } from "react";
import { Bell, Home, Compass, MessageCircle } from "lucide-react"; // or use Font Awesome

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-4 py-2 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="text-xl font-bold text-black-600">Vibenet</div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-black-500"
        />
      </div>

      {/* Navigation Icons */}
      <div className="flex items-center space-x-4">
        <Home className="w-6 h-6 cursor-pointer hover:text-blue-600" />
        <Compass className="w-6 h-6 cursor-pointer hover:text-blue-600" />
        <MessageCircle className="w-6 h-6 cursor-pointer hover:text-blue-600" />
        <div className="relative">
          <Bell className="w-6 h-6 cursor-pointer hover:text-blue-600" />
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Profile Image */}
        <div className="relative">
          <img
            src="/images/Profile.png"
            alt="Profile"
            className="w-8 h-8 rounded-full cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-10">
              <ul className="text-sm">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
