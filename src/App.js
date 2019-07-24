import React, { useState } from 'react';
import FreePlay from './components/FreePlay';
import CompositionPlay from './components/CompositionPlay';
import Menu from './components/Menu';

const DEFAULT_OCTAVES = 4;
const DEFAULT_INITIAL_OCTAVE = 3;

const App = () => {

  const [octaves, setOctaves] = useState(DEFAULT_OCTAVES);
  const [initialOctave, setInitialOctave] = useState(DEFAULT_INITIAL_OCTAVE);
  return (
    <>
    
      <Menu 
        octaves={octaves}
        setOctaves={setOctaves}
        initialOctave={initialOctave}
        setInitialOctave={setInitialOctave}
      />
      <FreePlay 
        octaves={octaves}
        initialOctave={initialOctave}
      />
      {/* <CompositionPlay /> */}
    </>
  )
}

export default App;
