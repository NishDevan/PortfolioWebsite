export default function Home() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-7xl">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-24">
        {/* Left Section - Text */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">Hi, I'm Devan. </h1>
          <p className="text-lg text-gray-400 mb-8">Majoring CompE & UI</p>
          
          <div className="space-y-2 text-lg">
            <p>I obsessed with coding</p>
            <p>I love graphics design</p>
            <p>I also play games</p>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-600">
            <img
              src="/profile. jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section - Experience & Awards */}
      <div className="grid md:grid-cols-2 gap-16">
        {/* Experience */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">Staff of Community Service @ IME FTUI 2025</h3>
              <p className="text-sm text-gray-400 italic">February 2025 - Present</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Staff of Creative Marketing @ EXERCISE FTUI 2025</h3>
              <p className="text-sm text-gray-400 italic">February 2025 - Present</p>
            </div>
          </div>
        </div>

        {/* Awards */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Awards</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">Third Place @ PKM-RE by OIM FTUI 2025</h3>
              <p className="text-sm text-gray-400 italic">June 2025</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Second Place @ History Olympiad by GIO 2023</h3>
              <p className="text-sm text-gray-400 italic">September 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}