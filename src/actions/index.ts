import * as constants from '../constants';
import { Coordinate } from 'src/types';

export interface ShowNextCoords {
  type: constants.SHOW_NEXT_COORDS;
}

export interface HandleClick {
  type: constants.HANDLE_CLICK;
  square: Coordinate;
}

export type CoordsIndicatorAction = ShowNextCoords | HandleClick;

export function showNextCoords(): ShowNextCoords {
  return {
    type: constants.SHOW_NEXT_COORDS
  };
}

export function handleClick(coordinate: Coordinate): HandleClick {
  return {
    type: constants.HANDLE_CLICK,
    square: coordinate
  };
}

export type ChessNotationAction = CoordsIndicatorAction;
