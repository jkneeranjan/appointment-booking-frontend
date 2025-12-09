import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { BookingForm } from './components/BookingForm';
import { Legal } from './pages/Legal';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="booking" element={<div className="py-20 px-4 bg-slate-50 min-h-screen"><BookingForm /></div>} />
            <Route path="impressum" element={<Legal />} />
            <Route path="privacy" element={<Legal />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;