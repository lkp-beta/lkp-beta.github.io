import bandsImg from '/images/bands-orchestras-pg-collage.jpg';
export default function Bands() {
  return (
    <main>
      <h1>Bands & Orchestras</h1>
      <section style={{ display: 'flex' }}>
        <img src={bandsImg} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          Click below to hear music samples:
          <a href="top-40s">Contemporary/Disco/R&B</a>
          <a href="classical">Classical</a>
          <a href="jazz">Jazz</a>
          <a href="world">Latin & Ethnic</a>
          <a href="swing">Swing/Pop</a>
        </div>
      </section>
      <article>
        <p>
          Live music adds personal warmth to any event, and Larry King Productions provides
          refreshing and innovative bands and orchestras for any occasion at nearly any budget
          level.
        </p>
        <p>
          Look to us for any type of band or orchestra. The <span>LARRY KING ORCHESTRA</span> offers
          the perfect blend of the quintessential New York Jazz/Swing sound with a wide range of
          hot, contemporary dance music and classic rock, ideally suited for weddings and dinner
          dances.
        </p>
        <p>
          Our <span>DOWNTOWN</span> and <span>SWINGOUTNY</span> bands also perform a variety of
          popular contemporary and classic dance music.
        </p>
        <p>
          You may want to consider our <span>KINGS OF LATIN</span> band featuring traditional and
          contemporary salsa, merengue, and other styles of Latin music. Or, choose from many other{' '}
          <a href="/specialty-entertainment">specialty bands and orchestras</a>, including Klezmer
          bands, R&B groups and disco ensembles.
        </p>
      </article>
    </main>
  );
}
