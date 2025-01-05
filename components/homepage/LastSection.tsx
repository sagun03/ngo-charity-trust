"use client";
import { useState, useEffect } from "react";

const LastSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const rotatingTexts = [
    { text: "mental health awareness.", color: "text-red-500" },
    { text: "environmental sustainability.", color: "text-green-500" },
    { text: "access to clean water.", color: "text-blue-500" },
    { text: "empowering women and girls.", color: "text-pink-500" },
    { text: "disaster relief efforts.", color: "text-yellow-500" },
    { text: "eradicating hunger.", color: "text-orange-500" },
    { text: "community development.", color: "text-purple-500" },
    { text: "promoting healthcare access.", color: "text-teal-500" },
    { text: "cultural preservation.", color: "text-indigo-500" },
    { text: "supporting refugees.", color: "text-gray-600" },
  ];

  useEffect(() => {
    const charIndex = isDeleting
      ? displayedText.length - 1
      : displayedText.length + 1;
    const currentText = rotatingTexts[currentTextIndex].text;

    const typingSpeed = isDeleting ? 50 : 100; // Speed for typing and deleting
    const delay = isDeleting && charIndex === 0 ? 1000 : 0; // Pause before deleting

    const interval = setTimeout(() => {
      setDisplayedText(currentText.slice(0, charIndex));

      if (charIndex === currentText.length && !isDeleting) {
        // Start deleting after typing is complete
        setTimeout(() => setIsDeleting(true), 1500); // Pause after typing
      } else if (isDeleting && charIndex === 0) {
        // Move to the next text after deleting
        setIsDeleting(false);
        setCurrentTextIndex(
          (prevIndex) => (prevIndex + 1) % rotatingTexts.length
        );
      }
    }, typingSpeed + delay);

    return () => clearTimeout(interval);
  }, [displayedText, isDeleting, currentTextIndex]);

  return (
    <section className="h-full bg-white flex flex-col md:flex-row items-center justify-between text-center md:text-left mt-10 p-8 pb-14 lg:p-20 gap-14">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
        {/* Animated Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Join Us in Making a Difference in{" "}
          <span
            className={`${
              rotatingTexts[currentTextIndex].color
            } transition-colors duration-500`}
          >
            {displayedText}
            <span className="blink-cursor">|</span>
          </span>
        </h2>

        {/* Call to Action */}
        <p className="text-lg text-gray-800 max-w-xl">
          Your support can change lives. Donate, volunteer, or learn more about
          our impactful programs today!
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800">
            Donate
          </button>
          <button className="border border-black text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
            Volunteer
          </button>
        </div>
      </div>

      {/* Right Side: Programs */}
      <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Program 1 */}
        <div className="flex flex-col items-center md:items-start bg-gradient-to-br from-indigo-100 to-indigo-200 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ">
          <h3 className="text-xl font-bold text-indigo-900 mb-2 flex items-center">
            {/* Add an icon */}
            <span className="mr-2">📚</span>
            Education for All
          </h3>
          <p className="text-gray-800">
            Helping underprivileged children access quality education and build
            a brighter future.
          </p>
        </div>

        {/* Program 2 */}
        <div className="flex flex-col items-center md:items-start bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <h3 className="text-xl font-bold text-blue-900 mb-2 flex items-center">
            <span className="mr-2">💧</span>
            Clean Water Initiative
          </h3>
          <p className="text-gray-800">
            Ensuring communities have access to safe and clean drinking water.
          </p>
        </div>

        {/* Program 3 */}
        <div className="flex flex-col items-center md:items-start bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <h3 className="text-xl font-bold text-pink-900 mb-2 flex items-center">
            <span className="mr-2">🌸</span>
            Empowering Women
          </h3>
          <p className="text-gray-800">
            Providing skills, education, and opportunities to uplift women and
            girls.
          </p>
        </div>

        {/* Program 4 */}
        <div className="flex flex-col items-center md:items-start bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <h3 className="text-xl font-bold text-yellow-900 mb-2 flex items-center">
            <span className="mr-2">🌍</span>
            Disaster Relief
          </h3>
          <p className="text-gray-800">
            Supporting communities in times of natural disasters and crises.
          </p>
        </div>

        {/* Program 5 */}
        <div className="flex flex-col items-center md:items-start bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <h3 className="text-xl font-bold text-green-900 mb-2 flex items-center">
            <span className="mr-2">🏥</span>
            Healthcare Access
          </h3>
          <p className="text-gray-800">
            Promoting health equity by bringing healthcare to underserved areas.
          </p>
        </div>

        {/* Program 6 */}
        <div className="flex flex-col items-center md:items-start bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <h3 className="text-xl font-bold text-purple-900 mb-2 flex items-center">
            <span className="mr-2">🎨</span>
            Cultural Preservation
          </h3>
          <p className="text-gray-800">
            Protecting and celebrating diverse cultural traditions and heritage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LastSection;
