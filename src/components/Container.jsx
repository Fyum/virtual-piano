import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  margin: 20% 0 10% 0;
  padding: 0 10%;
`
const Container = props => {

  return (
    <StyledContainer>
      {props.children}
    </StyledContainer>
  )
}

export default Container;