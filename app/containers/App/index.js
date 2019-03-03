/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../../components/Routes';
import TopNavigation from '../../components/topNavigation';
import SideNavigation from '../../components/sideNavigation';
import Footer from '../../components/Footer';
import './index.css';

export default function App() {
  return (
    <Router>
      <div className="flexible-content">
        <TopNavigation />
        <SideNavigation />
        <main id="content" className="p-5">
          <Routes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
