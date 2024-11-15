// pages/index.tsx

import Link from 'next/link';
import { NAV_LINKS } from '../constants';

const HomePage = () => {
  return (
    <div>
      {/* Navigation Links */}
      <nav className="flex gap-4 p-4 bg-gray-200">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key}>
            <a className="text-blue-600 hover:underline">{link.label}</a>
          </Link>
        ))}
      </nav>

      {/* Sections */}
      <section id="home" className="min-h-screen p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Home</h2>
        <p>Welcome to Treakli! This is the home section of the website.</p>
      </section>

      <section id="how_treakli_work" className="min-h-screen p-8 bg-gray-200">
        <h2 className="text-3xl font-bold mb-4">How Treakli Work?</h2>
        <p>Here, we explain how Treakli works to serve our users efficiently.</p>
      </section>

      <section id="services" className="min-h-screen p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Services</h2>
        <p>Discover the services we offer to help you achieve your goals.</p>
      </section>

      <section id="pricing" className="min-h-screen p-8 bg-gray-200">
        <h2 className="text-3xl font-bold mb-4">Pricing</h2>
        <p>Learn more about our pricing plans that suit your needs.</p>
      </section>

      <section id="contact_us" className="min-h-screen p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p>Contact us for any inquiries or support. We’re here to help!</p>
      </section>
    </div>
  );
};

export default HomePage;
