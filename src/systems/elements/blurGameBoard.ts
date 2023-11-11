import { MAIN } from 'src/constants/flyweights/elements/MAIN';

export const blurGameBoard = (): void => {
  MAIN.classList.toggle('blur');
};
