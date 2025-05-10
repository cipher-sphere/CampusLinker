import React from 'react'
import { MessageSquare, Calendar, BookOpen, Users, Bell, FileText } from 'lucide-react';
function FeatureCard({ icon, title, description, color }) {
  return (
    <div className='bg-white border rounded-xl shadow-lg'>
      <div className='my-8 mx-6'>
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color}`}>
          {icon}
        </div>
        <h4 className='font-bold text-2xl my-4'>{title}</h4>
        <p className='text-gray-700 text-xl mb-5'>{description}</p>
      </div>
    </div>
  )
}
function Features() {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "Seamless Communication",
      description: "Connect with classmates and faculty through instant messaging, group chats, and discussion forums.",
      color: "bg-blue-600"
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Event Management",
      description: "Discover, create, and RSVP to campus events, with reminders and calendar integration.",
      color: "bg-purple-600"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
      title: "Academic Resources",
      description: "Access course materials, study guides, and academic tools in one centralized location.",
      color: "bg-teal-600"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Community Building",
      description: "Join groups based on interests, majors, or clubs to build your campus community.",
      color: "bg-orange-500"
    },
    {
      icon: <Bell className="w-6 h-6 text-white" />,
      title: "Smart Notifications",
      description: "Stay updated with personalized alerts for deadlines, events, and important announcements.",
      color: "bg-red-500"
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "Collaborative Projects",
      description: "Work together on assignments and projects with integrated document sharing and editing.",
      color: "bg-green-500"
    }
  ];
  return (
    <section id="features" className='bg-gray-50'>
  <div className='container mx-auto px-4 pb-20'>
    <div className='mx-auto w-fit mb-28'>
      <h2 className='mx-auto pt-10 w-fit text-4xl font-bold'>All-in-One Campus Platform</h2>
      <p className='mx-auto w-fit mt-6 text-lg'>Discover how CampusLinker transforms your academic journey with these powerful features.</p>
    </div>
    <div className='grid grid-cols-3 gap-8'>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          color={feature.color}
          className='bg-white shadow-md rounded-lg p-4' // Example: Apply a different background here
        />
      ))}
    </div>
  </div>
</section>

  )
}

export default Features