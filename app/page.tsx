import Landing from './components/Landing';
import { Navbar } from './components/Navbar';
import { TracingBeam } from './components/ui/tracing-beam';

export default function Home() {
  return (
    <>
      <section className="min-h-screen dark:bg-black">
        <Navbar
          navItems={[
            { name: 'Home', link: '/' },
            { name: 'Projects', link: '/projects' },
            { name: 'Contact', link: '/contact' },
          ]}
        />
        <TracingBeam>
          <Landing />
        </TracingBeam>
      </section>
    </>
  );
}
