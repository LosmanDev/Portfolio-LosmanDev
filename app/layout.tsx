import { ThemeProvider } from './context/ThemeProvider';
import type { Metadata } from 'next';
import { AuroraBackground } from './components/ui/AuroraBackground';
import { Kameron } from 'next/font/google';
import './globals.css';

const kameron = Kameron({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "LosmanDev's Portfolio",
  description:
    'Personal portfolio site for Full Stack Software Engineer Liban Osman',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kameron.className}>
      <body className={kameron.className}>
        <ThemeProvider>
          <AuroraBackground>{children}</AuroraBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
