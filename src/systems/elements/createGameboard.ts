import { COL_1 } from 'src/constants/flyweights/elements/COL_1';
import { COL_2 } from 'src/constants/flyweights/elements/COL_2';
import { COL_3 } from 'src/constants/flyweights/elements/COL_3';
import { PLAYER_DISPLAYS } from 'src/constants/flyweights/elements/PLAYER_DISPLAYS';
import { PASSIVE } from 'src/constants/flyweights/event-listener-options/PASSIVE';
import { CURRENT_PLAYER } from 'src/state/CURRENT_PLAYER';
import { IS_GAME_OVER } from 'src/state/IS_GAME_OVER';
import { SQUARE_STATES } from 'src/state/SQUARE_STATES';
import { checkForWinOrDraw } from 'src/systems/game/checkForWinOrDraw';

export const createGameboard = (): void => {
  for (let i = 0; i < 9; i++) {
    const square = document.createElement('div');

    square.classList.add('square');

    if (i < 3) {
      COL_1.appendChild(square);
    } else if (i < 6) {
      COL_2.appendChild(square);
    } else {
      COL_3.appendChild(square);
    }

    const playerDisplay = document.createElement('div');

    PLAYER_DISPLAYS.push(playerDisplay);

    playerDisplay.classList.add('player-display');

    square.appendChild(playerDisplay);

    ///////////////////////////////////////////////////////////////////////////////
    // Mouse Enter
    ///////////////////////////////////////////////////////////////////////////////
    const handleMouseEnter = (): void => {
      if (IS_GAME_OVER) return;

      const squareState = SQUARE_STATES[i];

      if (squareState) return;

      const playerDisplay = PLAYER_DISPLAYS[i];

      playerDisplay.classList.add(`${CURRENT_PLAYER}-hover`);
    };

    square.addEventListener(
      //
      'mouseenter',
      handleMouseEnter,
      PASSIVE,
    );

    ///////////////////////////////////////////////////////////////////////////////
    // Mouse Leave
    ///////////////////////////////////////////////////////////////////////////////
    const handleMouseLeave = (): void => {
      if (IS_GAME_OVER) return;

      const squareState = SQUARE_STATES[i];

      if (squareState) return;

      const playerDisplay = PLAYER_DISPLAYS[i];

      playerDisplay.classList.remove('circle-hover');
      playerDisplay.classList.remove('cross-hover');
    };

    square.addEventListener(
      //
      'mouseleave',
      handleMouseLeave,
      PASSIVE,
    );

    ///////////////////////////////////////////////////////////////////////////////
    // Handle Click
    ///////////////////////////////////////////////////////////////////////////////
    const handleClick = (): void => {
      if (IS_GAME_OVER) return;

      const squareState = SQUARE_STATES[i];

      if (squareState) return;

      const playerDisplay = PLAYER_DISPLAYS[i];

      playerDisplay.classList.add(CURRENT_PLAYER);

      SQUARE_STATES[i] = CURRENT_PLAYER;

      checkForWinOrDraw();
    };

    square.addEventListener(
      //
      'click',
      handleClick,
      PASSIVE,
    );
  }
};
