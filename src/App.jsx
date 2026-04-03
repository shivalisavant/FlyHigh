import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import PageLayout from './layouts/PageLayout';
import Home from './pages/Home';
import MockPage from './pages/MockPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="app-root">
      <ScrollToTop />
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/missions" element={<MockPage title="Missions" />} />
          <Route path="/technology" element={<MockPage title="Technology" />} />
          <Route path="/fleet" element={<MockPage title="Fleet" />} />
          <Route path="/pricing" element={<MockPage title="Pricing" />} />
          <Route path="/get-started" element={<MockPage title="Get Started" subtitle="Authentication servers booting." />} />
          <Route path="/privacy" element={<MockPage title="Privacy Policy" />} />
          <Route path="/terms" element={<MockPage title="Terms of Orbit" />} />
          <Route path="/telemetry" element={<MockPage title="Telemetry" />} />
          <Route path="/contact" element={<MockPage title="Contact Admiralty" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
