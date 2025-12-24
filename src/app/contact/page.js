export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">My Contacts</h1>
        <p className="text-gray-400 mb-12">Contact me for any inquiries</p>

        {/* Profile Image */}
        <div className="w-48 h-48 mx-auto rounded-lg overflow-hidden border-4 border-gray-600 mb-12">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contact Information */}
        <div className="space-y-6 text-left bg-dark p-8 rounded-lg text-center">
          <div>
            <h3 className="text-gray-400 mb-2">Email</h3>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=danishputradevananda1@gmail.com" className="text-lg text-blue-400 hover:text-blue-300">
              danishputradevananda1@gmail.com
            </a>
          </div>
          <div>
            <h3 className="text-gray-400 mb-2">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/danishpd/" className="text-lg text-blue-400 hover:text-blue-300">
              linkedin.com/in/danishpd/
            </a>
          </div>
          <div>
            <h3 className="text-gray-400 mb-2">GitHub</h3>
            <a href="https://github.com/NishDevan" className="text-lg text-blue-400 hover:text-blue-300">
              github.com/NishDevan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}