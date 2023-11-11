import { STARTING_PLAYER } from 'src/state/STARTING_PLAYER';
import { setNewGameInfoDisplay } from 'src/systems/elements/setNewGameInfoDisplay';
import type { Player } from 'src/typings/Player';

export let CURRENT_PLAYER: Player = STARTING_PLAYER;

export const setCurrentPlayer = (to: Player): void => {
  CURRENT_PLAYER = to;

  if (CURRENT_PLAYER === STARTING_PLAYER) {
    setNewGameInfoDisplay();
  }
};
