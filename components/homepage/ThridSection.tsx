import React from "react";

const ThirdSection = () => {
  const cards = [
    {
      title: "Join Us: Exciting Upcoming Events to Make a Difference",
      description: "Discover how our projects have changed lives and inspired hope.",
      image: "/1.jpeg",
      buttonText: "Learn More",
    },
    {
      title: "Hear from Our Volunteers: Their Inspiring Experiences and Stories",
      description: "Read heartfelt testimonials from those who have made a difference.",
      image: "/2.jpeg",
      buttonText: "Sign Up",
    },
    {
      title: "Get Involved: How You Can Help Us Make an Impact",
      description: "Learn about the various ways you can support our mission.",
      image: "/4.jpeg",
      buttonText: "Donate",
    },
  ];

  return (
    <section className="relative bg-[#D0DDEA] h-full  flex flex-col items-center justify-between text-center md:text-left p-8 pb-20 lg:p-40 gap-12 md:gap-24">
      {/* Background Wave */}
      <div className="absolute top-0 md:top-[-3%] xl:top[-5%] w-full right-0">
        <img src="/wave.png" alt="1" className="w-full" />
      </div>

      {/* Heading */}
      <div className="text-center mt-20 md:mt-40 lg:mt-44 xl:mt-54">
        <h2
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
          className="text-3xl md:text-5xl lg:text-7xl font-semibold mb-5"
        >
          Transforming Lives: Our Recent Impactful
        </h2>
        <h2
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
          className="text-3xl md:text-5xl lg:text-7xl font-semibold mb-5"
        >
          Projects for the Community
        </h2>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col text-center items-center transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-80 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
            <p className="text-gray-600 mb-5">{card.description}</p>
            <button className="py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition">
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThirdSection;
