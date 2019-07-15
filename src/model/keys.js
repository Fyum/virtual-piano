import KEY_TYPES from './enum/key_types';
// TODO change the id system
const initialKeys = [
  {
    name: 'C',
    type: KEY_TYPES.NATURAL,
    id: 0,
    number: 0,
  },
  {
    name: 'C#',
    type: KEY_TYPES.ENHARMONIC,
    id: 1,
    number: 1,
  },
  {
    name: 'D',
    type: KEY_TYPES.NATURAL,
    id: 2,
    number: 2,
  },
  {
    name: 'D#',
    type: KEY_TYPES.ENHARMONIC,
    id: 3,
    number: 3,
  },
  {
    name: 'E',
    type: KEY_TYPES.NATURAL,
    id: 4,
    number: 4,
  },
  {
    name: 'F',
    type: KEY_TYPES.NATURAL,
    id: 5,
    number: 5,
  },
  {
    name: 'F#',
    type: KEY_TYPES.ENHARMONIC,
    id: 6,
    number: 6,
  },
  {
    name: 'G',
    type: KEY_TYPES.NATURAL,
    id: 7,
    number: 7,
  },
  {
    name: 'G#',
    type: KEY_TYPES.ENHARMONIC,
    id: 8,
    number: 8,
  },
  {
    name: 'A',
    type: KEY_TYPES.NATURAL,
    id: 9,
    number: 9,
  },
  {
    name: 'A#',
    type: KEY_TYPES.ENHARMONIC,
    id: 10,
    number: 10,
  },
  {
    name: 'B',
    type: KEY_TYPES.NATURAL,
    id: 11,
    number: 11,
  }
]

// 0 -> 11
const octave1 = initialKeys.map((x, i) => ({ ...x, octave: 3, id: 12 + i })); // 12 -> 23
const octave2 = initialKeys.map((x, i) => ({ ...x, octave: 4, id: 24 + i }));  // 24 -> 35
const octave3 = initialKeys.map((x, i) => ({ ...x, octave: 5, id: 36 + i })); // 36 -> 47
const octave4 = initialKeys.map((x, i) => ({ ...x, octave: 6, id: 48 + i })); // 48 -> 59
const keys = [...octave1, ...octave2, ...octave3, ...octave4];

export default keys;