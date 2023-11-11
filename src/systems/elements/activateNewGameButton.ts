import { NEW_GAME_BUTTON } from 'src/constants/flyweights/elements/NEW_GAME_BUTTON';

export const activateNewGameButton = (): void => {
  NEW_GAME_BUTTON.disabled = false;

  NEW_GAME_BUTTON.classList.toggle('hidden');
};
