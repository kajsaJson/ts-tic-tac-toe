import { SQUARE_STATES } from 'src/state/SQUARE_STATES';

export const resetSquareStates = (): void => {
  const { length } = SQUARE_STATES;

  for (let i = 0; i < length; i++) {
    SQUARE_STATES[i] = '';
  }
};
