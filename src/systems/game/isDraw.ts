import { SQUARE_STATES } from 'src/state/SQUARE_STATES';

export const isDraw = (): boolean => {
  for (const squareState of SQUARE_STATES) {
    if (squareState) continue;

    return false;
  }

  return true;
};
