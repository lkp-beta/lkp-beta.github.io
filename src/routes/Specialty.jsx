import specialCollage from "/images/specialty-entertain-collage.jpg";

export default function Specialty() {
  return (
    <main className="specialty">
      <h1>Specialty Entertainment</h1>
      <img alt="" src={specialCollage} />
      <p>
        As a full service music and entertainment agency, we offer a full roster of specialty bands
        and a wide variety of entertainment options for social and corporate events of all kinds.
        Our popular <span className="name">KINGS OF LATIN</span> band performs authentic Salsa,
        Meringue and an incredible variety of dynamic Latin dance music with vocals in Spanish
        and/or English. Our <span className="name">KINGS OF KLEZMER</span> band is one of the
        hottest and most sought-after bands for classic and vibrant Eastern European Klezmer sounds
        and our <span className="name">KINGS OF DIXIELAND</span> and{" "}
        <span className="name">CARIBBEAN KINGS</span> band regularly appear at a variety of indoor
        and outdoor special events. We also offer groups that specialize in Greek, Polish, French,
        Italian, Cuban, Brazilian, Irish, Jewish and a variety of Middle Eastern music plus Cajun,
        Zydeco, Country, Reggae, Blues, Hawaiian and much, much more.
      </p>
      <p>
        We also provide a wide range of other entertainment that is ideally suited for all kinds of
        private social and corporate events. Consult the list to the right to get an overview of
        some of our more popular offerings. Please
        <a href="mailto:LKingMusic@aol.com">contact us</a> for more ideas, information and
        additional possibilities for your event.
      </p>
      <div className="squiggle" />
      <div className="squiggle" />
      <h4 className="rose">Services Include</h4>
      <ul className="servicesInclude">
        <li>Magicians and Magic Acts / Shows</li>
        <li>Mentalists / Illusionists</li>
        <li>Caricature Artists</li>
        <li>Children&#39;s Entertainment</li>
        <li>Karaoke</li>
        <li>Interactive Games and Crafts</li>
        <li>Theme Parties</li>
        <li>Digital Photo Booths / Photo Favors</li>
        <li>Party and Dance Floor Giveaways</li>
        <li>Video and Hi-Tech Games</li>
        <li>Lightshows</li>
        <li>Video Screens</li>
        <li>Casinos, Carnivals and Video Game Arcades</li>
        <li>Costumed Characters / Greeters / Hosts</li>
        <li>Holiday Characters / Holiday Themed Entertainment</li>
        <li>Acapella Vocal Groups</li>
        <li>Opera Performers and Shows</li>
        <li>Choirs and Gospel Performers</li>
        <li>Nostalgia and Big Name Bands and Acts</li>
        <li>Celebrity Look-a-Likes and Impersonators</li>
        <li>Celebrity Speakers and Motivators</li>
        <li>Comedians & Comedy Acts / Revues</li>
        <li>Customized Comedy Material / Roasts</li>
        <li>Variety / Cabaret / Broadway Acts / Revues</li>
        <li>Ballroom Dancers</li>
        <li>Belly Dancers / Flamenco Dancers</li>
        <li>Barber Shop Quartets</li>
        <li>Toastmasters and Singing Waiters</li>
        <li>Balloon Sculpturists</li>
        <li>Marching Bands / Brass Bands</li>
        <li>Novelty Acts</li>
        <li>Scavenger Hunts / Team Building Activities</li>
      </ul>
    </main>
  );
}
