import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export const BookingForm = () => {
  const { t, language } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    reason: 'Initial Consultation',
    insurance: 'Statutory Health Insurance',
    date: '',
    time: '',
    message: '',
    consent: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const val = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!formData.consent) {
      setError(language === 'de' ? 'Bitte stimmen Sie der Datenschutzerklärung zu.' : 'Please agree to the privacy policy.');
      setLoading(false);
      return;
    }

    const body = JSON.stringify({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      dob: formData.dob,
      preferredDate: formData.date,
      preferredSlot: formData.time,
      reason: formData.reason,
      insurance: formData.insurance,
      notes: formData.message
    });

    console.log('Booking payload:', body); // <-- debug helper

    try {
      const response = await fetch('https://appointment-backend-production-b508.up.railway.app/api/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        window.scrollTo(0, 0);
      } else {
        setError(language === 'de'
          ? `Fehler beim Buchen: ${result.error || 'Bitte versuchen Sie es später erneut.'}`
          : `Booking error: ${result.error || 'Please try again later.'}`
        );
      }
    } catch (err) {
      console.error('Booking error:', err);
      setError(language === 'de'
        ? 'Verbindungsfehler. Bitte versuchen Sie es später erneut.'
        : 'Connection error. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-12 text-center animate-fade-in">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-emerald-600 w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          {language === 'de' ? 'Anfrage erhalten!' : 'Request Received!'}
        </h2>
        <p className="text-slate-600 mb-8">
          {language === 'de'
            ? 'Vielen Dank für Ihre Terminanfrage. Wir haben Ihnen eine Bestätigung per E-Mail gesendet und werden uns in Kürze bei Ihnen melden.'
            : 'Thank you for your appointment request. We have sent a confirmation email and will contact you shortly.'}
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setStep(1);
            setFormData({
              firstName: '', lastName: '', email: '', phone: '', dob: '',
              reason: 'Initial Consultation', insurance: 'Statutory Health Insurance',
              date: '', time: '', message: '', consent: false
            });
          }}
          className="bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-800 transition-colors"
        >
          {language === 'de' ? 'Zurück zur Startseite' : 'Back to Home'}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-slate-100">
      <div className="bg-slate-900 p-6 text-white text-center">
        <h2 className="text-2xl font-semibold">{t('booking_title')}</h2>
      </div>

      <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
        {/* Personal Details */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-slate-900 border-b pb-2">1. {language === 'de' ? 'Persönliche Daten' : 'Personal Details'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">{language === 'de' ? 'Vorname' : 'First Name'} *</label>
              <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">{language === 'de' ? 'Nachname' : 'Last Name'} *</label>
              <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">{t('form_email')} *</label>
              <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">{t('form_phone')} *</label>
              <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">{language === 'de' ? 'Geburtsdatum' : 'Date of Birth'}</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed" />
            </div>
          </div>
        </div>

        {/* Appointment Details */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-slate-900 border-b pb-2">2. {language === 'de' ? 'Termindetails' : 'Appointment Details'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">{t('booking_reason')}</label>
              <select name="reason" value={formData.reason} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none bg-white text-slate-900">
                <option value="Initial Consultation">{language === 'de' ? 'Erstberatung' : 'Initial Consultation'}</option>
                <option value="Follow-up Appointment">{language === 'de' ? 'Nachsorgetermin' : 'Follow-up Appointment'}</option>
                <option value="Check-up">{language === 'de' ? 'Kontrolle' : 'Check-up'}</option>
                <option value="Emergency">{language === 'de' ? 'Notfall' : 'Emergency'}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">{t('booking_insurance')}</label>
              <select name="insurance" value={formData.insurance} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none bg-white text-slate-900">
                <option value="Statutory Health Insurance">{language === 'de' ? 'Gesetzlich versichert' : 'Statutory Health Insurance'}</option>
                <option value="Private Health Insurance">{language === 'de' ? 'Privatversichert' : 'Private Health Insurance'}</option>
                <option value="Self-payer">{language === 'de' ? 'Selbstzahler' : 'Self-payer'}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">{t('booking_date')} *</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-slate-400" size={20} />
                <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">{t('booking_time')} *</label>
              <div className="relative">
                <Clock className="absolute left-3 top-3 text-slate-400" size={20} />
                <select required name="time" value={formData.time} onChange={handleChange} className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none bg-white text-slate-900">
                  <option value="">{language === 'de' ? 'Zeit wählen...' : 'Select time...'}</option>
                  <option value="08:00">08:00 - 10:00</option>
                  <option value="10:00">10:00 - 12:00</option>
                  <option value="13:00">13:00 - 15:00</option>
                  <option value="15:00">15:00 - 17:00</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">{language === 'de' ? 'Weitere Informationen' : 'Additional Notes'}</label>
            <textarea name="message" rows={3} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed" />
          </div>
        </div>

        {/* Consent */}
        <div className="flex items-start">
          <input required type="checkbox" name="consent" checked={formData.consent} onChange={(e) => setFormData({...formData, consent: e.target.checked})} className="mt-1 h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-slate-300 rounded" />
          <span className="ml-3 text-sm text-slate-600">{t('form_privacy')}</span>
        </div>

        {error && (
          <div className="flex items-center text-red-600 bg-red-50 p-4 rounded-lg">
            <AlertCircle size={20} className="mr-2" />
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-600 text-white font-semibold py-4 rounded-xl hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-emerald-200/50 disabled:opacity-50 disabled:cursor-not-allowed">
          {loading ? (language === 'de' ? 'Wird gesendet...' : 'Sending...') : t('booking_submit')}
        </button>
      </form>
    </div>
  );
};
