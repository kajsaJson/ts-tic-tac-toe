import { INFO_DISPLAY } from 'src/constants/flyweights/elements/INFO_DISPLAY';
import { CURRENT_PLAYER } from 'src/state/CURRENT_PLAYER';
import { setIsGameOver } from 'src/state/IS_GAME_OVER';
import { SCORE } from 'src/state/SCORE';
import { setStartingPlayer } from 'src/state/STARTING_PLAYER';
import { updateScoreDisplay } from 'src/systems/elements/updateScoreDisplay';
import { getOtherPlayer } from 'src/systems/game/getOtherPlayer';
import { isDraw } from 'src/systems/game/isDraw';
import { isWin } from 'src/systems/game/isWin';
import { switchCurrentPlayer } from 'src/systems/game/switchCurrentPlayer';
import { toTitlecase } from 'src/systems/utils/toTitlecase';

export const checkForWinOrDraw = (): void => {
  if (isWin()) {
    INFO_DISPLAY.textContent = `${toTitlecase(`${CURRENT_PLAYER}`)} wins!`;

    SCORE[CURRENT_PLAYER]++;

    updateScoreDisplay();

    const otherPlayer = getOtherPlayer();

    setStartingPlayer(otherPlayer);

    setIsGameOver(true);

    return;
  }

  if (isDraw()) {
    INFO_DISPLAY.textContent = "It's a draw!";

    setIsGameOver(true);

    return;
  }

  switchCurrentPlayer();
};
