import './globals.css';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: 'Technyat Specific Construction',
  description:
    'Discover the ultimate destination for epoxy floor coating, floor marking services, thermal-water insulation, colored renders, polyurea foam spray, roof insulation, and much more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
