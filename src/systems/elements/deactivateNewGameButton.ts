import { NEW_GAME_BUTTON } from 'src/constants/flyweights/elements/NEW_GAME_BUTTON';

export const deactivateNewGameButton = (): void => {
  NEW_GAME_BUTTON.classList.add('hidden');
  NEW_GAME_BUTTON.disabled = true;
};
