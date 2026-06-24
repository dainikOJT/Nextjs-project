import '../styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Cloud Infrastructure Dashboard',
  description: 'Next.js 14 performance and metrics monitor',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
