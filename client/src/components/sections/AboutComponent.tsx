
import { FaCheckCircle, FaUsers, FaCar, FaAward } from "react-icons/fa";

const AboutComponent = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block">
            <span className="bg-green/10 text-green px-4 py-2 rounded-full text-sm font-medium">
              🚗 Our Story
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            About 0-60 Motoring
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to <span className="font-semibold text-primary">0-60 Motoring</span>, your ultimate destination for everything 
                automotive! Our mission is simple: to help you find the perfect car that fits your lifestyle 
                and budget while making the entire process easy and enjoyable.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're in the market for a new ride, seeking expert car reviews and advice, or looking 
                for personalized consultation services, we've got you covered. We leverage our extensive network 
                and expertise to find the ideal vehicle tailored to your needs.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg mt-1">
                  <FaCheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Reviews</h4>
                  <p className="text-gray-600 text-sm">In-depth car reviews and industry insights</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green/10 p-2 rounded-lg mt-1">
                  <FaCar className="w-5 h-5 text-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Car Sourcing</h4>
                  <p className="text-gray-600 text-sm">Professional vehicle scouting and sourcing</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg mt-1">
                  <FaUsers className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Consultation</h4>
                  <p className="text-gray-600 text-sm">Personalized automotive consultation</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green/10 p-2 rounded-lg mt-1">
                  <FaAward className="w-5 h-5 text-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Trusted Service</h4>
                  <p className="text-gray-600 text-sm">Years of automotive expertise</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-green/10 rounded-3xl p-8 space-y-8">
              
              {/* Statistics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green mb-2">100+</div>
                  <div className="text-gray-600 text-sm">Cars Sourced</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">Customer Support</div>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="bg-white/80 backdrop-blur rounded-2xl p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700">
                  "To revolutionize the car buying experience by providing expert guidance, 
                  transparent advice, and exceptional service that puts our customers first."
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
