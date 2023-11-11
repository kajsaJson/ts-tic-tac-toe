import { PASSIVE } from 'src/constants/flyweights/event-listener-options/PASSIVE';
import { clickedNewGameButton } from 'src/systems/elements/clickedNewGameButton';

export const NEW_GAME_BUTTON: HTMLButtonElement = document.createElement('button');

NEW_GAME_BUTTON.classList.add('new-game-button');

NEW_GAME_BUTTON.innerHTML = 'New Game';

NEW_GAME_BUTTON.addEventListener(
  //
  'click',
  clickedNewGameButton,
  PASSIVE,
);
