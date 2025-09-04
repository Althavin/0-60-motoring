import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaArrowRight, FaPhone, FaEnvelope } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  🚗 Your Trusted Car Partner
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                We Cater For All Your{" "}
                <span className="text-primary relative">
                  Car
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded"></div>
                </span>{" "}
                Needs
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Welcome to 0-60 Motoring. Your ultimate destination for expert car advice, 
                professional reviews, personalized consultation, and reliable car sourcing services.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/enquiries"
                className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                DISCOVER NOW
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="tel:+254790364599"
                className="bg-white border-2 border-gray-200 hover:border-primary text-gray-800 hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <FaPhone className="text-sm" />
                CALL US NOW
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaPhone className="text-primary" />
                <span>+254 790 364 599</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                <span>0to60motoringkenya@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Content - Car Image */}
          <div className="relative">
            {/* Background Shape */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full transform rotate-6 scale-110"></div>
            
            <div className="relative z-10">
              <Image
                src="/car7.webp"
                alt="Professional Car Services"
                width={600}
                height={400}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
              
              {/* Floating WhatsApp Button */}
              <div className="absolute bottom-8 right-8">
                <a
                  href="https://wa.me/254790364599"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-green hover:bg-green/90 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center gap-3"
                >
                  <FaWhatsapp className="text-2xl" />
                  <span className="hidden group-hover:block font-medium pr-2 animate-fade-in">
                    Chat Now
                  </span>
                </a>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-green/10 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
