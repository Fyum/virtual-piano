import React from 'react';
import styled from 'styled-components';


const StyledMenu = styled.div`
  width: 100%;
  background-color: black;
  color: white;
`

const StyledMenuItem = styled.div`
  display: inline-block;
  margin: 10px;
  > span {
    border: 1px solid white
    margin: 10px 5px
    padding: 5px 10px
  }

  > span:hover {
    cursor: pointer
  }
`

const Menu = ({
  octaves,
  setOctaves,
}) => {

  const incrementOctave = () => setOctaves(octaves + 1)
  const decrementOctave = () => setOctaves(octaves - 1)


  return (
    <StyledMenu>
      <StyledMenuItem>
        Number of octave
        <span onClick={decrementOctave}>-</span>
        <span>{octaves}</span>
        <span onClick={incrementOctave}>+</span>
      </StyledMenuItem>
      <StyledMenuItem>Other stuff</StyledMenuItem>
    </StyledMenu>
  )

};

export default Menu;