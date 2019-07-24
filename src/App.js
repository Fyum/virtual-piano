import React, { useState } from 'react';
import FreePlay from './components/FreePlay';
import CompositionPlay from './components/CompositionPlay';
import Menu from './components/Menu';

const App = () => {

  const [octaves, setOctaves] = useState(4);

  return (
    <>
    
      <Menu 
        octaves={octaves}
        setOctaves={setOctaves}
      />
      <FreePlay 
        octaves={octaves}
      />
      {/* <CompositionPlay /> */}
    </>
  )
}

export default App;
