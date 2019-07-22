import React from 'react';
import styled from 'styled-components';


const StyledPressedKeys = styled.div`
  text-align: center;
  font-size: 1.2em;
`

const StyledPressedKey = styled.div`
  display: inline-block;
  margin: 0 20px;
`

const PressedKeys = ({
  items,
}) => {
  return (
    <StyledPressedKeys>
      { items && items.map(x => <StyledPressedKey>{x}</StyledPressedKey>) }
    </StyledPressedKeys>
  )
}


export default PressedKeys;