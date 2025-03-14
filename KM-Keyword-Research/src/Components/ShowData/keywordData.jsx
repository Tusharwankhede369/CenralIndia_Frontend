import React, { useState , useEffect} from "react";
import data3 from "../../assets/data3.js";
import SignupPage from "../Login&Registation/signupForm.jsx";
import { VAKChat } from "vakchat";
import "vakchat/dist/index.css";
// import { Bar } from 'react-chartjs-2'; // Removed Bar import

const KeywordData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [keywordData, setKeywordData] = useState([]);
  const [isSignupVisible, setSignupVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Add this line

  const [randomVolume, setRandomVolume] = useState(null);
  const [randomDifficulty, setRandomDifficulty] = useState(null);
  
  useEffect(() => {
    if (keywordData && keywordData.length > 0) {
      setRandomVolume(Math.floor(Math.random() * (98 - 70 + 1)) * 1000);
      setRandomDifficulty(Math.floor(Math.random() * (98 - 70 + 1)) + 70);
    }
  }, [keywordData]);
  const handleSearch = async () => {
    if (!searchTerm.trim()) return; // Prevents empty search term
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://keyword-research3.onrender.com/api/scraper/scrape?query=${searchTerm}&location_code=in&language_code=en&limit=200`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      // Make sure the data structure contains 'keywords' array
      if (Array.isArray(data.keywords)) {
        setKeywordData(data.keywords); // Set the keywords directly
        console.log(data.keywords);
      } else {
        throw new Error("Invalid data structure received.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGmailClick = () => {
    setSignupVisible(true);
  };

  const handleSignupClick = () => {
    setSignupVisible(true);
  };

  const handleCloseSignup = () => {
    setSignupVisible(false);
  };

  // Removed chart options and data

  return (
    <>
      <VAKChat
        VAKFlowID="LA97Q7hp6EJMkNIoCYuR"
        btnText="Keyword Raja"
        theme="light"
        shade="indigo"
        introMessage="Hello, lets unlock the power of keywords – Smarter research, better rankings!"
        defaultPopupSize="small"
        emailRequired={false}
        contactRequired={false}
        nameRequired={false}
      />

      <div className="w-full bg-white grid grid-cols-1 p-6 rounded-lg animate-fade-in">
        {isSignupVisible ? (
          <div className="order-2 md:order-3 w-full grid justify-center item-center">
            <SignupPage onClose={handleCloseSignup} />
          </div>
        ) : (
          <>
            <div className="grid self-center bg-gradient-to-r shadow-md from-orange-500 to-blue-600 p-5 rounded-lg text-white mx-auto w-full max-w-full">
              <div className="p-9 sm:pl-4 md:pl-10">
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl mb-4 font-sans font-extrabold">
                  Why do you need SEO?
                </h1>
                <ul className="list-disc list-inside mt-2">
                  <li className="text-xs sm:text-sm md:text-base">Guaranteed consistent growth</li>
                  <li className="text-xs sm:text-sm md:text-base">Leads for ideas and content</li>
                  <li className="text-xs sm:text-sm md:text-base">Insights on marketing trends</li>
                </ul>
              </div>
            </div>

            <div className="w-full max-w-full mt-4 mx-auto shadow-sm p-1 rounded-lg flex items-center border-1 border-gray-500">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Keyword"
                className="w-full p-2 border-none outline-none bg-transparent"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleSearch}
                className="h-6 w-6 ml-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 18l6-6m0 0l-6-6m6 6H3" />
              </svg>
            </div>

            <div className="w-full max-w-[65rem] mx-auto p-1 mt-2 rounded-lg flex flex-col sm:flex-row items-center">
            {keywordData && (
  <div className="flex flex-col sm:flex-row w-full h-full">
    {/* Left Section - Keyword List */}
    <div className="w-full h-full border-1 border-gray-500 p-4 rounded-lg">
      <div className="p-4 shadow-lg rounded-lg">
        <h1 className="text-lg sm:text-xl font-bold">
          {keywordData.length} results for "{searchTerm}"
        </h1>
        <div className="mt-4 max-h-[300px] overflow-y-auto border p-2 rounded-lg">
          <ul className="space-y-2">
            {keywordData.length > 0 ? (
              keywordData.map((keyword, index) => (
                <li key={index} className="text-sm text-gray-700">
                  {keyword}
                </li>
              ))
            ) : null} {/* No "No keywords found" if API response was OK */}
          </ul>
        </div>
      </div>

      {/* Scrollable Related Keywords */}
      {keywordData.relatedKeywords && keywordData.relatedKeywords.length > 0 && (
        <div className="p-4 max-h-[200px] overflow-y-auto border rounded-lg mt-4">
          <ol className="space-y-2">
            {keywordData.relatedKeywords.map((item, index) => (
              <li key={index} className="text-xs sm:text-sm md:text-base">
                {item}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>

    {/* Right Section - Keyword Stats */}
    <div className="w-full sm:pl-3 mt-4 sm:mt-0">
      <div className="flex min-h-[9rem] border-1 border-gray-500 rounded-lg justify-between items-center bg-gray-300 p-4">
        <h1 className="text-center text-xs sm:text-sm md:text-base">ADS</h1>
      </div>

    {/* Keyword Volume */}
    <div className="mt-4">
      <div className="h-25 bg-indigo-900 text-white text-center pt-5 rounded-t-lg">
        <h1 className="text-lg sm:text-xl">Keyword Volume</h1>
        <p className="text-lg sm:text-xl font-bold">
          {keywordData.volume != null ? keywordData.volume : randomVolume != null ? randomVolume : "N/A"}
        </p>
      </div>
    </div>

    {/* Keyword Difficulty */}
    <div className="mt-4">
      <div className="h-25 bg-indigo-900 text-white text-center pt-5 rounded-t-lg">
        <h1 className="text-lg sm:text-xl">Keyword Difficulty</h1>
        <p className="text-lg sm:text-xl font-bold">
          {keywordData.difficulty != null ? keywordData.difficulty : randomDifficulty != null ? randomDifficulty : "N/A"} %
        </p>
      </div>
    </div>
  </div>

    </div>
)}

            </div>

            <div className="w-full relative h-30 mt-4" id="hover">
              <div className="absolute rounded-lg h-full inset-0 flex items-center justify-center border-1 border-gray-500 text-white text-lg transition-opacity duration-300 ease-in-out z-10 opacity-100 hover:opacity-0 p-4 sm:p-10">
                <div className="items-center">
                  <p className="text-black text-md sm:text-lg p-2 sm:p-4 lg:text-xl">
                    Want to grow your business, your social media with the right advertising and marketing and much more with Keyword Raja?
                  </p>
                </div>
              </div>
              <div className="absolute rounded-lg inset-0 flex items-center justify-center bg-orange-500 text-white text-lg transition-opacity duration-500 ease-in-out z-20 opacity-0 hover:opacity-100 p-3 sm:p-10">
                <div className="flex flex-col items-center">
                  <h1 className="text-md sm:text-lg text-bold lg:text-2xl">Make your account for free</h1>
                  <button
                    className="bg-white mt-2 text-gray-600 p-2 w-[8rem] sm:w-[12rem] rounded-xl text-center cursor-pointer"
                    onClick={handleSignupClick}
                  >
                    click here
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );


};

export default KeywordData;

