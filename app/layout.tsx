import { ThemeProvider } from './components/ThemeProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuroraBackground } from './components/ui/AuroraBackground';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <ThemeProvider>
          <AuroraBackground>{children}</AuroraBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
