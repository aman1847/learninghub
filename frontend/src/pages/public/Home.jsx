export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
   
      

      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Learn Anytime, Anywhere
          </h2>
          <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Build skills with expert-led courses and grow your career.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg">
            Get Started
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Why Choose Our LMS?
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h4 className="text-lg sm:text-xl font-semibold mb-2">Expert Teachers</h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Learn from industry professionals and certified instructors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h4 className="text-lg sm:text-xl font-semibold mb-2">Flexible Learning</h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Access courses anytime on any device.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h4 className="text-lg sm:text-xl font-semibold mb-2">Certificates</h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Earn certificates to showcase your skills.
            </p>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Popular Courses
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((course) => (
              <div key={course} className="bg-white rounded-2xl shadow overflow-hidden flex flex-col">
                <div className="h-40 sm:h-44 bg-blue-200"></div>

                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-lg sm:text-xl font-semibold mb-2">
                    React for Beginners
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 flex-1">
                    Start your journey with React and modern web development.
                  </p>
                  <button className="text-blue-600 font-semibold text-left">
                    View Course →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>

  );
}

