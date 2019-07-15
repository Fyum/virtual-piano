import React, { useState } from 'react';
import styled from 'styled-components';

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
const Key = ({
  id,
  name,
  type,
  number,
  octave,
  setPressedKey,
  playSound,
}) => {
  const [active, setActive] = useState(false);

  const handleKeyDown = () => {
    setActive(true); 
    playSound(octave, number);
    setPressedKey(name);
  }

  const handleKeyUp = () => {
    setActive(false);
  }

  return (
    <>
      <StyledKey
        // onMouseDown={handleKeyDown} // TODO find out why it is bugged
        onTouchStart={handleKeyDown}
        // onMouseUp={handleKeyUp}
        onTouchEnd={handleKeyUp}
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
      </StyledKey>
    </>
  )
}

export default Key;