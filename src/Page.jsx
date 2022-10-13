import { useLocation } from 'react-router-dom';
import sidebarFade from '/images/sidebarFade.jpg';
import navHeadshot from '/images/nav-headshot.jpeg';
import weddingCouple from '/images/wedding-couple.jpg';
import { NavItem } from './NavItem';

const bandOrchSubPaths = ['bands-orchestras', 'top-40s', 'classical', 'jazz', 'world', 'swing'];

export default function Page({ children }) {
  const { pathname } = useLocation();
  return (
    <>
      <header>
        <div>
          <a href="/" tabIndex="-1">
            LARRY KING PRODUCTIONS
          </a>
          <img alt="" src={navHeadshot} />
          <img alt="" src={weddingCouple} />
        </div>
        <p>New York&#39;s Music and Entertainment Resource for Great Parties and Special Events</p>
      </header>
      <div className="page">
        <nav>
          <ul>
            <NavItem title="Home" to="" />
            <NavItem title="About Us" to="about" />
            <NavItem title="Bands & Orchestras" to="bands-orchestras" />
            {bandOrchSubPaths.includes(pathname.slice(1)) && (
              <ul>
                <NavItem title="Contemporary/Disco/R&B" to="top-40s" />
                <NavItem title="Classical" />
                <NavItem title="Jazz" />
                <NavItem title="Latin & Ethnic" to="world" />
                <NavItem title="Swing" />
              </ul>
            )}
            <NavItem title="Specialty Entertainment" to="specialty-entertainment" />
            <NavItem title="Weddings" to="weddings" />
            <NavItem title="Contact Us" to="contact" />
          </ul>
          {(pathname === '/' || pathname === '/about') && (
            <section className="testimonials">
              <strong>Client Testimonials</strong>
              <p>
                Dear Larry, On behalf of Calvin Klein Cosmetics Company, I want to thank you for
                doing such a wonderful job at our Cocktail Reception at the Metropolitan Club.{' '}
                <a href="/testimonials">Read more...</a>
              </p>
            </section>
          )}
          <img
            src={sidebarFade}
            alt="Larry King Productions entices all senses but sound is without comparison"
          />
        </nav>
        <div>
          {children}
          {pathname !== '/contact' && (
            <>
              <div className="squiggle" />
              <div className="squiggle" />
              <footer>
                <h2>LARRY KING PRODUCTIONS</h2>
                <p className="rose">
                  New York&apos;s Music and Entertainment Resource for Great Parties and Special
                  Events
                </p>
                255 West 23rd Street, Suite #2C-W
                <br /> New York, New York 10011
                <a href="tel:+12126273282">tel (212) 627-3282</a>
                <a href="mailto:Info@LarryKingMusicNY.com">Info@LarryKingMusicNY.com</a>
                <a href="http://www.larrykingmusicny.com">www.larrykingmusicny.com</a>
              </footer>
            </>
          )}
        </div>
      </div>
    </>
  );
}
