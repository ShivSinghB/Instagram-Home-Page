import {
  FaHome,
  FaSearch,
  FaVideo,
  FaShoppingBag,
  FaUserCircle,
  FaMoon,
  FaSun
} from 'react-icons/fa';
import { cn } from '../lib/utils';

const MobileNavbar = ({ darkMode, toggleDarkMode }) => {
  const navItems = [
    { icon: FaHome, label: 'Home', active: true },
    { icon: FaSearch, label: 'Search' },
    { icon: FaVideo, label: 'Reels' },
    { icon: darkMode ? FaSun : FaMoon, label: 'Theme', onClick: toggleDarkMode },
    { icon: FaUserCircle, label: 'Profile' },
  ];

  return (
    <nav className={cn(
      "flex w-full border-t shadow-sm",
      darkMode
        ? "border-gray-800 bg-gray-900 text-white"
        : "border-gray-200 bg-white text-black"
    )}>
      <div className="flex w-full items-center justify-around">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className={cn(
              "flex flex-1 flex-col items-center justify-center py-2 transition-colors",
              item.active
                ? darkMode ? "text-white" : "text-black"
                : darkMode ? "text-gray-400" : "text-gray-500",
              item.onClick && "hover:text-blue-500 dark:hover:text-blue-400"
            )}
          >
            <span className="text-xl">
              <item.icon />
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default MobileNavbar;
