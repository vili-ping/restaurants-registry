import { INITIAL_REVIEW_SCORE } from '../constants/counter';

export const DISPATCH_EVENTS = {
  SET_NAME: 'SET_NAME',
  SET_REVIEW: 'SET_REVIEW',
  SET_SCORE: 'SET_SCORE',
  CLEAR_FORM: 'CLEAR_FORM',
};

export const INITIAL_FORM_REVIEW = {
  name: '',
  review: '',
  score: INITIAL_REVIEW_SCORE,
};

export const formReducer = (state, { type, payload }) => {
  switch (type) {
    case DISPATCH_EVENTS.SET_NAME:
      return {
        ...state,
        name: payload,
      };
    case DISPATCH_EVENTS.SET_REVIEW:
      return {
        ...state,
        review: payload,
      };
    case DISPATCH_EVENTS.SET_SCORE:
      return {
        ...state,
        score: payload,
      };
    case DISPATCH_EVENTS.CLEAR_FORM:
      return INITIAL_FORM_REVIEW;
    default:
      return state;
  }
};
