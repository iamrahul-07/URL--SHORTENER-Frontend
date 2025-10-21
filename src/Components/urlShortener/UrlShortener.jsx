import { useRef, useState } from "react";
import { apiClient } from "../../shared/services/api-client.js";

const UrlShortener = ({ compact = false }) => {
  const url = useRef();
  const [shortUrl, setShortURL] = useState("");
  const [copied, setCopied] = useState(false);

  const takeUrl = async () => {
    const URL = url.current.value;
    const email=localStorage.getItem("email");
    try {
      const response = await apiClient.post("/short-url", { bigurl: URL, email });
      if (response && response.data.shorturl) {
        setShortURL(`${import.meta.env.VITE_BASE_URL}small/${item.shortid}`);
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
    <div className={`w-full p-6 ${compact ? "" : "bg-white rounded-3xl shadow-2xl"} `}>
      <h2 className="text-3xl font-extrabold text-center mb-6 text-blue-800">
        URL Shortener
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1 font-semibold">Enter your long URL</label>
        <input
          type="text"
          ref={url}
          placeholder="https://example.com/very/long/url"
          className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm"
        />
      </div>

      <button
        onClick={takeUrl}
        className="w-full bg-blue-600 text-white text-lg py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
      >
        Generate Short URL
      </button>

      {shortUrl && (
        <div className="mt-6 text-center bg-blue-50 p-4 rounded-xl border border-blue-200">
          <p className="text-gray-700 font-semibold mb-2">Your short URL:</p>
          <div className="flex items-center justify-center gap-3">
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold underline break-all hover:text-blue-700 transition"
            >
              {shortUrl}
            </a>
            <button
              onClick={handleCopy}
              className="bg-blue-600 text-white px-3 py-1.5 rounded-lg font-semibold text-md hover:bg-blue-700 transition"
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
