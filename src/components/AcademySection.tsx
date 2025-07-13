import React from 'react';
import ClassScheduleCard from './ClassScheduleCard';
import BookingForm from './BookingForm';
import HorseGallery from './HorseGallery';
import { Award, Shield, Heart } from 'lucide-react';

const AcademySection: React.FC = () => (
  <section id="academy" className="py-20 bg-cream-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-forest-800 mb-4">Horse Riding Academy</h2>
        <p className="text-lg text-forest-600 max-w-2xl mx-auto">
          Professional horse riding lessons for all ages and skill levels in a safe, supportive environment.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <img
            src="https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg"
            alt="Horse riding lesson"
            className="rounded-lg shadow-xl w-full h-96 object-cover"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-forest-800 mb-6">Why Choose Our Academy?</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <Award className="h-6 w-6 text-forest-600 mr-3 mt-1" />
              <div>
                <h4 className="font-semibold text-forest-800">Certified Instructors</h4>
                <p className="text-forest-600">All our trainers are certified professionals with years of experience.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Shield className="h-6 w-6 text-forest-600 mr-3 mt-1" />
              <div>
                <h4 className="font-semibold text-forest-800">Safety First</h4>
                <p className="text-forest-600">We maintain the highest safety standards with quality equipment and trained horses.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Heart className="h-6 w-6 text-forest-600 mr-3 mt-1" />
              <div>
                <h4 className="font-semibold text-forest-800">Individual Attention</h4>
                <p className="text-forest-600">Small class sizes ensure personalized instruction for every student.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HorseGallery />
      {/* Class Schedule */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <ClassScheduleCard
          title="Beginner Classes"
          schedule={[
            { day: 'Monday - Friday:', time: '9:00 AM - 11:00 AM' },
            { day: 'Saturday:', time: '8:00 AM - 12:00 PM' },
          ]}
          duration="1 hour sessions"
          price="₹1,500/session"
        />
        <ClassScheduleCard
          title="Intermediate Classes"
          schedule={[
            { day: 'Tuesday - Thursday:', time: '4:00 PM - 6:00 PM' },
            { day: 'Sunday:', time: '9:00 AM - 1:00 PM' },
          ]}
          duration="1.5 hour sessions"
          price="₹2,000/session"
        />
        <ClassScheduleCard
          title="Advanced Training"
          schedule={[
            { day: 'By Appointment', time: 'Flexible timing' },
            { day: 'Competition Prep:', time: 'Available' },
          ]}
          duration="2 hour sessions"
          price="₹3,000/session"
        />
      </div>
      {/* Booking Form */}
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-forest-800 mb-6 text-center">Book Your Horse Riding Session</h3>
        <BookingForm />
      </div>
    </div>
  </section>
);

export default AcademySection; 