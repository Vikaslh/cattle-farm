import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Star, ChevronLeft, ChevronRight, Menu, X, Mail, User, Calendar, Shield, Award, Heart } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentAnimal, setCurrentAnimal] = useState(0);

  const testimonials = [
    {
      name: "Priya S.",
      rating: 5,
      text: "Excellent care for our livestock. The team at Nayaab is professional and truly loves animals. Highly recommend their boarding services!"
    },
    {
      name: "Rajesh M.",
      rating: 5,
      text: "My daughter has been taking horse riding lessons here for 6 months. The instructors are patient and skilled. Great facility!"
    },
    {
      name: "Anita K.",
      rating: 4,
      text: "Purchased healthy goats from Nayaab. Fair pricing and the animals were well-cared for. Will definitely return."
    },
    {
      name: "Vikram P.",
      rating: 5,
      text: "The barn rental service is fantastic. Our cattle are in safe hands and the monthly care is worth every rupee."
    }
  ];

  const animals = [
    {
      type: "Sheep",
      image: "https://images.pexels.com/photos/2219840/pexels-photo-2219840.jpeg",
      description: "Premium quality sheep with excellent breeding lines",
      available: 15,
      price: "₹8,000 - ₹15,000",
      care: "₹2,000/month"
    },
    {
      type: "Goats",
      image: "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg",
      description: "Hardy goats perfect for milk production and breeding",
      available: 22,
      price: "₹5,000 - ₹12,000",
      care: "₹1,800/month"
    },
    {
      type: "Chickens",
      image: "https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg",
      description: "Free-range chickens and premium egg layers",
      available: 50,
      price: "₹300 - ₹800",
      care: "₹200/month"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextAnimal = () => {
    setCurrentAnimal((prev) => (prev + 1) % animals.length);
  };

  const prevAnimal = () => {
    setCurrentAnimal((prev) => (prev - 1 + animals.length) % animals.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-forest-800">Nayaab Cattle Farm</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection('home')} className="text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</button>
                <button onClick={() => scrollToSection('animals')} className="text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Animals</button>
                <button onClick={() => scrollToSection('academy')} className="text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Academy</button>
                <button onClick={() => scrollToSection('pricing')} className="text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</button>
                <button onClick={() => scrollToSection('contact')} className="text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-forest-700 hover:text-forest-900 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('home')} className="block text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-base font-medium w-full text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="block text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-base font-medium w-full text-left">About</button>
              <button onClick={() => scrollToSection('animals')} className="block text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-base font-medium w-full text-left">Animals</button>
              <button onClick={() => scrollToSection('academy')} className="block text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-base font-medium w-full text-left">Academy</button>
              <button onClick={() => scrollToSection('pricing')} className="block text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-base font-medium w-full text-left">Pricing</button>
              <button onClick={() => scrollToSection('contact')} className="block text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-base font-medium w-full text-left">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30">
          <img
            src="https://thumbs.dreamstime.com/b/spring-lambs-baby-sheep-field-young-green-farm-70100459.jpg"
            alt="Countryside farm view"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-cream-200">Nayaab</span> Cattle Farm
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Premium livestock care, horse riding academy, and countryside experiences in the heart of nature
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('animals')}
              className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Our Animals
            </button>
            <button
              onClick={() => scrollToSection('academy')}
              className="bg-cream-100 hover:bg-cream-200 text-forest-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Horse Riding Classes
            </button>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
          <a
            href="tel:+919876543210"
            className="bg-forest-600 hover:bg-forest-700 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110"
          >
            <Phone className="h-6 w-6" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-forest-800 mb-6">About Nayaab Cattle Farm</h2>
              <p className="text-lg text-forest-700 mb-6 leading-relaxed">
                For over two decades, Nayaab Cattle Farm has been a trusted name in premium livestock care and horse riding education. Located in the pristine countryside, our farm spans 50 acres of lush green pastures where animals roam freely and live in harmony with nature.
              </p>
              <p className="text-lg text-forest-700 mb-6 leading-relaxed">
                We specialize in breeding and caring for high-quality livestock including sheep, cows, goats, and chickens. Our horse riding academy offers professional training for all skill levels, from beginners to advanced riders.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-forest-800">20+</div>
                  <div className="text-forest-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-forest-800">500+</div>
                  <div className="text-forest-600">Happy Customers</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/70737/dairy-cows-cows-feed-agriculture-70737.jpeg"
                alt="Farm landscape"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Animals Section */}
      <section id="animals" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-800 mb-4">Our Premium Livestock</h2>
            <p className="text-lg text-forest-600 max-w-2xl mx-auto">
              Discover our carefully bred and lovingly cared for animals, available for purchase or monthly care services.
            </p>
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden relative">
            <div className="bg-cream-50 rounded-xl p-6 shadow-lg">
              <img
                src={animals[currentAnimal].image}
                alt={animals[currentAnimal].type}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-forest-800 mb-2">{animals[currentAnimal].type}</h3>
              <p className="text-forest-600 mb-4">{animals[currentAnimal].description}</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-forest-700 font-medium">Available:</span>
                  <span className="text-forest-800 font-bold">{animals[currentAnimal].available} animals</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-forest-700 font-medium">Purchase Price:</span>
                  <span className="text-forest-800 font-bold">{animals[currentAnimal].price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-forest-700 font-medium">Monthly Care:</span>
                  <span className="text-forest-800 font-bold">{animals[currentAnimal].care}</span>
                </div>
              </div>
              <button className="w-full bg-forest-600 hover:bg-forest-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Quick Inquiry
              </button>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={prevAnimal}
                className="bg-forest-600 hover:bg-forest-700 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextAnimal}
                className="bg-forest-600 hover:bg-forest-700 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {animals.map((animal, index) => (
              <div key={index} className="bg-cream-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={animal.image}
                  alt={animal.type}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-forest-800 mb-2">{animal.type}</h3>
                <p className="text-forest-600 text-sm mb-4">{animal.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-forest-700">Available:</span>
                    <span className="text-forest-800 font-semibold">{animal.available}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-forest-700">Price:</span>
                    <span className="text-forest-800 font-semibold">{animal.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-forest-700">Care:</span>
                    <span className="text-forest-800 font-semibold">{animal.care}</span>
                  </div>
                </div>
                <button className="w-full bg-forest-600 hover:bg-forest-700 text-white py-2 rounded-lg font-semibold transition-colors">
                  Quick Inquiry
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horse Riding Academy */}
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

          {/* Class Schedule */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h4 className="text-xl font-bold text-forest-800 mb-4">Beginner Classes</h4>
              <div className="space-y-2 text-forest-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 11:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>1 hour sessions</span>
                </div>
                <div className="text-forest-800 font-bold text-lg mt-4">₹1,500/session</div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h4 className="text-xl font-bold text-forest-800 mb-4">Intermediate Classes</h4>
              <div className="space-y-2 text-forest-600">
                <div className="flex justify-between">
                  <span>Tuesday - Thursday:</span>
                  <span>4:00 PM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>1.5 hour sessions</span>
                </div>
                <div className="text-forest-800 font-bold text-lg mt-4">₹2,000/session</div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h4 className="text-xl font-bold text-forest-800 mb-4">Advanced Training</h4>
              <div className="space-y-2 text-forest-600">
                <div className="flex justify-between">
                  <span>By Appointment</span>
                  <span>Flexible timing</span>
                </div>
                <div className="flex justify-between">
                  <span>Competition Prep:</span>
                  <span>Available</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>2 hour sessions</span>
                </div>
                <div className="text-forest-800 font-bold text-lg mt-4">₹3,000/session</div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-forest-800 mb-6 text-center">Book Your Horse Riding Session</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-forest-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-forest-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-forest-700 font-medium mb-2">Experience Level</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
              <div>
                <label className="block text-forest-700 font-medium mb-2">Preferred Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-forest-700 font-medium mb-2">Additional Notes</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  placeholder="Any special requirements or questions..."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Book Session
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-800 mb-4">What Our Customers Say</h2>
            <div className="flex justify-center mb-4">
              {renderStars(5)}
            </div>
            <p className="text-lg text-forest-600">Trusted by families and animal lovers across the region</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-cream-50 rounded-lg p-8 shadow-lg text-center">
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              <p className="text-lg text-forest-700 mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-forest-800 font-semibold">
                {testimonials[currentTestimonial].name}
              </p>
            </div>
            
            <div className="flex justify-between mt-6">
              <button
                onClick={prevTestimonial}
                className="bg-forest-600 hover:bg-forest-700 text-white p-3 rounded-full transition-colors shadow-lg"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-forest-600 hover:bg-forest-700 text-white p-3 rounded-full transition-colors shadow-lg"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Care Plans */}
      <section id="pricing" className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-800 mb-4">Pricing & Care Plans</h2>
            <p className="text-lg text-forest-600 max-w-2xl mx-auto">
              Transparent pricing for all our services, from livestock purchase to monthly care plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Basic Care Plan */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-forest-800 mb-4">Basic Care</h3>
              <div className="text-3xl font-bold text-forest-600 mb-6">₹1,500<span className="text-lg font-normal">/month</span></div>
              <ul className="space-y-3 text-forest-700 mb-8">
                <li>• Daily feeding & watering</li>
                <li>• Basic shelter & protection</li>
                <li>• Weekly health checks</li>
                <li>• Emergency care included</li>
              </ul>
              <button className="w-full bg-forest-600 hover:bg-forest-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Choose Plan
              </button>
            </div>

            {/* Premium Care Plan */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-forest-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-forest-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-forest-800 mb-4">Premium Care</h3>
              <div className="text-3xl font-bold text-forest-600 mb-6">₹2,500<span className="text-lg font-normal">/month</span></div>
              <ul className="space-y-3 text-forest-700 mb-8">
                <li>• Everything in Basic Care</li>
                <li>• Premium nutrition & supplements</li>
                <li>• Bi-weekly veterinary visits</li>
                <li>• Grooming services</li>
                <li>• 24/7 monitoring</li>
              </ul>
              <button className="w-full bg-forest-600 hover:bg-forest-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Choose Plan
              </button>
            </div>

            {/* Barn Rental */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-forest-800 mb-4">Barn Rental</h3>
              <div className="text-3xl font-bold text-forest-600 mb-6">₹5,000<span className="text-lg font-normal">/month</span></div>
              <ul className="space-y-3 text-forest-700 mb-8">
                <li>• Private barn space</li>
                <li>• Your own livestock area</li>
                <li>• Full care services</li>
                <li>• Equipment storage</li>
                <li>• 24/7 farm access</li>
              </ul>
              <button className="w-full bg-forest-600 hover:bg-forest-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-forest-600">
              Everything you need to know about our services and farm operations.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-cream-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-forest-800 mb-3">What's included in the monthly care service?</h3>
              <p className="text-forest-700">Our monthly care includes daily feeding with premium nutrition, fresh water supply, regular health monitoring, basic veterinary care, secure shelter, and emergency support. We treat every animal as if it were our own.</p>
            </div>
            <div className="bg-cream-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-forest-800 mb-3">Are your horses suitable for beginner riders?</h3>
              <p className="text-forest-700">Absolutely! We have specially trained, gentle horses that are perfect for beginners. Our instructors ensure a safe, comfortable learning environment for riders of all ages and experience levels.</p>
            </div>
            <div className="bg-cream-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-forest-800 mb-3">Can I visit my animals anytime?</h3>
              <p className="text-forest-700">Yes, you can visit your animals during our operating hours (6:00 AM - 7:00 PM daily). We encourage owners to visit regularly and maintain a bond with their livestock.</p>
            </div>
            <div className="bg-cream-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-forest-800 mb-3">What safety measures do you have in place?</h3>
              <p className="text-forest-700">We maintain strict safety protocols including 24/7 surveillance, veterinary partnerships, emergency response procedures, and comprehensive insurance coverage for all animals under our care.</p>
            </div>
            <div className="bg-cream-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-forest-800 mb-3">Do you provide transportation for purchased animals?</h3>
              <p className="text-forest-700">Yes, we offer safe transportation services for purchased livestock within a 100km radius. Additional charges apply based on distance and number of animals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-forest-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-cream-200 max-w-2xl mx-auto">
              Have questions or ready to start your journey with us? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-cream-200 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-cream-300 focus:ring-2 focus:ring-cream-400 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-cream-200 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-cream-300 focus:ring-2 focus:ring-cream-400 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-cream-200 font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-cream-300 focus:ring-2 focus:ring-cream-400 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-cream-200 font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-cream-300 focus:ring-2 focus:ring-cream-400 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-cream-200 hover:bg-cream-300 text-forest-800 py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-cream-400 mr-4" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+919876543210" className="text-cream-300 hover:text-cream-100">+91 98765 43210</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-6 w-6 text-cream-400 mr-4" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a href="https://wa.me/919876543210" className="text-cream-300 hover:text-cream-100">+91 98765 43210</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-cream-400 mr-4" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:info@nayaabfarm.com" className="text-cream-300 hover:text-cream-100">info@nayaabfarm.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-cream-400 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-cream-300">Village Nayaab, Near Highway Junction<br />District Countryside, State 123456</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-cream-400 mr-4" />
                    <div>
                      <p className="font-semibold">Operating Hours</p>
                      <p className="text-cream-300">Daily: 6:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Find Us</h4>
                <div className="bg-white/20 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-cream-400 mx-auto mb-2" />
                    <p className="text-cream-300">Interactive map will load here</p>
                    <button className="mt-2 text-cream-200 hover:text-cream-100 underline">
                      Open in Google Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-900 text-cream-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Nayaab Cattle Farm</h3>
              <p className="text-cream-300 mb-4">
                Your trusted partner for premium livestock care and horse riding education in the countryside.
              </p>
              <div className="flex space-x-4">
                <a href="https://wa.me/919876543210" className="text-cream-400 hover:text-cream-200">
                  <MessageCircle className="h-6 w-6" />
                </a>
                <a href="tel:+919876543210" className="text-cream-400 hover:text-cream-200">
                  <Phone className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-cream-300 hover:text-cream-100">About Us</button></li>
                <li><button onClick={() => scrollToSection('animals')} className="text-cream-300 hover:text-cream-100">Our Animals</button></li>
                <li><button onClick={() => scrollToSection('academy')} className="text-cream-300 hover:text-cream-100">Horse Academy</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-cream-300 hover:text-cream-100">Pricing</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-cream-300">
                <li>Livestock Care & Boarding</li>
                <li>Horse Riding Lessons</li>
                <li>Animal Purchase & Sales</li>
                <li>Barn Rental Services</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-forest-700 mt-8 pt-8 text-center">
            <p className="text-cream-400">&copy; 2025 Nayaab Cattle Farm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;