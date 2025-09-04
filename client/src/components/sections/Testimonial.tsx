
import { testimonialData } from "@/lib/data";
import TestimonialCard from "../TestimonialCard";
import { v4 as uuidv4 } from "uuid";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              💬 What Our Clients Say
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with 0-60 Motoring
          </p>
          
          {/* Rating Display */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-5 h-5" />
              ))}
            </div>
            <span className="text-gray-600 font-medium">5.0 from 50+ reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((data, i) => (
            <div
              key={uuidv4()}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-primary text-white p-3 rounded-full">
                  <FaQuoteLeft className="w-4 h-4" />
                </div>
              </div>

              {/* Content */}
              <div className="pt-4 space-y-6">
                <p className="text-gray-700 leading-relaxed italic">
                  "{data.description}"
                </p>

                {/* Rating */}
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <img
                      src={data.image}
                      alt={data.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{data.name}</h4>
                    <p className="text-sm text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Ready to experience our exceptional service?</p>
          <a
            href="tel:+254790364599"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
