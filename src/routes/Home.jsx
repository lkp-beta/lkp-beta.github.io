import { NavItem } from '../NavItem';
import headshot from '/images/home-headshot.jpeg';

export default function Home() {
  return (
    <main>
      <h1>WELCOME TO LARRY KING PRODUCTIONS</h1>
      <section className="home">
        <ul>
          <NavItem title="About Us" to="about" />
          <NavItem title="Bands & Orchestras" to="bands-orchestras" />
          <ul>
            <NavItem title="Contemporary/Disco/R&B" to="top-40s" />
            <NavItem title="Classical" />
            <NavItem title="Jazz" />
            <NavItem title="Latin & Ethnic" to="world" />
            <NavItem title="Swing" />
          </ul>
          <NavItem title="Specialty Entertainment" to="specialty-entertainment" />
          <NavItem title="Weddings" to="weddings" />
          <NavItem title="Testimonials" to="testimonials" />
          <NavItem title="Contact Us" to="contact" />
        </ul>
        <img alt="" src={headshot} />
      </section>
    </main>
  );
}
