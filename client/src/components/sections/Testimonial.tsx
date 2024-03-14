
import { testimonialData } from "@/lib/data";
import TestimonialCard from "../TestimonialCard";
import { v4 as uuidv4 } from "uuid";

const Testimonial = () => {
  return (
    <section id="testimonial" className="my-8 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20">
      <div className="space-y-4 pb-12">
            <h2 className="text-3xl font-semibold text-center sm:text-4xl">
              Testimonials
            </h2>
          
          </div>
      <div className="bg-black border-4 rounded-xl border-darkRed w-full h-full">
      <div className="py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-black ">
           

            {
              testimonialData.map((data, i) => (
           <TestimonialCard name={data.name} description={data.description} image={data.image}  key={uuidv4()}/>
              ))
            }
          </div>

          
        </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonial;
