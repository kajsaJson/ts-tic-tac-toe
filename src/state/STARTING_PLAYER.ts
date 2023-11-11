import type { Player } from 'src/typings/Player';

export let STARTING_PLAYER: Player = 'circle';

export const setStartingPlayer = (to: Player): void => {
  STARTING_PLAYER = to;
};
