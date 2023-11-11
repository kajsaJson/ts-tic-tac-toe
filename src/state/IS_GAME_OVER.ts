import { activateNewGameButton } from 'src/systems/elements/activateNewGameButton';
import { blurGameBoard } from 'src/systems/elements/blurGameBoard';

export let IS_GAME_OVER: boolean = false;

export const setIsGameOver = (to: boolean): void => {
  IS_GAME_OVER = to;

  if (to) {
    activateNewGameButton();
    blurGameBoard();
  }
};
