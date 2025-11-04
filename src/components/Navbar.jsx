import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 dark:bg-zinc-900/60 border-b border-zinc-200/60 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow"></span>
          <span className="font-semibold text-zinc-900 dark:text-white">Parallax Studio</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
          <a className="hover:text-zinc-900 dark:hover:text-white transition" href="#features">Funzioni</a>
          <a className="hover:text-zinc-900 dark:hover:text-white transition" href="#about">Chi siamo</a>
          <a className="hover:text-zinc-900 dark:hover:text-white transition" href="#cta">Contattaci</a>
        </nav>
        <a href="#cta" className="inline-flex items-center rounded-md bg-zinc-900 text-white px-4 py-2 text-sm font-medium shadow hover:bg-zinc-800 transition dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100">
          Inizia ora
        </a>
      </div>
    </header>
  );
}
