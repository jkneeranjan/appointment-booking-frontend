import React from 'react';
import { NavLink, ServiceItem, Review } from './types';
import { Smile, User, Calendar, MapPin, Phone, Mail, Clock, ShieldCheck, Star, Activity, Baby, BookOpen } from 'lucide-react';

export const CONTACT_INFO = {
  name: "Dr. med. dent. Hjalmar Friese",
  practice: "Kieferorthopädie Bruchsal",
  address: "Werner-von-Siemens-Straße 2",
  zipCity: "76646 Bruchsal",
  country: "Germany",
  phone: "07251 3030866",
  email: "praxis@kieferorthopaedie-bruchsal.de", // Assumed based on instructions
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Werner-von-Siemens-Straße+2+76646+Bruchsal",
};

export const OPENING_HOURS = [
  { day: "Montag", hours: "08:00 - 12:00 | 13:00 - 17:00" },
  { day: "Dienstag", hours: "08:00 - 12:00 | 13:00 - 18:00" },
  { day: "Mittwoch", hours: "08:00 - 12:00" },
  { day: "Donnerstag", hours: "08:00 - 12:00 | 13:00 - 17:00" },
  { day: "Freitag", hours: "08:00 - 12:00" },
];

export const NAV_LINKS: NavLink[] = [
  { path: '/', label: 'home' },
  { path: '/about', label: 'about' },
  { path: '/services', label: 'services' },
  { path: '/contact', label: 'contact' },
  { path: '/booking', label: 'booking' },
];

export const TRANSLATIONS = {
  home: { de: 'Startseite', en: 'Home' },
  about: { de: 'Über Uns', en: 'About Us' },
  services: { de: 'Leistungen', en: 'Services' },
  contact: { de: 'Kontakt', en: 'Contact' },
  booking: { de: 'Termin Buchen', en: 'Book Appointment' },
  imprint: { de: 'Impressum', en: 'Legal Notice' },
  privacy: { de: 'Datenschutz', en: 'Privacy Policy' },
  book_now: { de: 'Jetzt Termin vereinbaren', en: 'Book Appointment Now' },
  our_philosophy: { de: 'Unsere Philosophie', en: 'Our Philosophy' },
  read_more: { de: 'Mehr erfahren', en: 'Read More' },
  emergency: { de: 'Notfall?', en: 'Emergency?' },
  emergency_text: { de: 'Bei akuten Schmerzen rufen Sie uns bitte direkt an.', en: 'In case of acute pain, please call us directly.' },
  hero_title: { de: 'Ihr Lächeln in besten Händen', en: 'Your Smile in the Best Hands' },
  hero_subtitle: { de: 'Moderne Kieferorthopädie in Bruchsal für Kinder, Jugendliche und Erwachsene.', en: 'Modern orthodontics in Bruchsal for children, teenagers, and adults.' },
  welcome: { de: 'Willkommen', en: 'Welcome' },
  testimonials_title: { de: 'Das sagen unsere Patienten', en: 'What Our Patients Say' },
  contact_title: { de: 'Kontaktieren Sie uns', en: 'Contact Us' },
  send_message: { de: 'Nachricht senden', en: 'Send Message' },
  form_name: { de: 'Vorname & Nachname', en: 'Full Name' },
  form_email: { de: 'E-Mail Adresse', en: 'Email Address' },
  form_phone: { de: 'Telefonnummer', en: 'Phone Number' },
  form_message: { de: 'Ihre Nachricht', en: 'Your Message' },
  form_privacy: { de: 'Ich stimme der Datenschutzerklärung zu', en: 'I agree to the privacy policy' },
  success_message: { de: 'Vielen Dank! Ihre Nachricht wurde gesendet.', en: 'Thank you! Your message has been sent.' },
  booking_title: { de: 'Online Terminbuchung', en: 'Online Appointment Booking' },
  booking_reason: { de: 'Grund des Besuchs', en: 'Reason for Visit' },
  booking_insurance: { de: 'Versicherungsart', en: 'Insurance Type' },
  booking_date: { de: 'Wunschtermin', en: 'Preferred Date' },
  booking_time: { de: 'Wunschzeit', en: 'Preferred Time' },
  booking_submit: { de: 'Termin anfragen', en: 'Request Appointment' },
  cookie_text: { de: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern.', en: 'We use cookies to improve your experience.' },
  cookie_accept: { de: 'Alle akzeptieren', en: 'Accept All' },
  cookie_essential: { de: 'Nur notwendige', en: 'Essential Only' },
  cookie_settings: { de: 'Cookie-Einstellungen', en: 'Cookie Settings' },
  cookie_banner_title: { de: 'Datenschutzeinstellungen', en: 'Privacy Settings' },
  cookie_customize: { de: 'Einstellungen anpassen', en: 'Customize Settings' },
  cookie_save: { de: 'Auswahl speichern', en: 'Save Preferences' },
  cat_essential: { de: 'Essenziell', en: 'Essential' },
  cat_functional: { de: 'Funktional', en: 'Functional' },
  cat_analytics: { de: 'Analyse', en: 'Analytics' },
  cat_marketing: { de: 'Marketing', en: 'Marketing' },
  cat_essential_desc: { de: 'Notwendig für die Grundfunktionen der Website.', en: 'Necessary for basic functions of the website.' },
  cat_functional_desc: { de: 'Ermöglicht erweiterte Funktionen und Personalisierung.', en: 'Enables enhanced features and personalization.' },
  cat_analytics_desc: { de: 'Hilft uns zu verstehen, wie Besucher mit der Website interagieren.', en: 'Helps us understand how visitors interact with the website.' },
  cat_marketing_desc: { de: 'Wird verwendet, um Besuchern relevante Werbung anzuzeigen.', en: 'Used to display relevant ads to visitors.' },
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'brackets',
    title: 'Feste Zahnspangen',
    icon: 'brackets',
    description: 'Klassische und keramische Brackets für präzise Korrekturen.',
    details: ['Metallbrackets', 'Keramikbrackets (unauffällig)', 'Selbstligierende Systeme']
  },
  {
    id: 'aligners',
    title: 'Invisalign / Aligner',
    icon: 'sparkles',
    description: 'Die nahezu unsichtbare Art, Zähne zu begradigen.',
    details: ['Herausnehmbar', 'Transparent', 'Komfortabel im Alltag']
  },
  {
    id: 'kids',
    title: 'Kinder & Jugendliche',
    icon: 'baby',
    description: 'Frühbehandlung und Jugendkieferorthopädie.',
    details: ['Frühbehandlung ab 4 Jahren', 'Funktionskieferorthopädie', 'Wachstumssteuerung']
  },
  {
    id: 'adults',
    title: 'Erwachsene',
    icon: 'user',
    description: 'Ästhetische Lösungen für Patienten jeden Alters.',
    details: ['Lingualtechnik', 'Aligner-Therapie', 'Präprothetische KFO']
  },
];

export const REVIEWS: Review[] = [
  { id: 1, author: "Anna S.", rating: 5, text: "Sehr freundliches Team und tolle Behandlung. Dr. Friese nimmt sich viel Zeit." },
  { id: 2, author: "Markus B.", rating: 5, text: "Professionell, modern und kaum Wartezeiten. Kann ich nur empfehlen!" },
  { id: 3, author: "Julia K.", rating: 4, text: "Meine Tochter fühlt sich hier sehr wohl. Das Ergebnis der Zahnspange ist super." }
];

// Mapping icons for usage
export const IconMap = {
  brackets: Activity,
  sparkles: Star,
  baby: Baby,
  user: User,
  calendar: Calendar,
  map: MapPin,
  phone: Phone,
  mail: Mail,
  clock: Clock,
  shield: ShieldCheck,
  book: BookOpen,
};