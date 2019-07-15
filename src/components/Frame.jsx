import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Keys from './Keys';
import keysModel from '../model/keys';

const StyledFrame = styled.div`
  position: relative;
  margin: 10% 0 10% 0;
  padding: 0 10%;
`

const StyledPressedKeys = styled.div`
  display: block;
  text-align: center;
  margin-top: 10%;
  padding: 0 400px;
  font-size: 2em;
  width: 1500px;
`

const StyledPressedKey = styled.div`
  display: inline-block;
  margin: 0 20px;
`

const Frame = ({

}) => {
  const [keys, setKeys] = useState(keysModel);
  const [pressedKey, setPressedKey] = useState(null);
  const [pressedKeys, setPressedKeys] = useState([]);

  useEffect(() => {
    if(pressedKey){
      setPressedKeys(pressedKeys.concat(pressedKey));
    }
  }, [pressedKey])

  return (
    <>
      <StyledFrame>
        <Keys
          items={keys}
          setPressedKey={setPressedKey}
        />
      </StyledFrame>
      <StyledPressedKeys>
        { pressedKeys && pressedKeys.map(x => <StyledPressedKey>{x}</StyledPressedKey>) }
      </StyledPressedKeys>
    </>
  )
}

export default Frame;