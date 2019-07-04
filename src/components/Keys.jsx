import React, {useState} from 'react';
import styled from 'styled-components';
import Key from './Key';

const StyledKeys = styled.div`

`
const KEY_TYPES = {
  NATURAL: 'NATURAL',
  ENHARMONIC: 'ENHARMONIC'
}

const Keys = ({

}) => {
  const dummy = [
    {
      name: 'C',
      type: KEY_TYPES.NATURAL,
      number: 0,
    },
    {
      name: 'C#',
      type: KEY_TYPES.ENHARMONIC,
      number: 1,
    },
    {
      name: 'D',
      type: KEY_TYPES.NATURAL,
      number: 2,
    },
    {
      name: 'D#',
      type: KEY_TYPES.ENHARMONIC,
      number: 3,
    },
    {
      name: 'E',
      type: KEY_TYPES.NATURAL,
      number: 4,
    },
    {
      name: 'F',
      type: KEY_TYPES.NATURAL,
      number: 5,
    },
    {
      name: 'F#',
      type: KEY_TYPES.ENHARMONIC,
      number: 6,
    },
    {
      name: 'G',
      type: KEY_TYPES.NATURAL,
      number: 7,
    },
    {
      name: 'G#',
      type: KEY_TYPES.ENHARMONIC,
      number: 8,
    },
    {
      name: 'A',
      type: KEY_TYPES.NATURAL,
      number: 9,
    },
    {
      name: 'A#',
      type: KEY_TYPES.ENHARMONIC,
      number: 10,
    },
    {
      name: 'B',
      type: KEY_TYPES.NATURAL,
      number: 11,
    }
  ]
  
  
  const o1 = dummy.map(x => ({...x, octave: 3}));
  const o2 = dummy.map(x => ({...x, octave: 4}));
  const o3 = dummy.map(x => ({...x, octave: 5}));
  const o4 = dummy.map(x => ({...x, octave: 6}));
  const [items, setItems] = useState([...o1, ...o2, ...o3, ...o4])


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