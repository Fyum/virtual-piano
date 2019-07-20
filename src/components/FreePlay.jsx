import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Keys from './Keys';
import keysModel from '../model/keys';
import MIDISounds from 'midi-sounds-react';

const StyledFreePlay = styled.div`
  position: relative;
  margin: 20% 0 10% 0;
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
const StyledAudio = styled.div`
  visibility: hidden
  width: 0
  height: 0
`

const FreePlay = ({

}) => {
  const [keys, setKeys] = useState(keysModel);
  const [pressedKey, setPressedKey] = useState(null);
  const [pressedKeys, setPressedKeys] = useState([]);

  useEffect(() => {
    if(pressedKey){
      setPressedKeys(pressedKeys.concat(pressedKey));
    }
  }, [pressedKey])

  const playSound = (octave, number) => {
    MIDISounds.midiSounds.playChordNow(0, [octave * 12 + number], 5);
  }

  return (
    <>
      <StyledFreePlay>
        <Keys
          items={keys}
          setPressedKey={setPressedKey}
          playSound={playSound}
        />
      </StyledFreePlay>
      <StyledPressedKeys>
        { pressedKeys && pressedKeys.map(x => <StyledPressedKey>{x}</StyledPressedKey>) }
      </StyledPressedKeys>
    
      <StyledAudio>
        <MIDISounds style={{ visibility: 'hidden' }} ref={(ref) => (MIDISounds.midiSounds = ref)} appElementName="root" instruments={[3]} />
      </StyledAudio>
    </>
  )
}

export default FreePlay;