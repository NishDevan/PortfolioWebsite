import './globals.css';  // ← Pastikan baris ini ada! 
import Navbar from '../components/navbar';

export const metadata = {
  title: 'Portfolio - Devan',
  description: 'My personal portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-darker">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}