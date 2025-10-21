import { useRef, useState } from "react";
import { apiClient } from "../../shared/services/api-client.js";

const UrlShortener = ({ compact = false }) => {
  const url = useRef();
  const [shortUrl, setShortURL] = useState("");
  const [copied, setCopied] = useState(false);

  const takeUrl = async () => {
    const URL = url.current.value;
    const email = localStorage.getItem("email");
    try {
      const response = await apiClient.post("/short-url", { bigurl: URL, email });
      if (response && response.data.shortid) {
        const fullShortUrl = `${import.meta.env.VITE_BASE_URL}small/${response.data.shortid}`;
        setShortURL(fullShortUrl);
        setCopied(false);
      }
    } catch (err) {
      console.log("Some Problem in short url!", err);
    }
  };

  const handleCopy = async () => {
    if (shortUrl) {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`w-full p-4 sm:p-6 ${compact ? "" : "bg-white rounded-3xl shadow-2xl"} max-w-3xl mx-auto`}>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6 text-blue-800">
        URL Shortener
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1 font-semibold text-sm sm:text-base">
          Enter your long URL
        </label>
        <input
          type="text"
          ref={url}
          placeholder="https://example.com/very/long/url"
          className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm text-sm sm:text-base"
        />
      </div>

      <button
        onClick={takeUrl}
        className="w-full bg-blue-600 text-white text-sm sm:text-lg py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
      >
        Generate Short URL
      </button>

      {shortUrl && (
        <div className="mt-6 text-center bg-blue-50 p-4 rounded-xl border border-blue-200 overflow-auto">
          <p className="text-gray-700 font-semibold mb-2 text-sm sm:text-base">Your short URL:</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold underline break-all hover:text-blue-700 transition text-sm sm:text-base"
            >
              {shortUrl}
            </a>
            <button
              onClick={handleCopy}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm sm:text-md hover:bg-blue-700 transition whitespace-nowrap"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlShortener;
