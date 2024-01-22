import { Inter } from 'next/font/google';
import './globals.css'; // Make sure to import your global styles
import bg from '../public/images/bg.jpg';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Amedia',
  description: 'Amedia web studio makes your business easier',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ backgroundImage: `url(${bg.src})`, backgroundSize: 'cover' }}
      >
        {children}
      </body>
    </html>
  );
}
