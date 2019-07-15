import React, {useState} from 'react';
import styled from 'styled-components';
import Key from './Key';

const StyledKeys = styled.div`
  display: flex;
`
const Keys = ({
  items,
  setPressedKey,
}) => {

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
            />
          )
        }
      </StyledKeys>
      
    </>
  )
}

export default Keys;