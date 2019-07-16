import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

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

const height = keyframes`
  from {
    top: 0px;
  }
  to {
    top: -500px ;
  }
`

const heightAnimation = css`
  ${height} 1.5s ease-out;
`

const StyledLine = styled.div`
  width: 50px;
  border-radius: 100%;
  position: absolute;
  top: 0px;
  background-color: #8cf1f5;
  height: 50px;
  animation: ${heightAnimation};
  animation-fill-mode: forwards;
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

  
  const [lines, setLines] = useState([]);

  const handleKeyDown = () => {
    setActive(true); 
    console.log({id}, {octave}, {name}, {number})
    playSound(octave, number);
    setPressedKey(`${name}-${octave}`);

    setLines(lines.concat(1));
  }

  const handleKeyUp = () => {
    setActive(false);
    if(lines.length > 5) { // Optimization so that it doesn't eat too much memory
      setLines([]);
    }
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
        lines && 
          lines.map(x => (
            <StyledLine
              active={active}
            >
            </StyledLine>
          ))
        }
        {
          type === 'NATURAL'
            ? <StyledNaturalKey active={active}>
              {name}
              <p>{octave * 12 + number}</p>
            </StyledNaturalKey>
            : <StyledEnharmonicKey active={active}>
              {name}
              <p>{octave * 12 + number}</p>
            </StyledEnharmonicKey>
        }
      </StyledKey>
    </>
  )
}

export default Key;