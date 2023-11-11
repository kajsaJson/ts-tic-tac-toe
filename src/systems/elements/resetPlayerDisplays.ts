import { PLAYER_DISPLAYS } from 'src/constants/flyweights/elements/PLAYER_DISPLAYS';
import { PLAYERS } from 'src/constants/flyweights/game/PLAYERS';

export const resetPlayerDisplays = (): void => {
  for (const playerDisplay of PLAYER_DISPLAYS) {
    for (const player of PLAYERS) {
      playerDisplay.classList.remove(player, `${player}-hover`);
    }
  }
};
