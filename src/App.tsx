import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ConsultingServices } from './pages/ConsultingServices';
import { BusinessValuations } from './pages/BusinessValuations';
import { OperationalTools } from './pages/OperationalTools';
import { Insights } from './pages/Insights';
import { ArticlePage } from './pages/Insights/components/ArticlePage';
import { Contact } from './pages/Contact';
import { ThoughtLeadership } from './pages/ThoughtLeadership';
import { NewsRoom } from './pages/NewsRoom';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulting" element={<ConsultingServices />} />
          <Route path="/valuations" element={<BusinessValuations />} />
          <Route path="/tools" element={<OperationalTools />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<ArticlePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thought-leadership" element={<ThoughtLeadership />} />
          <Route path="/news" element={<NewsRoom />} />
        </Routes>
      </div>
    </Router>
  );
}