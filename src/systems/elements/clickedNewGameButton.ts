import { setCurrentPlayer } from 'src/state/CURRENT_PLAYER';
import { setIsGameOver } from 'src/state/IS_GAME_OVER';
import { STARTING_PLAYER } from 'src/state/STARTING_PLAYER';
import { blurGameBoard } from 'src/systems/elements/blurGameBoard';
import { deactivateNewGameButton } from 'src/systems/elements/deactivateNewGameButton';
import { resetPlayerDisplays } from 'src/systems/elements/resetPlayerDisplays';
import { resetSquareStates } from 'src/systems/game/resetSquareStates';
import { pause } from 'src/systems/utils/pause';

export const clickedNewGameButton = async (): Promise<void> => {
  deactivateNewGameButton();

  await pause(500);

  resetSquareStates();

  resetPlayerDisplays();

  setCurrentPlayer(STARTING_PLAYER);

  blurGameBoard();

  setIsGameOver(false);
};
