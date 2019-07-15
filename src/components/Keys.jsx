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
    const composition = [
      {
        "midi": 57,
        "time": 5
      },
      {
        "midi": 57,
        "time": 0.5
      },
      {
        "midi": 45,
        "type": 'BASS',
        "time": 0
      },
      {
        "midi": 61,
        "time": 1
      },
      {
        "midi": 62,
        "time": 0.5
      },
      {
        "midi": 45,
        "type": 'BASS',
        "time": 0
      },
      {
        "midi": 64,
        "time": 1
      },
      {
        "midi": 69,
        "time": 0.5
      },
      {
        "midi": 45,
        "type": 'BASS',
        "time": 0
      },
      {
        "midi": 67,
        "time": 1
      },
      {
        "midi": 65,
        "time": 0.5
      },
      {
        "midi": 45,
        "type": 'BASS',
        "time": 0
      },
      {
        "midi": 64,
        "time": 1.5
      },
      {
        "midi": 60,
        "time": 1
      },
      {
        "midi": 64,
        "time": 0.5
      },
      {
        "midi": 59,
        "time": 1
      },
      {
        "midi": 62,
        "time": 0.5
      },
      {
        "midi": 57,
        "time": 1
      }
    ];

    let index = 0;
    let timeout = setTimeout(function rec (){
      if(index >= composition.length){
        console.log('Timeout cleared');
        clearTimeout(timeout);
        return;
      }
      const x = composition[index++]
      console.log('Playing', x);
      MIDISounds.midiSounds.playChordNow(0, [x.midi], 5);
      setTimeout(rec, 1000 * x.time)
    }, 0)
  }

  // setTimeout(() => {
  //   console.log('start composition');
  //   playComposition();
  // }, 10000);

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