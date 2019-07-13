import React from 'react';
import styled from 'styled-components';
import Keys from './Keys';

const StyledFrame = styled.div`
  position: absolute;
  margin: 20% 0;
  padding: 0 10%;
`

const Frame = ({
  
}) => {

  return (
    <StyledFrame>
        <Keys />
    </StyledFrame>
  )
}

export default Frame;