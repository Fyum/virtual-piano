import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  margin-top: ${props => props.marginTop || '20%' };
  margin-bottom: ${props => props.marginBottom || '20%' };
  padding: 0 10%;
`
const Container = props => {
  return (
    <StyledContainer 
      marginTop={props.marginTop}
      marginBottom={props.marginBottom}
    >
      {props.children}
    </StyledContainer>
  )
}

export default Container;