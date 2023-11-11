import { CURRENT_PLAYER } from 'src/state/CURRENT_PLAYER';
import type { Player } from 'src/typings/Player';

export const getOtherPlayer = (): Player => {
  // prettier-ignore
  return CURRENT_PLAYER === "circle"
    ? "cross"
    : "circle";
};
