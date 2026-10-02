import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import GalleryStore from './components/GalleryStore';
import ProductDetail from './components/ProductDetail';
import CommissionsPage from './components/CommissionsPage';
import AboutPage from './components/AboutPage';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import { ARTWORKS } from './data/artworks';

export default function App() {
  const [currentView, setCurrentView] = useState('store'); // 'store', 'product', 'commissions', 'about'
  const [selectedArtwork, setSelectedArtwork] = useState(ARTWORKS[0]);
  const [initialCategory, setInitialCategory] = useState('all');

  const handleSelectArtwork = (artwork) => {
    setSelectedArtwork(artwork);
    setCurrentView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToCategory = (category) => {
    setInitialCategory(category);
    setCurrentView('store');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (view, category = 'all') => {
    if (category) setInitialCategory(category);
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] flex flex-col justify-between selection:bg-[#EAE6E1]">

        {/* Global Minimalist Header */}
        <Navbar
          currentView={currentView}
          setCurrentView={setCurrentView}
          onSelectCategory={handleNavigateToCategory}
        />

        {/* Dynamic Main Content View */}
        <main className="flex-1">
          {currentView === 'store' && (
            <GalleryStore
              onSelectArtwork={handleSelectArtwork}
              onNavigateToCommissions={() => setCurrentView('commissions')}
              initialCategory={initialCategory}
            />
          )}

          {currentView === 'product' && selectedArtwork && (
            <ProductDetail
              artwork={selectedArtwork}
              onBackToStore={() => setCurrentView('store')}
              onSelectArtwork={handleSelectArtwork}
            />
          )}

          {currentView === 'commissions' && (
            <CommissionsPage />
          )}

          {currentView === 'about' && (
            <AboutPage />
          )}
        </main>

        {/* Slide-over Cart Drawer */}
        <CartDrawer />

        {/* Global Minimalist Footer */}
        <Footer onNavigate={handleNavigate} />

      </div>
    </CartProvider>
  );
}
