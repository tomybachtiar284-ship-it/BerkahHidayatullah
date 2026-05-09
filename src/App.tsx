/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import { LanguageProvider } from './context/LanguageContext';

// Lazy load halaman yang tidak dimuat saat pertama kali
const Profile = lazy(() => import('./pages/Profile'));
const Catalog = lazy(() => import('./pages/Catalog'));

// Fallback ringan saat halaman dimuat
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-8 h-8 border-2 border-[#0082b4] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col font-sans text-slate-900 antialiased selection:bg-blue-200">
          <Navbar />
          <main className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/catalog" element={<Catalog />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
