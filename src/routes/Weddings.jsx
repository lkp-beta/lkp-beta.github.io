import weddingCollage from '/images/wedding-collage.jpg';
import weddingInstruments from '/images/wedding-instruments.jpg';

export default function Weddings() {
  return (
    <main>
      <h1>Weddings</h1>
      <img alt="" src={weddingCollage} />
      <section>
        <p>
          Larry King Productions is regularly chosen by couples seeking outstanding, memorable music
          for their special day. As the first choice of many leading catering and party
          professionals at New York&#39;s top venues, we have the honor of providing the music for
          the most distinguished weddings in the New York City area, as well as all over the country
          and worldwide.
        </p>
        <p>
          <span>THE LARRY KING ORCHESTRA</span> and our <span>SWINGOUTNY</span> and{' '}
          <span>DOWNTOWN</span> bands are ideally suited for wedding receptions that require a wide
          range of the most popular dance music from classic rock and pop to contemporary, swing and
          big band to R&B, Motown to 70s Disco, Jazz and way beyond. We are experts at guiding you
          to the perfect band for the type of celebration you have in mind.
        </p>
        <p>
          We also offer a wide range of specialty bands and performers that can do everything from
          hot Latin, Salsa and Meringue to Klezmer, Greek, Russian, Israeli, Italian, Irish ... you
          name it, we can produce it and make it happen for you. Our premium classical and jazz
          performers are ready to perform any ceremony and cocktail reception music you will want.
        </p>
        <div style={{ display: 'flex' }}>
          <p>
            We are known for our elegant and professional standards and outstanding personal
            service. As a boutique music agency with a discerning clientele, we have the proven
            experience to properly handle the details and provide the best ideas to make it all come
            together in perfect harmony for a fun and memorable occasion.
          </p>
          <img alt="" src={weddingInstruments} />
        </div>
      </section>
    </main>
  );
}
