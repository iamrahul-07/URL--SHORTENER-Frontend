import React, { useEffect, useState } from "react";
import { getAllUrlsApi } from "../../Components/User/api/user-api.js";

const AllURLs = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const email = localStorage.getItem("email");

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await getAllUrlsApi(email);
        if (response.data.urls) setUrls(response.data.urls);
      } catch (err) {
        console.error("Error fetching URLs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUrls();
  }, [email]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-lg font-semibold text-blue-600 animate-pulse">
          Loading URLs...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-4 sm:p-6 flex justify-center mt-16">
      <div className="w-full max-w-7xl bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-4 sm:p-6 border border-blue-100 overflow-y-auto max-h-[80vh]">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-800 mb-6 text-center">
          Your Shortened URLs
        </h2>

        {urls.length === 0 ? (
          <p className="text-gray-600 text-center font-medium py-20">
            You haven’t generated any URLs yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-blue-100 text-gray-800 text-left">
                  <th className="p-4 border-b text-center font-bold text-base sm:text-xl w-[70%]">
                    Original URL
                  </th>
                  <th className="p-4 border-b font-bold text-base sm:text-xl text-center w-[30%]">
                    Short URL
                  </th>
                </tr>
              </thead>
              <tbody>
                {urls.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-blue-50 transition duration-200"
                  >
                    <td className="p-4 border-b break-all text-gray-700">
                      <a
                        href={item.bigurl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-600"
                      >
                        {item.bigurl}
                      </a>
                    </td>
                    <td className="p-4 border-b break-all text-blue-700 font-semibold">
                      <a
                        href={`${import.meta.env.VITE_BASE_URL}small/${item.shortid}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {`${import.meta.env.VITE_BASE_URL}small/${item.shortid}`}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllURLs;
