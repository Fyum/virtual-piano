import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Keys from './Keys';
import Container from './Container';
import keysModel from '../model/keys';
import MIDISounds from 'midi-sounds-react';

const StyledFreePlay = styled.div`
`

const StyledPressedKeys = styled.div`
  text-align: center;
  font-size: 1.2em;
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
    if (pressedKey) {
      setPressedKeys(pressedKeys.concat(pressedKey));
    }
  }, [pressedKey])

  const playSound = (octave, number) => {
    MIDISounds.midiSounds.playChordNow(0, [octave * 12 + number], 5);
  }

  return (
    <>
      <Container>
        <StyledFreePlay>
          <Keys
            items={keys}
            setPressedKey={setPressedKey}
            playSound={playSound}
          />
        </StyledFreePlay>
        <StyledAudio>
          <MIDISounds style={{ visibility: 'hidden' }} ref={(ref) => (MIDISounds.midiSounds = ref)} appElementName="root" instruments={[3]} />
        </StyledAudio>
      </Container>

      <Container>
        <StyledPressedKeys>
          {pressedKeys && pressedKeys.map(x => <StyledPressedKey>{x}</StyledPressedKey>)}
        </StyledPressedKeys>
      </Container>
    </>
  )
}

export default FreePlay;