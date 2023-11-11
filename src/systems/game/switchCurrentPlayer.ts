import { INFO_DISPLAY } from 'src/constants/flyweights/elements/INFO_DISPLAY';
import { CURRENT_PLAYER, setCurrentPlayer } from 'src/state/CURRENT_PLAYER';
import { getOtherPlayer } from 'src/systems/game/getOtherPlayer';
import { toTitlecase } from 'src/systems/utils/toTitlecase';

export const switchCurrentPlayer = (): void => {
  const otherPlayer = getOtherPlayer();

  setCurrentPlayer(otherPlayer);

  INFO_DISPLAY.textContent = `It is now ${toTitlecase(CURRENT_PLAYER)}'s turn.`;
};
