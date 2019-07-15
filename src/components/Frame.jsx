import React, { useReducer } from 'react';
import styled from 'styled-components';
import Keys from './Keys';
import keysReducer from '../reducers/keysReducer';
import keysModel from '../model/keys';

const KeysDispatch = React.createContext(null);

const StyledFrame = styled.div`
  position: absolute;
  margin: 20% 0;
  padding: 0 10%;
`

const Frame = ({

}) => {
  const [keys, dispatch] = useReducer(keysReducer, keysModel);

  return (
    <KeysDispatch.Provider value={dispatch}>
      <StyledFrame>
        <Keys
          items={keys}
        />
      </StyledFrame>
    </KeysDispatch.Provider>
  )
}

export default Frame;