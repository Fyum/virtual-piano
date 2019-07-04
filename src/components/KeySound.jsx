import React from 'react';
import Sound from 'react-sound';

const KeySound = ({
  name,
}) => {



  return (
  <Sound
      url={`http://localhost:3000/audio/note-${name}4.ogg`}
      playStatus={Sound.status.STOP}
      autoLoad={true}
      playFromPosition={0}
      onLoading={(e) => console.log('Loading', e)}
      onPlaying={() => console.log('playing')}
      onFinishedPlaying={() => console.log('finished')}
    />
  )
}

export default KeySound;