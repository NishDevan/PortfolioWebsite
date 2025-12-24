'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name:  'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Me', path: '/about' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-darker/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-6 max-w-7xl">
        <div className="flex justify-center">
          <ul className="flex space-x-1 bg-dark/50 rounded-full px-6 py-3 border border-gray-700">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    pathname === item.path 
                      ? 'bg-gray-700 text-white font-semibold' 
                      :  'text-gray-400 hover:text-white hover: bg-gray-800/50'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}