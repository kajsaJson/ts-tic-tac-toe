import { COL_1 } from 'src/constants/flyweights/elements/COL_1';
import { COL_2 } from 'src/constants/flyweights/elements/COL_2';
import { COL_3 } from 'src/constants/flyweights/elements/COL_3';
import { FOOTER } from 'src/constants/flyweights/elements/FOOTER';
import { GAME_BOARD } from 'src/constants/flyweights/elements/GAME_BOARD';
import { HEADER } from 'src/constants/flyweights/elements/HEADER';
import { INFO_DISPLAY } from 'src/constants/flyweights/elements/INFO_DISPLAY';
import { MAIN } from 'src/constants/flyweights/elements/MAIN';
import { NEW_GAME_BUTTON } from 'src/constants/flyweights/elements/NEW_GAME_BUTTON';
import { SCORE_BOARD } from 'src/constants/flyweights/elements/SCORE_BOARD';

export const appendElements = (): void => {
  document.body.appendChild(HEADER);
  document.body.appendChild(MAIN);
  document.body.appendChild(FOOTER);

  HEADER.appendChild(SCORE_BOARD);

  MAIN.appendChild(GAME_BOARD);
  GAME_BOARD.appendChild(COL_1);
  GAME_BOARD.appendChild(COL_2);
  GAME_BOARD.appendChild(COL_3);

  FOOTER.appendChild(INFO_DISPLAY);

  FOOTER.appendChild(NEW_GAME_BUTTON);
};
