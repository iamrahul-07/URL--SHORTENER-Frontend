import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UrlShortener from "../../Components/urlShortener/UrlShortener";
import AllUrlsPage from "../urlShortener/AllURLs";

const DashboardPage = ({ userName = "User" }) => {
  const [activePage, setActivePage] = useState("shortener");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 text-lg sm:text-xl font-semibold shadow-md flex justify-between items-center">
        <span className="truncate">Welcome, {userName}!</span>
        <button
          onClick={handleLogout}
          className="bg-white text-blue-600 font-bold px-3 py-1.5 rounded-lg hover:bg-gray-200 transition duration-300 text-sm sm:text-base"
        >
          Logout
        </button>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 flex-col sm:flex-row overflow-hidden">
        {/* Sidebar */}
        <nav className="w-full sm:w-64 bg-white/50 backdrop-blur-md p-4 sm:p-6 flex sm:flex-col gap-2 sm:gap-4 border-b sm:border-b-0 sm:border-r border-blue-200 shadow-md overflow-x-auto">
          <button
            className={`text-left w-full p-2 sm:p-3 rounded-lg font-medium transition-all text-sm sm:text-base ${
              activePage === "shortener"
                ? "bg-blue-600 text-white shadow-md"
                : "hover:bg-blue-50 text-gray-800"
            }`}
            onClick={() => setActivePage("shortener")}
          >
            Generate Short URL
          </button>

          <button
            className={`text-left w-full p-2 sm:p-3 rounded-lg font-medium transition-all text-sm sm:text-base ${
              activePage === "allUrls"
                ? "bg-blue-600 text-white shadow-md"
                : "hover:bg-blue-50 text-gray-800"
            }`}
            onClick={() => setActivePage("allUrls")}
          >
            All URLs
          </button>
        </nav>

        {/* Main Content */}
        <main className="flex-1 flex items-start sm:items-center justify-center p-4 overflow-auto">
          <div className="w-full max-w-3xl">
            {activePage === "shortener" && <UrlShortener compact={false} />}
            {activePage === "allUrls" && <AllUrlsPage />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
