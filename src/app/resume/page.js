export default function Resume() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Resume</h1>
      
      <div className="bg-dark p-8 rounded-lg border border-gray-700">
        <p className="text-center text-gray-400 mb-8">
          Download my resume or view it below
        </p>
        
        <div className="flex justify-center">
          <a 
            href="/resume. pdf" 
            download
            className="bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-lg transition"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}