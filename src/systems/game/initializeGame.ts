import { setCurrentPlayer } from 'src/state/CURRENT_PLAYER';
import { STARTING_PLAYER } from 'src/state/STARTING_PLAYER';
import { appendElements } from 'src/systems/elements/appendElements';
import { createGameboard } from 'src/systems/elements/createGameboard';
import { deactivateNewGameButton } from 'src/systems/elements/deactivateNewGameButton';
import { setNewGameInfoDisplay } from 'src/systems/elements/setNewGameInfoDisplay';
import { updateScoreDisplay } from 'src/systems/elements/updateScoreDisplay';

export const initializeGame = (): void => {
  setCurrentPlayer(STARTING_PLAYER);

  deactivateNewGameButton();

  appendElements();

  createGameboard();

  setNewGameInfoDisplay();

  updateScoreDisplay();
};
