import { useRef } from 'react';
import topBanner from '/images/contemporary-collage.jpg';
import discoMedley1 from '/music/top/Disco_Medley_1.mp3';
import { useState } from 'react';

import { Transition } from 'react-transition-group';
/* eslint-disable jsx-a11y/media-has-caption */

const useTrackSelection = (ref, setTrack) => {
  const TrackSelection = ({ src, title }) => (
    <button
      style={{ textAlign: 'left' }}
      onClick={() => {
        ref.src = src;
        ref.current.load();
        ref.current.play();
        setTrack(title);
      }}
    >
      {title}
    </button>
  );

  return TrackSelection;
};

export default function Top() {
  const ref = useRef(null);
  const [track, setTrack] = useState();

  // const { MusicBox, TrackSelection } = useTrackButton(playerRef);

  // const TrackSelection = ({ src, title }) => (
  //   <button
  //     style={{ textAlign: 'left' }}
  //     onClick={() => {
  //       ref.src = src;
  //       ref.current.load();
  //       ref.current.play();
  //       setTrack(title);
  //     }}
  //   >
  //     {title}
  //   </button>
  // );

  const TrackSelection = useTrackSelection(ref, setTrack);

  return (
    <main>
      <img alt="" src={topBanner} />
      <a href="bands-orchestras">| Bands & Orchestras</a>
      <h1>Contemporary | Disco | R&B</h1>
      <span>Click below to hear music samples:</span>
      <Transition in={!!track} timeout={450}>
        {state => (
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: `opacity ${450}ms ease-in-out`,
              opacity: state === 'entered' || state === 'entering' ? 1 : 0,
            }}
          >
            <h3>{track}</h3>
            <hr className="linearHr" />
            <audio
              controls
              controlsList="nodownload"
              ref={ref}
              style={{
                width: '85%',
                margin: '24px 0',
                alignSelf: 'center',
              }}
            >
              <source src={ref.src} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <hr className="linearHr" style={{ marginBottom: '20px' }} />
          </div>
        )}
      </Transition>
      <TrackSelection title="Disco Medley 1" src={discoMedley1} />
      {/* <TrackSelection title="Disco Medley 2" src={discoMedley2} /> */}
      {/* <TrackSelection title="Respect" /> */}
      {/* <TrackSelection title="Barry White Medley" /> */}
      {/* <TrackSelection title="Don't Know Why" /> */}
      {/* <TrackSelection title="Sexual Healing" /> */}
    </main>
  );
}
