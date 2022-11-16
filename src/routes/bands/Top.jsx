import { useRef } from 'react';
import topBanner from '/images/contemporary-collage.jpg';
import discoMedley1 from '/music/top/Disco_Medley_1.mp3';
import discoMedley2 from '/music/top/Disco_Medley_2.mp3';
import { useState } from 'react';
import { useMusicPlayer } from '../../useMusicPlayer';

export default function Top() {
  const ref = useRef(null);
  const [track, setTrack] = useState();
  const { MusicBox, TrackSelection } = useMusicPlayer(ref, setTrack);

  return (
    <main>
      <img alt="" src={topBanner} />
      <a href="bands-orchestras">| Bands & Orchestras</a>
      <h1>Contemporary | Disco | R&B</h1>
      <span>Click below to hear music samples:</span>
      <MusicBox track={track} />
      <TrackSelection title="Disco Medley 1" src={discoMedley1} />
      <TrackSelection title="Disco Medley 2" src={discoMedley2} />
      {/* <TrackSelection title="Respect" /> */}
      {/* <TrackSelection title="Barry White Medley" /> */}
      {/* <TrackSelection title="Don't Know Why" /> */}
      {/* <TrackSelection title="Sexual Healing" /> */}
    </main>
  );
}
