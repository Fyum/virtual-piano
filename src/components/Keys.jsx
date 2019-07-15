import React, { useState } from 'react';
import styled from 'styled-components';
import Key from './Key';
import MIDISounds from 'midi-sounds-react';

const StyledKeys = styled.div`
  display: flex;
`

const StyledAudio = styled.div`
  visibility: hidden
  width: 0
  height: 0
`

const Keys = ({
  items,
  setPressedKey,
}) => {

  const playSound = (octave, number) => {
    MIDISounds.midiSounds.playChordNow(0, [octave * 12 + number], 5);
  }

  const playComposition = () => {
    
    setInterval(() => {

      MIDISounds.midiSounds.playChordNow(0, [3 * 12 + 10], 5);
    }, 2000);
  }

  return (
    <>
      <StyledKeys>
        {
          items.map(
            x => <Key
              id={x.id}
              name={x.name}
              type={x.type}
              number={x.number}
              octave={x.octave}
              setPressedKey={setPressedKey}
              playSound={playSound}
            />
          )
        }
      </StyledKeys>

      <StyledAudio>
        <MIDISounds style={{ visibility: 'hidden' }} ref={(ref) => (MIDISounds.midiSounds = ref)} appElementName="root" instruments={[3]} />
      </StyledAudio>

    </>
  )
}

export default Keys;