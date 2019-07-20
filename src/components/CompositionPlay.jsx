import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MIDISounds from 'midi-sounds-react';
import Keys from './Keys';
import keysModel from '../model/keys';

import composition from '../model/composition';

const StyledCompositionPlay = styled.div`
  position: relative;
  margin: 0 0 10% 0;
  padding: 0 10%;
`

const StyledPressedKeys = styled.div`
  display: block;
  text-align: center;
  margin-top: 10%;
  padding: 0 400px;
  font-size: 2em;
  width: 1500px;
`

const StyledPressedKey = styled.div`
  display: inline-block;
  margin: 0 20px;
`

const StyledPlayButton = styled.button`
  width: 150px;
  height: 150px;
  background-color: black;
  color: white;
  font-size: 3em;
  border-radius: 10px;
  margin: 50px 50%; 
`

const StyledAudio = styled.div`
  visibility: hidden
  width: 0
  height: 0
`

const CompositionPlay = ({

}) => {
  const [keys, setKeys] = useState(keysModel);
  const [pressedKey, setPressedKey] = useState(null);
  const [pressedKeys, setPressedKeys] = useState([]);

  const [playedKey, setPlayedKey] = useState(null);

  useEffect(() => {
    if(pressedKey){
      setPressedKeys(pressedKeys.concat(pressedKey));
    }
  }, [pressedKey])

  const playSound = (octave, number) => {
    MIDISounds.midiSounds.playChordNow(0, [octave * 12 + number], 5);
  }

  const playComposition = () => {

    console.log('start composition');
    let index = 0;
    let timeout = setTimeout(function rec (){
      if(index >= composition.length){
        console.log('Timeout cleared');
        clearTimeout(timeout);
        return;
      }
      const x = composition[index++]
      setPlayedKey({ key: x.midi, isPlayed: true });
      console.log('Playing', x);
      
      const delay = 1000 * x.time;
      setTimeout(() => setPlayedKey({ key: x.midi, isPlayed: false }), delay);
      setTimeout(rec, delay)
    }, 0)
  }

  return (
    <>
      <StyledPlayButton onClick={playComposition}>
        Play
      </StyledPlayButton>
      <StyledCompositionPlay>
        <Keys
          items={keys}
          setPressedKey={setPressedKey}
          playSound={playSound}
          playedKey={playedKey}
        />
      </StyledCompositionPlay>
      <StyledPressedKeys>
        { pressedKeys && pressedKeys.map(x => <StyledPressedKey>{x}</StyledPressedKey>) }
      </StyledPressedKeys>

      <StyledAudio>
        <MIDISounds style={{ visibility: 'hidden' }} ref={(ref) => (MIDISounds.midiSounds = ref)} appElementName="root" instruments={[3]} />
      </StyledAudio>
    </>
  )
}

export default CompositionPlay;