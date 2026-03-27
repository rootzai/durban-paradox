import React, { useState } from 'react';
import { Search, Globe, Menu, User, Bell, X } from 'lucide-react';

interface WikiLayoutProps {
  children: React.ReactNode;
}

export function WikiLayout({ children }: WikiLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Wiki Header */}
      <header className="border-b border-gray-300 bg-white sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden">
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl font-serif font-bold text-gray-800 border border-gray-300">
                W
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-serif leading-none">Wikipedia</h1>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">The Free Encyclopedia</p>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search Wikipedia" 
                className="w-full h-9 pl-9 pr-4 bg-gray-50 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <Search className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="hidden md:inline hover:text-blue-600 cursor-pointer">Create account</span>
            <span className="hidden md:inline hover:text-blue-600 cursor-pointer">Log in</span>
            <User className="w-5 h-5 md:hidden" />
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto flex relative">
        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <aside className="absolute left-0 top-0 bottom-0 w-64 bg-white shadow-xl z-50 pt-4 px-6 overflow-y-auto">
              <div className="flex justify-end mb-4">
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              <nav className="space-y-6 text-sm">
                <div className="space-y-2">
                  <a href="#" className="block text-gray-800 hover:underline">Main page</a>
                  <a href="#" className="block text-gray-800 hover:underline">Contents</a>
                  <a href="#" className="block text-gray-800 hover:underline">Current events</a>
                  <a href="#" className="block text-gray-800 hover:underline">Random article</a>
                  <a href="#" className="block text-gray-800 hover:underline">About Wikipedia</a>
                  <a href="#" className="block text-gray-800 hover:underline">Contact us</a>
                  <a href="#" className="block text-gray-800 hover:underline">Donate</a>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-600 border-b pb-1 mb-2">Contribute</h3>
                  <a href="#" className="block text-gray-800 hover:underline">Help</a>
                  <a href="#" className="block text-gray-800 hover:underline">Learn to edit</a>
                  <a href="#" className="block text-gray-800 hover:underline">Community portal</a>
                  <a href="#" className="block text-gray-800 hover:underline">Recent changes</a>
                  <a href="#" className="block text-gray-800 hover:underline">Upload file</a>
                </div>
              </nav>
            </aside>
          </div>
        )}

        {/* Sidebar (Desktop) */}
        <aside className="hidden lg:block w-44 flex-shrink-0 pt-6 pr-6 text-sm">
          <nav className="space-y-6">
            <div className="space-y-2">
              <a href="#" className="block text-gray-800 hover:underline">Main page</a>
              <a href="#" className="block text-gray-800 hover:underline">Contents</a>
              <a href="#" className="block text-gray-800 hover:underline">Current events</a>
              <a href="#" className="block text-gray-800 hover:underline">Random article</a>
              <a href="#" className="block text-gray-800 hover:underline">About Wikipedia</a>
              <a href="#" className="block text-gray-800 hover:underline">Contact us</a>
              <a href="#" className="block text-gray-800 hover:underline">Donate</a>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-600 border-b pb-1 mb-2">Contribute</h3>
              <a href="#" className="block text-gray-800 hover:underline">Help</a>
              <a href="#" className="block text-gray-800 hover:underline">Learn to edit</a>
              <a href="#" className="block text-gray-800 hover:underline">Community portal</a>
              <a href="#" className="block text-gray-800 hover:underline">Recent changes</a>
              <a href="#" className="block text-gray-800 hover:underline">Upload file</a>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 pt-6 px-4 md:px-8 pb-20 border-l border-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}
