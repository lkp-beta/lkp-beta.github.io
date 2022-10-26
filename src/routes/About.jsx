import grandPiano from "/images/grand-piano.jpg";
import headshot from "/images/home-headshot.jpeg";

export default function About() {
  return (
    <main className="about">
      <h1>About Larry King Productions</h1>
      <section>
        <img src={headshot} alt="" width="20px" height="auto" />
        <p>
          <span>Larry King Productions</span> is New York&#39;s resource for private and corporate
          clients seeking premium music and entertainment services. Our big bands, orchestras and
          wide range of entertainment options are setting a new standard for live entertainment in
          21st Century New York City and across the country.
        </p>
      </section>
      <div className="squiggle" />
      <div className="squiggle" />
      <h5>Services</h5>
      <section>
        <ul>{servicesList.map(createItem)}</ul>
        <img alt="" src={grandPiano} />
      </section>
      <div className="squiggle" />
      <div className="squiggle" />
      <h5>Clients</h5>
      <section>
        <ul>{clientsList.map(createItem)}</ul>
      </section>
    </main>
  );
}

function createItem(el) {
  return <li key={el}>{el}</li>;
}

const servicesList = [
  "Bands and Orchestras",
  "Classical Groups",
  "Jazz Bands",
  "String Trios and Quartets",
  "Pianists and Harpists",
  "Latin, Salsa and Meringue",
  "Klezmer",
  "Musical Revues",
  "Comedy Acts",
  "Theme Parties",
  "Celebrity Speakers",
  "DJs",
  "Karaoke",
  "Casinos and Other Games/Activities",
  "Dancers",
];

const clientsList = [
  "Calvin Klein Cosmetics",
  "CBS News",
  "Hertz Corporation",
  "JP Morgan Chase",
  "NYU Stern School of Business",
  "Pfizer Pharmaceuticals",
  "The Real Estate Board of NY",
];
