export default function About() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="w-64 h-64 rounded-lg overflow-hidden border-4 border-gray-600">
            <img
              src="/profile.jpg"
              alt="Danish Putra Devananda"
              className="w-full h-full object-cover"
            />
          </div>

          {/* About Text */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-6">Danish Putra Devananda</h1>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              Hi, you can call me Danish or Devan. I'm currently an undergraduate student at UI majoring in Computer Engineering. I love learning and also creating something that is related to computers.
            </p>
            <p className="text-gray-400 text-sm">
              Contact me for any inquiries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}