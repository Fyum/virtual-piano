import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

const StyledKey = styled.div`
  display: inline-block
  text-align: center
`
const StyledNaturalKey = styled.div`
    border: 1px solid black
    width: 35px
    height: 30vh
    border-radius: 5px
    margin: 0 0 20px 0
    background-color: ${props => props.active ? '#8cf1f5' : 'white'}
  `

const StyledEnharmonicKey = styled.div`
  border: 1px solid black
  width: 25px
  height: 18vh
  border-radius: 5px
  display: inline-block
  background-color: ${props => props.active ? '#5ba8ab' : 'black'}
  color: white
  position: relative;
  top: 0;
  left: 14px
  margin-left: -27px
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
  width:  25px;
  border-radius: 5px;
  position: absolute;
  top: 0px;
  background-color: #8cf1f5;
  height: 50px;
  animation: ${heightAnimation};
  animation-fill-mode: forwards;
`

const StyledKeyText = styled.span`
  font-size: 1vw;
  display: block;
  visibility: hidden; // TODO hide it for now
`

const Key = ({
  id,
  name,
  type,
  number,
  octave,
  setPressedKey,
  playSound,
  isPlayed
}) => {
  const [lines, setLines] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    isPlayed
      ? handleKeyDown()
      : handleKeyUp()
    console.log('played key effect', isPlayed);
  }, [isPlayed]);

  const handleKeyDown = () => {
    console.log({ id }, { octave }, { name }, { number })
    setActive(true);
    playSound(octave, number);
    setPressedKey(`${name}-${octave}`);
    setLines(lines.concat(1));
  }

  const handleKeyUp = () => {
    setActive(false);
    if (lines.length > 5) { // TODO Optimization so that it doesn't eat too much memory, but it's quite buggy
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
              <StyledKeyText>{name}</StyledKeyText>
              <StyledKeyText>{octave * 12 + number}</StyledKeyText>
            </StyledNaturalKey>
            : <StyledEnharmonicKey active={active}>
              <StyledKeyText>{name}</StyledKeyText>
              <StyledKeyText>{octave * 12 + number}</StyledKeyText>
            </StyledEnharmonicKey>
        }
      </StyledKey>
    </>
  )
}

export default Key;