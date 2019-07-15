import KEY_TYPES from './enum/key_types';

const initialKeys = [
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

const octave1 = initialKeys.map(x => ({ ...x, octave: 3 }));
const octave2 = initialKeys.map(x => ({ ...x, octave: 4 }));
const octave3 = initialKeys.map(x => ({ ...x, octave: 5 }));
const octave4 = initialKeys.map(x => ({ ...x, octave: 6 }));
const keys = [...octave1, ...octave2, ...octave3, ...octave4];

export default keys;