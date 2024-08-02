import { ThemeProvider } from './context/ThemeProvider';
import type { Metadata } from 'next';
import { Kameron } from 'next/font/google';
import './globals.css';
import { AuroraBackground } from './components/ui/AuroraBackground';

const kameron = Kameron({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "LosmanDev's Portfolio",
  description:
    'Personal portfolio Site for Full Stack Software Engineer Liban Osman',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kameron.className}>
        <ThemeProvider>
          <AuroraBackground>{children}</AuroraBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
