import { useState } from 'react';
import { Transition } from 'react-transition-group';
/* eslint-disable jsx-a11y/media-has-caption */

// export function AudioPlayer({ ref }) {
//   return (

//   );
// }

export const useTrackButton = ref => {
  const [track, setTrack] = useState();

  function MusicBox() {
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
    </Transition>;
  }

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

  return { MusicBox, TrackSelection };
};
