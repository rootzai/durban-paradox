import React, { useState, useMemo } from 'react';
import { loreEntries, getLoreByCategory, LoreEntry } from '../data/lore';
import { Search, Filter, Link as LinkIcon, BookOpen, Clock, Hash, Tag } from 'lucide-react';
import { Link } from 'wouter';

export default function LoreVault() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<LoreEntry['category'] | 'all'>('all');
  const [selectedEntry, setSelectedEntry] = useState<LoreEntry | null>(null);

  const filteredEntries = useMemo(() => {
    let entries = loreEntries;

    if (selectedCategory !== 'all') {
      entries = getLoreByCategory(selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      entries = entries.filter(entry => 
        entry.title.toLowerCase().includes(query) || 
        entry.content.toLowerCase().includes(query) ||
        entry.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Sort events chronologically
    if (selectedCategory === 'event') {
      entries.sort((a, b) => {
        const yearA = parseInt(a.title.match(/\d{4}/)?.[0] || '0');
        const yearB = parseInt(b.title.match(/\d{4}/)?.[0] || '0');
        return yearA - yearB;
      });
    }

    return entries;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#F5F2E8] text-[#2C1810] font-serif p-8">
      <header className="mb-12 border-b border-[#2C1810]/20 pb-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">The Lore Vault</h1>
            <p className="text-[#8B4513] italic text-lg">Internal World Bible & Mythology</p>
          </div>
          <div className="flex gap-4">
            <Link href="/">
              <a className="px-4 py-2 border border-[#2C1810] hover:bg-[#2C1810] hover:text-[#F5F2E8] transition-colors text-sm uppercase tracking-widest">
                Back to Book
              </a>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Controls */}
        <aside className="lg:col-span-3 space-y-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B4513]" />
            <input 
              type="text" 
              placeholder="Search the archives..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/50 border border-[#2C1810]/20 focus:outline-none focus:border-[#2C1810] transition-colors font-sans text-sm"
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#8B4513] mb-4 flex items-center gap-2">
              <Filter className="w-3 h-3" /> Categories
            </h3>
            {['all', 'character', 'event', 'artifact', 'concept', 'symbol', 'story'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as any)}
                className={`block w-full text-left px-4 py-2 text-sm transition-colors border-l-2 ${
                  selectedCategory === cat 
                    ? 'border-[#2C1810] bg-[#2C1810]/5 font-bold' 
                    : 'border-transparent hover:border-[#2C1810]/30 hover:bg-[#2C1810]/5'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </aside>

        {/* Entry Grid */}
        <section className="lg:col-span-4 h-[calc(100vh-200px)] overflow-y-auto pr-4 space-y-4 scrollbar-thin scrollbar-thumb-[#2C1810]/20">
          <h3 className="text-xs uppercase tracking-widest font-bold text-[#8B4513] mb-4 sticky top-0 bg-[#F5F2E8] py-2 z-10">
            Entries ({filteredEntries.length})
          </h3>
          {filteredEntries.map(entry => (
            <div 
              key={entry.id}
              onClick={() => setSelectedEntry(entry)}
              className={`p-6 border cursor-pointer transition-all hover:shadow-md group ${
                selectedEntry?.id === entry.id 
                  ? 'bg-white border-[#2C1810] shadow-md' 
                  : 'bg-white/40 border-[#2C1810]/10 hover:border-[#2C1810]/30'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-full ${
                  entry.category === 'concept' ? 'bg-purple-100 text-purple-800' :
                  entry.category === 'event' ? 'bg-blue-100 text-blue-800' :
                  entry.category === 'character' ? 'bg-amber-100 text-amber-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {entry.category}
                </span>
                {entry.image && <BookOpen className="w-4 h-4 text-[#8B4513]" />}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#8B4513] transition-colors">
                {entry.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {entry.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-[10px] font-sans text-gray-500">#{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Detail View */}
        <section className="lg:col-span-5 bg-white border border-[#2C1810]/10 p-8 h-[calc(100vh-200px)] overflow-y-auto shadow-inner relative">
          {selectedEntry ? (
            <article className="prose prose-stone max-w-none">
              {selectedEntry.image && (
                <div className="mb-6 p-4 bg-gray-50 border border-gray-100 rounded-sm">
                  <img 
                    src={selectedEntry.image} 
                    alt={selectedEntry.title} 
                    className="w-full h-auto max-h-64 object-contain mx-auto mix-blend-multiply"
                  />
                </div>
              )}
              
              <div className="flex items-center gap-2 text-[#8B4513] text-xs uppercase tracking-widest mb-4 font-sans">
                <Clock className="w-3 h-3" />
                Added: {selectedEntry.dateAdded}
              </div>
              
              <h2 className="text-3xl font-bold mb-6 mt-0 text-[#2C1810]">{selectedEntry.title}</h2>
              
              <div className="whitespace-pre-line text-gray-800 leading-relaxed font-serif text-lg">
                {selectedEntry.content}
              </div>

              {selectedEntry.notes && (
                <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-sm font-sans text-yellow-900 italic">
                  <strong>Dev Note:</strong> {selectedEntry.notes}
                </div>
              )}

              {selectedEntry.connections && selectedEntry.connections.length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4 flex items-center gap-2">
                    <LinkIcon className="w-3 h-3" /> Connected Entries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedEntry.connections.map(connId => (
                      <span key={connId} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-sans">
                        {connId.replace(/-/g, ' ')}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 text-center p-8">
              <BookOpen className="w-16 h-16 mb-4 opacity-20" />
              <p className="text-lg font-serif italic">Select an entry from the archives to view its details.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
