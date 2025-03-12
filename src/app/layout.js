import './globals.css';
import { Inter, Sora } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Font configuration
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
});

export const metadata = {
  title: 'Modern Web App',
  description: 'A sleek, modern web application built with Next.js App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}