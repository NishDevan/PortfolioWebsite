'use client';

import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className="container mx-auto px-6 max-w-7xl">
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-16 mb-32">
        {/* Left Section - Text */}
        <div className="flex-1 pt-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight whitespace-nowrap">
            Hi, I'm Devan. 
          </h1>
          <p className="text-xl text-gray-400 mb-12">Majoring Computer Engineering @ UI</p>

          <div className="space-y-1 text-lg min-h-[120px]">
            <Typewriter
              options={{
                strings: [
                  'I am obsessed with coding',
                  'I love graphics design',
                  'I also play games'
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full overflow-hidden border-4 border-gray-700/50 shadow-2xl">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Experience & Awards */}
      <div className="grid lg:grid-cols-2 gap-20 pb-20">
        {/* Experience */}
        <div>
          <h2 className="text-4xl font-bold mb-10">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-gray-700 pl-6">
              <h3 className="text-xl font-semibold mb-2">
                Staff of Community Service @ IME FTUI 2025
              </h3>
              <p className="text-sm text-gray-400 italic">February 2025 - Present</p>
            </div>
            <div className="border-l-2 border-gray-700 pl-6">
              <h3 className="text-xl font-semibold mb-2">
                Staff of Creative Marketing @ EXERCISE FTUI 2025
              </h3>
              <p className="text-sm text-gray-400 italic">February 2025 - Present</p>
            </div>
          </div>
        </div>

        {/* Awards */}
        <div>
          <h2 className="text-4xl font-bold mb-10">Awards</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-gray-700 pl-6">
              <h3 className="text-xl font-semibold mb-2">
                Third Place @ PKM-RE by OIM FTUI 2025
              </h3>
              <p className="text-sm text-gray-400 italic">June 2025</p>
            </div>
            <div className="border-l-2 border-gray-700 pl-6">
              <h3 className="text-xl font-semibold mb-2">
                Second Place @ History Olympiad by GIO 2023
              </h3>
              <p className="text-sm text-gray-400 italic">September 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}