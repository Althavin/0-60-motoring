import { BlogType } from "@/@types/blogs";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendar, FaUser, FaEye } from "react-icons/fa";

interface Props {
  blogs: BlogType[];
}

const Blog = ({ blogs }: Props) => {
  if (!blogs || blogs.length < 3) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              📝 Latest Content
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest automotive trends, reviews, and expert insights
          </p>
        </div>

        {/* Featured Blog Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Featured Post */}
          <div className="lg:col-span-2">
            <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src={blogs[0].images[0]}
                  alt={blogs[0].title}
                  width={800}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <FaUser className="w-3 h-3" />
                    <span>{blogs[0].author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCalendar className="w-3 h-3" />
                    <span>{new Date(blogs[0].createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {blogs[0].title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blogs[0].description.slice(0, 150)}...
                </p>
                
                <Link
                  href={`/blogs/${blogs[0]._id}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group"
                >
                  Read Full Article
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          </div>

          {/* Side Posts */}
          <div className="space-y-6">
            {blogs.slice(1, 3).map((blog) => (
              <article key={blog._id} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="flex flex-col">
                  <div className="relative overflow-hidden">
                    <Image
                      src={blog.images[0]}
                      alt={blog.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <FaCalendar className="w-3 h-3" />
                      <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {blog.description.slice(0, 100)}...
                    </p>
                    
                    <Link
                      href={`/blogs/${blog._id}`}
                      className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                    >
                      Read More
                      <FaArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-green/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Read More?
          </h3>
          <p className="text-gray-600 mb-6">
            Explore our complete collection of automotive articles and expert reviews
          </p>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <FaEye className="w-4 h-4" />
            View All Blogs
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
