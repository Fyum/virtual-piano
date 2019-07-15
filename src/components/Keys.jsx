import React, {useState} from 'react';
import styled from 'styled-components';
import Key from './Key';

const StyledKeys = styled.div`
  display: flex;
`
const Keys = ({
  items,
}) => {

  return (
    <>
      <StyledKeys>
        {
          items.map(
            x => <Key 
              name={x.name}
              type={x.type}
              number={x.number}
              octave={x.octave}
            />
          )
        }
      </StyledKeys>
      
    </>
  )
}

export default Keys;