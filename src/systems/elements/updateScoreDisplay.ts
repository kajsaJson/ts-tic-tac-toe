import { CIRCLE_SCORE } from 'src/constants/flyweights/elements/CIRCLE_SCORE';
import { CROSS_SCORE } from 'src/constants/flyweights/elements/CROSS_SCORE';
import { SCORE } from 'src/state/SCORE';

export const updateScoreDisplay = (): void => {
  CIRCLE_SCORE.textContent = `${SCORE.circle}`;
  CROSS_SCORE.textContent = `${SCORE.cross}`;
};
