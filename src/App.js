import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CreateOrderPage from './pages/CreateOrderPage';
import BecomeAProPage from './pages/BecomeAProPage';
import MyOrdersPage from './pages/MyOrdersPage';
import AuthPage from './pages/AuthPage';
import ArchitecturePage from './pages/ArchitecturePage';
import MastersListPage from './pages/MastersListPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background dark:bg-surface-dim text-on-background dark:text-inverse-on-surface transition-colors duration-300">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create-order" element={<CreateOrderPage />} />
            <Route path="/become-a-pro" element={<BecomeAProPage />} />
            <Route path="/my-orders" element={<MyOrdersPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/architecture" element={<ArchitecturePage />} />
            <Route path="/masters" element={<MastersListPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
