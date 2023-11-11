import { INFO_DISPLAY } from 'src/constants/flyweights/elements/INFO_DISPLAY';
import { STARTING_PLAYER } from 'src/state/STARTING_PLAYER';
import { toTitlecase } from 'src/systems/utils/toTitlecase';

export const setNewGameInfoDisplay = (): void => {
  INFO_DISPLAY.textContent = `${toTitlecase(STARTING_PLAYER)} goes first.`;
};
