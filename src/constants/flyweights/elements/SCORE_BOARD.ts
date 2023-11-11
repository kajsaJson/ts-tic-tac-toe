import { CIRCLE_SCORE } from 'src/constants/flyweights/elements/CIRCLE_SCORE';
import { CROSS_SCORE } from 'src/constants/flyweights/elements/CROSS_SCORE';

export const SCORE_BOARD: HTMLDivElement = document.createElement('div');

SCORE_BOARD.classList.add('score-board');

SCORE_BOARD.appendChild(CIRCLE_SCORE);
SCORE_BOARD.appendChild(CROSS_SCORE);
