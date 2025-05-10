import React from 'react';
import { Star } from 'lucide-react';

function TestimonialsCard({ content, name, role, avatar, rating }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">{content}</p>
      <div className="flex items-center">
        <img 
          src={avatar} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      content: "CampusLinker has completely changed how I manage my academic life. The event notifications and study group features have improved my grades significantly!",
      name: "Vaibhav Tripathi",
      role: "Junior, Computer Science",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5
    },
    {
      content: "As a faculty member, I appreciate how CampusLinker streamlines communication with students. Sharing course materials and announcements has never been easier.",
      name: "Dr. Abhishek Solanki",
      role: "Associate Professor",
      avatar: "https://images.pexels.com/photos/18931192/pexels-photo-18931192/free-photo-of-portrait-of-a-street-vendor.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4
    },
    {
      content: "Being a commuter student, CampusLinker helps me stay connected to campus life. I never miss events now, and I've made great friends through the platform.",
      name: "Chaitanya Shree",
      role: "Senior, Business Administration",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    }
  ];
  
  return (
    <section id="testimonials">
      <div className="container mx-auto px-4 pb-20">
        <div className="mx-auto w-fit mb-28">
          <h2 className="mx-auto pt-10 w-fit text-4xl font-bold">What Our Users Say</h2>
          <p className="mx-auto w-fit mt-6 text-lg">Hear from students and faculty who've transformed their campus experience with CampusLinker.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialsCard
              key={index}
              content={testimonial.content}
              name={testimonial.name}
              role={testimonial.role}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;