'use client';

import { useState, useMemo } from 'react';

export default function BookingForm() {
  // Replace this with your actual Calendly URL
  // Example: https://calendly.com/your-username/30min-strategy-call
  // You can find this URL in your Calendly account under "Share your link"
  const CALENDLY_URL = 'https://calendly.com/isaconnectdiscoverycall/30min';

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

  // Available time slots - Central Time, starting from 10:00 AM
  const timeSlots = [
    '10:00 AM CT', '10:30 AM CT', '11:00 AM CT', '11:30 AM CT',
    '12:00 PM CT', '12:30 PM CT', '1:00 PM CT', '1:30 PM CT'
  ];

  // Generate next 4 available business days
  const calendarDays = useMemo(() => {
    const days = [];
    const today = new Date();
    let currentDay = new Date(today);
    
    // Find the next business day (Monday-Friday)
    while (days.length < 4) {
      currentDay.setDate(currentDay.getDate() + 1);
      const dayOfWeek = currentDay.getDay();
      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        days.push(new Date(currentDay));
      }
    }
    
    return days;
  }, []);

  const isDateAvailable = (date) => {
    if (!date) return false;
    // Check if the date is in our 4 available business days
    return calendarDays.some(availableDate => 
      availableDate.toDateString() === date.toDateString()
    );
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

    // Prepare Calendly URL with pre-filled information
    const calendlyParams = new URLSearchParams({
      name: formData.fullName,
      email: formData.email,
      // Custom fields for additional information
      'a1': formData.brokerageName, // Brokerage Name
      'a2': formData.phone, // Phone
      'a3': formData.monthlyLeadVolume, // Monthly Lead Volume
      'a4': formData.message, // Message
      // Add preferred date/time as notes
      'a5': `Preferred: ${formatDate(selectedDate)} at ${selectedTime}`
    });

    const fullCalendlyUrl = `${CALENDLY_URL}?${calendlyParams.toString()}`;

    // Redirect to Calendly
    window.open(fullCalendlyUrl, '_blank');

    // Show confirmation message
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
        <h3 className="text-2xl font-bold text-[#090818] mb-3">Redirecting to Calendly...</h3>
        <p className="text-[#4E4E58] mb-2">
          Opening Calendly to schedule your call for <span className="font-semibold">{formatDate(selectedDate)}</span> at <span className="font-semibold">{selectedTime}</span>
        </p>
        <p className="text-[#4E4E58] mb-6">
          Your information has been pre-filled for convenience.
        </p>
        <p className="text-sm text-[#4E4E58] bg-white/60 rounded-lg p-4">
          <strong>Calendly Integration:</strong> Complete your booking on Calendly. We&apos;ll receive your scheduling confirmation automatically.
        </p>
      </div>
    );
  }

  const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-purple)] focus:border-transparent outline-none transition-all text-[#090818] bg-white";
  const labelClasses = "block text-sm font-medium text-[#090818] mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
      <div className="border border-gray-200 rounded-xl p-4 sm:p-6 bg-gray-50/50">
        <h3 className="text-base sm:text-lg font-semibold text-[#090818] mb-3 sm:mb-4">Select Date & Time</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Calendar */}
          <div>
            {/* Month Navigation - Hidden since we show fixed 4 days */}
            <div className="flex items-center justify-between mb-4 opacity-0 pointer-events-none">
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
                Next 4 Business Days
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
            
            {/* Simplified 4-day calendar */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {calendarDays.map((date, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedDate(date)}
                  className={`
                    p-3 sm:p-4 text-center rounded-lg border-2 transition-all touch-manipulation active:scale-95
                    ${selectedDate && selectedDate.toDateString() === date.toDateString() 
                      ? 'gradient-bg text-white border-transparent' 
                      : 'border-gray-300 hover:border-purple-400 text-[#090818] bg-white'}
                  `}
                >
                  <div className="text-sm sm:text-lg font-semibold">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                  <div className="text-xl sm:text-2xl font-bold">{date.getDate()}</div>
                  <div className="text-xs sm:text-sm opacity-75">{date.toLocaleDateString('en-US', { month: 'short' })}</div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Time Slots */}
          <div>
            <p className="text-xs sm:text-sm font-medium text-[#090818] mb-2 sm:mb-3">
              {selectedDate ? `Available times for ${selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}` : 'Select a date first'}
            </p>
            <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
              {selectedDate ? timeSlots.map(time => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`
                    py-2.5 sm:py-3 px-2 sm:px-3 text-xs sm:text-sm rounded-lg border transition-all touch-manipulation active:scale-95
                    ${selectedTime === time 
                      ? 'gradient-bg text-white border-transparent' 
                      : 'border-gray-300 hover:border-purple-400 text-[#090818] bg-white'}
                  `}
                >
                  {time}
                </button>
              )) : (
                <p className="col-span-2 text-xs sm:text-sm text-[#4E4E58] text-center py-6 sm:py-8">
                  Please select a date from the calendar
                </p>
              )}
            </div>
          </div>
        </div>
        
        {selectedDate && selectedTime && (
          <div className="mt-3 sm:mt-4 p-2.5 sm:p-3 bg-purple-50 rounded-lg border border-purple-100">
            <p className="text-xs sm:text-sm text-[#090818]">
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
            Book Your Free Strategy Call
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
