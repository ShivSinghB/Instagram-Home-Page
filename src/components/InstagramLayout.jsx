import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import MobileNavbar from './MobileNavbar';
import { cn } from '../lib/utils';
import { FaMoon, FaSun } from 'react-icons/fa';

const InstagramLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check if user has a preference in localStorage
    const savedPreference = localStorage.getItem('darkMode');
    return savedPreference ? JSON.parse(savedPreference) : false;
  });

  // Update body class when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Check if screen is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 1024) {
        setSidebarCollapsed(true);
      } else {
        setSidebarCollapsed(false);
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <div className={cn(
      "flex h-screen w-full transition-colors duration-200",
      darkMode
        ? "bg-gray-900 text-white"
        : "bg-white text-black md:bg-[#FAFAFA]"
    )}>
      {/* Dark Mode Toggle - Desktop */}
      <button
        className="fixed bottom-6 right-6 z-50 hidden h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-xl shadow-lg transition-all hover:scale-110 dark:bg-gray-800 md:flex"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
      </button>

      {/* Desktop Sidebar */}
      <div className={cn("hidden md:block", isMobile ? "hidden" : "block")}>
        <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} darkMode={darkMode} />
      </div>

      {/* Main Content */}
      <main className={cn(
        "flex-1 overflow-auto",
        !isMobile && (sidebarCollapsed ? "ml-[73px]" : "ml-[244px]"),
        "pb-16 md:pb-0" // Add padding at bottom for mobile navbar
      )}>
        <Feed darkMode={darkMode} />
      </main>

      {/* Mobile Bottom Navbar */}
      <div className={cn("fixed bottom-0 left-0 right-0 z-50 md:hidden")}>
        <MobileNavbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      </div>
    </div>
  );
};

export default InstagramLayout;
