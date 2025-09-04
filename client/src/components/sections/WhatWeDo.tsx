import Image from "next/image";
import Link from "next/link";
import { FaCar, FaSearch, FaHandshake, FaArrowRight, FaPhone } from "react-icons/fa";

const WhatWeDo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              🎯 Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive automotive solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          
          {/* Service 1: Car Advice & Consultancy */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <FaHandshake className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Car Advice & Consultancy
                </h3>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                We offer expert car consultancy services, professional scouting, and reliable car sourcing 
                including making direct imports on behalf of our valued clients. Our team of automotive 
                experts ensures you make the right choice.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Expert automotive consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Professional car scouting</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Import assistance services</span>
                </div>
              </div>

              <Link
                href="tel:+254790364599"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FaPhone className="text-sm" />
                Talk to Us
                <FaArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <Image
                src="/Portsmouth.webp"
                alt="Car Consultation Services"
                width={600}
                height={400}
                className="relative z-10 w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Service 2: Car Scouting & Sourcing */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-green/10 p-3 rounded-lg">
                  <FaSearch className="w-6 h-6 text-green" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Scouting & Sourcing
                </h3>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Experience the convenience of our car scouting and sourcing services, where we go the extra mile 
                to find your perfect vehicle. Let us find your dream car while you sit back and relax.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green rounded-full"></div>
                  <span className="text-gray-700">Nationwide vehicle search</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green rounded-full"></div>
                  <span className="text-gray-700">Quality inspection services</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green rounded-full"></div>
                  <span className="text-gray-700">Negotiation on your behalf</span>
                </div>
              </div>

              <Link
                href="tel:+254790364599"
                className="inline-flex items-center gap-2 bg-green hover:bg-green/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FaPhone className="text-sm" />
                Talk to Us
                <FaArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:order-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-l from-green/20 to-transparent rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
              <div className="relative z-10 bg-gray-900 rounded-2xl p-8 shadow-2xl">
                <div className="text-center space-y-4">
                  <FaCar className="w-16 h-16 text-green mx-auto" />
                  <h4 className="text-2xl font-bold text-white">Dream Car Finder</h4>
                  <p className="text-gray-300">
                    Tell us what you want, and we'll find it for you
                  </p>
                  <div className="bg-green/20 p-4 rounded-lg">
                    <p className="text-green font-semibold">
                      "Found my perfect Range Rover in just 2 weeks!" - Happy Customer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-green/5 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact us today and let's discuss your automotive needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/enquiries"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Get Quote
              <FaArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="tel:+254790364599"
              className="inline-flex items-center gap-2 bg-green hover:bg-green/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <FaPhone className="text-sm" />
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
