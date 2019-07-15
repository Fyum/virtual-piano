import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Keys from './Keys';
import keysModel from '../model/keys';

const StyledFrame = styled.div`
  position: absolute;
  margin: 20% 0;
  padding: 0 10%;
`

const Frame = ({

}) => {
  const [keys, setKeys] = useState(keysModel);
  const [pressedKey, setPressedKey] = useState(null);
  const [pressedKeys, setPressedKeys] = useState([]);

  return (
    <>
      Pressed key: {pressedKey}
      <StyledFrame>
        <Keys
          items={keys}
          setPressedKey={setPressedKey}
        />
      </StyledFrame>
    </>
  )
}

export default Frame;