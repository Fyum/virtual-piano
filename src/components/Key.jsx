import React, { useState } from 'react';
import styled from 'styled-components';
import MIDISounds from 'midi-sounds-react';

const StyledKey = styled.div`
  display: inline-block
  text-align: center
`
const StyledNaturalKey = styled.div`
    border: 1px solid black
    width: 80px
    height: 500px
    border-radius: 5px
    background-color: ${props => props.active ? '#8cf1f5' : 'white'}
  `

const StyledEnharmonicKey = styled.div`
  border: 1px solid black
  width: 40px
  height: 350px
  border-radius: 5px
  display: inline-block
  background-color: ${props => props.active ? '#5ba8ab' : 'black'}
  color: white
  position: absolute
  top: 0
  margin-left: -15px
`

const StyledAudio = styled.div`
  visibility: hidden
  width: 0
  height: 0
`
const Key = ({
  id,
  name,
  type,
  number,
  octave,
  setPressedKey,
}) => {
  const [active, setActive] = useState(false);

  const playTestInstrument = () => {
    MIDISounds.midiSounds.playChordNow(0, [octave*12+number], 5);
  }

  const handleKeyDown = () => {
    setActive(true); 
    playTestInstrument();
    setPressedKey(name);
  }


  return (
    <>

      <StyledKey
        onMouseDown={() => { setActive(true);}}
        onTouchStart={handleKeyDown}
        onMouseUp={() => { setActive(false) }}
        onTouchEnd={() => { setActive(false) }}
      >
        {
          type === 'NATURAL'
            ? <StyledNaturalKey active={active}>
              {name}
            </StyledNaturalKey>
            : <StyledEnharmonicKey active={active}>
              {name}
            </StyledEnharmonicKey>
        }
        <StyledAudio>
          <MIDISounds style={{ visibility: 'hidden' }} ref={(ref) => (MIDISounds.midiSounds = ref)} appElementName="root" instruments={[3]} />
        </StyledAudio>
      </StyledKey>
    </>
  )
}

export default Key;