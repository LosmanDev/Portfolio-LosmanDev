import Landing from './components/Landing';
import { Navbar } from './components/Navbar';

export default function Home() {
  return (
    <>
      <section className="min-h-screen">
        <Navbar
          navItems={[
            { name: 'Home', link: '/' },
            { name: 'Projects', link: '/projects' },
            { name: 'Contact', link: '/contact' },
          ]}
        />
        <Landing />
      </section>
    </>
  );
}
