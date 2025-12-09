import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

export const Legal = () => {
  const location = useLocation();
  const isPrivacy = location.pathname === '/privacy';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 animate-fade-in">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 text-slate-900">
      {isPrivacy ? (
        <div className="prose prose-slate max-w-none text-slate-900">
          <h1 className="text-slate-900">Datenschutzerklärung</h1>
          
          <h2 className="text-slate-900">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-slate-900">Allgemeine Hinweise</h3>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
          
          <h3 className="text-slate-900">Verantwortliche Stelle</h3>
          <p>
            {CONTACT_INFO.name}<br />
            {CONTACT_INFO.address}<br />
            {CONTACT_INFO.zipCity}<br />
            Deutschland<br />
            E-Mail: {CONTACT_INFO.email}
          </p>

          <h3 className="text-slate-900">Datenerfassung auf dieser Website</h3>
          <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br/>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.</p>
          
          <p><strong>Wie erfassen wir Ihre Daten?</strong><br/>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>

          <h2 className="text-slate-900">2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3 className="text-slate-900">Datenschutz</h3>
          <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
          
          <h3 className="text-slate-900">Rechte der betroffenen Person (Art. 15-22 DSGVO)</h3>
          <ul>
            <li>Recht auf Auskunft</li>
            <li>Recht auf Berichtigung</li>
            <li>Recht auf Löschung</li>
            <li>Recht auf Einschränkung der Verarbeitung</li>
            <li>Recht auf Datenübertragbarkeit</li>
            <li>Widerspruchsrecht</li>
          </ul>

          <h3 className="text-slate-900">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
          <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu. Die zuständige Aufsichtsbehörde für Baden-Württemberg ist:</p>
          <p>
            Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br/>
            Postfach 10 29 32<br/>
            70025 Stuttgart
          </p>

          <h2 className="text-slate-900">3. Datenerfassung auf dieser Website</h2>
          <h3 className="text-slate-900">Cookies</h3>
          <p>Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an.</p>
          
          <h3 className="text-slate-900">Kontaktformular & Terminbuchung</h3>
          <p>Wenn Sie uns per Kontaktformular oder Buchungssystem Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.</p>

        </div>
      ) : (
        <div className="prose prose-slate max-w-none text-slate-900">
          <h1 className="text-slate-900">Impressum</h1>

          <h2 className="text-slate-900">Angaben gemäß § 5 TMG</h2>
          <p>
            Dr. med. dent. Hjalmar Friese<br />
            Kieferorthopädie Bruchsal<br />
            Werner-von-Siemens-Straße 2<br />
            76646 Bruchsal<br />
            Deutschland
          </p>

          <h2 className="text-slate-900">Kontakt</h2>
          <p>
            Telefon: {CONTACT_INFO.phone}<br />
            E-Mail: {CONTACT_INFO.email}
          </p>

          <h2 className="text-slate-900">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p>
            <strong>Berufsbezeichnung:</strong> Zahnarzt/Kieferorthopäde<br />
            <strong>Zuständige Kammer:</strong> Landeszahnärztekammer Baden-Württemberg<br />
            <strong>Verliehen in:</strong> Deutschland
          </p>
          <p>
            Es gelten folgende berufsrechtliche Regelungen:<br />
            Berufsordnung der Landeszahnärztekammer Baden-Württemberg<br />
            Gebührenordnung für Zahnärzte (GOZ)<br />
            Einsehbar unter: <a href="https://lzk-bw.de" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">lzk-bw.de</a>
          </p>

          <h2 className="text-slate-900">Aufsichtsbehörde</h2>
          <p>
            Landeszahnärztekammer Baden-Württemberg<br />
            Albstadtweg 9<br />
            70567 Stuttgart
          </p>

          <h2 className="text-slate-900">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Dr. med. dent. Hjalmar Friese<br />
            Werner-von-Siemens-Straße 2<br />
            76646 Bruchsal
          </p>

          <h2 className="text-slate-900">Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
          
          <h3 className="text-slate-900">Haftung für Inhalte</h3>
          <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
        </div>
      )}
      </div>
    </div>
  );
};