'use client';

import { useState, useMemo } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    brokerageName: '',
    email: '',
    phone: '',
    monthlyLeadVolume: '',
    message: '',
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Available time slots
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ];

  // Generate calendar days
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startPadding = firstDay.getDay();
    const days = [];
    
    // Add empty slots for padding
    for (let i = 0; i < startPadding; i++) {
      days.push(null);
    }
    
    // Add actual days
    for (let day = 1; day <= lastDay.getDate(); day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  }, [currentMonth]);

  const isDateAvailable = (date) => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayOfWeek = date.getDay();
    // Available Monday-Friday, not in the past
    return date >= today && dayOfWeek !== 0 && dayOfWeek !== 6;
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time for your call.');
      return;
    }
    setIsSubmitting(true);
    
    // Demo: Show confirmation instead of redirecting
    setTimeout(() => {
      setShowConfirmation(true);
      setIsSubmitting(false);
    }, 1000);
  };

  const prevMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  if (showConfirmation) {
    return (
      <div className="text-center py-12 px-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
        <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#090818] mb-3">Strategy Call Booked!</h3>
        <p className="text-[#4E4E58] mb-2">
          <span className="font-semibold">{formatDate(selectedDate)}</span> at <span className="font-semibold">{selectedTime}</span>
        </p>
        <p className="text-[#4E4E58] mb-6">
          We've sent a confirmation email to <span className="font-semibold">{formData.email}</span>
        </p>
        <p className="text-sm text-[#4E4E58] bg-white/60 rounded-lg p-4">
          <strong>Demo Mode:</strong> In production, this would integrate with Calendly or your preferred scheduling system.
        </p>
      </div>
    );
  }

  const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-purple)] focus:border-transparent outline-none transition-all text-[#090818] bg-white";
  const labelClasses = "block text-sm font-medium text-[#090818] mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className={labelClasses}>
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Smith"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="brokerageName" className={labelClasses}>
            Brokerage Name *
          </label>
          <input
            type="text"
            id="brokerageName"
            name="brokerageName"
            required
            value={formData.brokerageName}
            onChange={handleChange}
            placeholder="Smith Realty Group"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@smithrealty.com"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="monthlyLeadVolume" className={labelClasses}>
          Monthly Lead Volume *
        </label>
        <select
          id="monthlyLeadVolume"
          name="monthlyLeadVolume"
          required
          value={formData.monthlyLeadVolume}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Select your monthly lead volume</option>
          <option value="1-50">1-50 leads/month</option>
          <option value="51-100">51-100 leads/month</option>
          <option value="101-250">101-250 leads/month</option>
          <option value="251-500">251-500 leads/month</option>
          <option value="500+">500+ leads/month</option>
        </select>
      </div>

      {/* Calendar Section */}
      <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
        <h3 className="text-lg font-semibold text-[#090818] mb-4">Select Date & Time</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Calendar */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                onClick={prevMonth}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-[#090818]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="font-semibold text-[#090818]">
                {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </span>
              <button
                type="button"
                onClick={nextMonth}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-[#090818]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <div key={day} className="text-xs font-medium text-[#4E4E58] py-2">{day}</div>
              ))}
              {calendarDays.map((date, idx) => (
                <button
                  key={idx}
                  type="button"
                  disabled={!isDateAvailable(date)}
                  onClick={() => date && isDateAvailable(date) && setSelectedDate(date)}
                  className={`
                    p-2 text-sm rounded-lg transition-all
                    ${!date ? 'invisible' : ''}
                    ${date && isDateAvailable(date) 
                      ? 'hover:bg-purple-100 cursor-pointer text-[#090818]' 
                      : 'text-gray-300 cursor-not-allowed'}
                    ${selectedDate && date && selectedDate.toDateString() === date.toDateString() 
                      ? 'gradient-bg text-white hover:opacity-90' 
                      : ''}
                  `}
                >
                  {date?.getDate()}
                </button>
              ))}
            </div>
          </div>
          
          {/* Time Slots */}
          <div>
            <p className="text-sm font-medium text-[#090818] mb-3">
              {selectedDate ? `Available times for ${selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}` : 'Select a date first'}
            </p>
            <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
              {selectedDate ? timeSlots.map(time => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`
                    py-2 px-3 text-sm rounded-lg border transition-all
                    ${selectedTime === time 
                      ? 'gradient-bg text-white border-transparent' 
                      : 'border-gray-300 hover:border-purple-400 text-[#090818] bg-white'}
                  `}
                >
                  {time}
                </button>
              )) : (
                <p className="col-span-2 text-sm text-[#4E4E58] text-center py-8">
                  Please select a date from the calendar
                </p>
              )}
            </div>
          </div>
        </div>
        
        {selectedDate && selectedTime && (
          <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-100">
            <p className="text-sm text-[#090818]">
              <span className="font-semibold">Selected:</span> {formatDate(selectedDate)} at {selectedTime}
            </p>
          </div>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your lead sources and goals..."
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !selectedDate || !selectedTime}
        className="w-full gradient-bg text-white py-4 px-6 rounded-lg font-semibold text-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Booking...
          </>
        ) : (
          <>
            Book My Strategy Call
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </>
        )}
      </button>

      <p className="text-center text-sm text-[#4E4E58]">
        Free 30-minute strategy call • No obligation • Available Monday-Friday
      </p>
    </form>
  );
}
