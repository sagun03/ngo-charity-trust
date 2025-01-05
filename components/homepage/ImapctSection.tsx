import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ImpactSection = () => {
  return (
    <>
      <section className="h-full bg-[#899FB6] md:h-[600px] flex flex-col md:flex-row items-center justify-between text-center md:text-left p-8 pb-14 lg:p-20 gap-4 md:gap-14">
        <div className="w-full md:w-1/2 flex flex-col  items-center mt-10 md:mt-0">
          <h2 className="text-3xl md:text-5xl xl:text-7xl font-semibold mb-5">
            Transforming Lives: Our Impact in the Community
          </h2>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2">
          <p className="text-xl text-black mx-auto lg:mx-0 mb-10">
            At Samarth Sankalp Charitable Trust, we are dedicated to uplifting
            the vulnerable. Our efforts have made a significant difference in
            countless lives through education, healthcare, and hunger relief
            programs.
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="text-center md:text-left">
              <h3 className="text-5xl font-bold">500+</h3>
              <p className="text-gray-900 mt-2">
                Individuals supported through our outreach programs, helping
                them rebuild their lives with dignity.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-5xl font-bold">10,000+</h3>
              <p className="text-gray-900 mt-2">
                Nutritious meals served to underprivileged children, families,
                and the homeless.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-5xl font-bold">200+</h3>
              <p className="text-gray-900 mt-2">
                Children provided with access to quality education, school
                supplies, and mentoring programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficiary Voices Section */}

      <section className="h-full bg-[#D0DDEA] md:min-h-[750px] md:h-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left p-8 pb-20  lg:p-20 gap-4 md:gap-14">
        <div className="w-full flex flex-col mt-10 md:mt-0">
          <h2 className="text-3xl md:text-5xl xl:text-7xl font-semibold mb-5">
            Beneficiary Voices
          </h2>
          <p className="text-lg text-gray-900 mb-8">
            Their support changed my life for the better.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center justify-between h-[250px] max-w-[400px] mx-auto">
              <div className="flex items-center">
                <span className="text-yellow-500 text-xl mr-1">★★★★★</span>
              </div>
              <p className="text-center mt-4 font-medium">
                &quot;The trust gave me hope when I had none.&quot;
              </p>
              <div className="flex items-center gap-4 mt-6">
                <FaUserCircle className="text-4xl" />
                <div>
                  <p className="font-bold">John Doe</p>
                  <p className="text-gray-800 text-sm">Former Beneficiary</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center justify-between h-[250px]  max-w-[400px] mx-auto">
              <div className="flex items-center">
                <span className="text-yellow-500 text-xl mr-1">★★★★★</span>
              </div>
              <p className="text-center mt-4 font-medium">
                &quot;Volunteering here has been the most rewarding
                experience.&quot;
              </p>
              <div className="flex items-center gap-4 mt-6">
                <FaUserCircle className="text-4xl" />
                <div>
                  <p className="font-bold">Jane Smith</p>
                  <p className="text-gray-800 text-sm">Volunteer Coordinator</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center justify-between h-[250px]  max-w-[400px] mx-auto">
              <div className="flex items-center">
                <span className="text-yellow-500 text-xl mr-1">★★★★★</span>
              </div>
              <p className="text-center mt-4 font-medium">
                &quot;Their educational programs gave my child a bright
                future.&quot;
              </p>
              <div className="flex items-center gap-4 mt-6">
                <FaUserCircle className=" text-4xl" />
                <div>
                  <p className="font-bold">Anjali Verma</p>
                  <p className="text-gray-800 text-sm">Parent of Beneficiary</p>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center justify-between h-[250px]  max-w-[400px] mx-auto">
              <div className="flex items-center">
                <span className="text-yellow-500 text-xl mr-1">★★★★★</span>
              </div>
              <p className="text-center mt-4 font-medium">
                &quot;Their healthcare camps saved my father’s life.&quot;
              </p>
              <div className="flex items-center gap-4 mt-6">
                <FaUserCircle className="text-4xl" />
                <div>
                  <p className="font-bold">Rahul Sharma</p>
                  <p className="text-gray-800 text-sm">
                    Family Member of Beneficiary
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImpactSection;
