import { WINNING_COMBOS } from 'src/constants/flyweights/game/WINNING_COMBOS';
import { CURRENT_PLAYER } from 'src/state/CURRENT_PLAYER';
import { SQUARE_STATES } from 'src/state/SQUARE_STATES';

export const isWin = (): string | boolean => {
  outerLoop: for (const winningCombo of WINNING_COMBOS) {
    for (const index of winningCombo) {
      const squareState = SQUARE_STATES[index];

      if (squareState !== CURRENT_PLAYER) continue outerLoop;
    }

    return CURRENT_PLAYER;
  }

  return false;
};
