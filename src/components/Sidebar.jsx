import { cn } from '../lib/utils';
import {
  FaHome,
  FaSearch,
  FaCompass,
  FaVideo,
  FaInbox,
  FaHeart,
  FaPlus,
  FaList,
  FaUserCircle
} from 'react-icons/fa';

const Sidebar = ({ collapsed, setCollapsed, darkMode }) => {
  const navItems = [
    { icon: FaHome, label: 'Home', active: true },
    { icon: FaSearch, label: 'Search' },
    { icon: FaCompass, label: 'Explore' },
    { icon: FaVideo, label: 'Reels' },
    { icon: FaInbox, label: 'Messages', notification: 1 },
    { icon: FaHeart, label: 'Notifications' },
    { icon: FaPlus, label: 'Create' },
    { icon: FaUserCircle, label: 'Profile' },
  ];

  return (
    <aside className={cn(
      "fixed left-0 top-0 z-50 flex h-full flex-col border-r pt-2 transition-all duration-300",
      darkMode ? "border-gray-800 bg-gray-900 text-white" : "border-gray-200 bg-white text-black",
      collapsed ? "w-[73px]" : "w-[244px]"
    )}>
      <div className={cn(
        "flex items-center p-4 pb-8 pt-5",
        collapsed ? "justify-center" : "justify-start"
      )}>
        {collapsed ? (
          <div className="h-6 w-6 cursor-pointer">
            <svg aria-label="Instagram" viewBox="0 0 24 24" className={cn("h-6 w-6 fill-current", darkMode ? "text-white" : "text-black")}>
              <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.013 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.987 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.987 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.013 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
            </svg>
          </div>
        ) : (
          <div className="h-9 cursor-pointer">
            {darkMode ? (
              <svg className="h-9" xmlns="http://www.w3.org/2000/svg" width="118" height="42" viewBox="0 0 118 42" fill="none">
                {/* Dark mode logo SVG path */}
              </svg>
            ) : (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
                alt="Instagram"
                className="h-9 w-auto"
              />
            )}
          </div>
        )}
      </div>

      <nav className="mt-1 flex flex-1 flex-col px-2">
        <ul className="flex flex-1 flex-col gap-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={cn(
                  "flex items-center rounded-md px-3 py-3 transition-colors",
                  darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100",
                  item.active ? "font-bold" : "font-normal",
                  collapsed ? "justify-center" : "justify-start gap-4"
                )}
              >
                <span className="relative text-2xl">
                  <item.icon />
                  {item.notification && (
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                      {item.notification}
                    </span>
                  )}
                </span>
                {!collapsed && <span className={cn("text-base", item.active ? "font-bold" : "font-normal")}>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "mt-auto flex items-center rounded-md px-3 py-3 transition-colors",
            darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100",
            collapsed ? "justify-center" : "justify-start gap-4"
          )}
        >
          <span className="text-2xl">
            <FaList />
          </span>
          {!collapsed && <span className="text-base font-normal">More</span>}
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
