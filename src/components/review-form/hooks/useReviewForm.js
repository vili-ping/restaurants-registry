import { useReducer } from 'react';

const INITIAL_REVIEW_SCORE = 1;
const MAX_REVIEW_SCORE = 5;
const MIN_REVIEW_SCORE = 1;

const DISPATCH_ACTIONS = {
  SET_NAME: 'SET_NAME',
  SET_REVIEW: 'SET_REVIEW',
  INCREASE_SCORE: 'INCREASE_SCORE',
  DECREASE_SCORE: 'DECREASE_SCORE',
  CLEAR_FORM: 'CLEAR_FORM',
};

const INITIAL_FORM_REVIEW = {
  name: '',
  review: '',
  score: INITIAL_REVIEW_SCORE,
};

const formReducer = (state, { type, payload }) => {
  switch (type) {
    case DISPATCH_ACTIONS.SET_NAME:
      return {
        ...state,
        name: payload,
      };
    case DISPATCH_ACTIONS.SET_REVIEW:
      return {
        ...state,
        review: payload,
      };
    case DISPATCH_ACTIONS.INCREASE_SCORE:
      return {
        ...state,
        score: payload,
      };
    case DISPATCH_ACTIONS.DECREASE_SCORE:
      return {
        ...state,
        score: payload,
      };
    case DISPATCH_ACTIONS.CLEAR_FORM:
      return {
        ...INITIAL_FORM_REVIEW,
        score: payload,
      };
    default:
      return state;
  }
};

export const useReviewForm = () => {
  const [formState, dispatch] = useReducer(formReducer, INITIAL_FORM_REVIEW);
  const { name, review, score } = formState;

  const setName = (inputValue) =>
    dispatch({ type: DISPATCH_ACTIONS.SET_NAME, payload: inputValue });

  const setReview = (inputValue) =>
    dispatch({ type: DISPATCH_ACTIONS.SET_REVIEW, payload: inputValue });

  const increaseScore = () =>
    dispatch({
      type: DISPATCH_ACTIONS.INCREASE_SCORE,
      payload: Math.min(score + 1, MAX_REVIEW_SCORE),
    });

  const decreaseScore = () =>
    dispatch({
      type: DISPATCH_ACTIONS.DECREASE_SCORE,
      payload: Math.max(score - 1, MIN_REVIEW_SCORE),
    });

  const clearForm = () =>
    dispatch({
      type: DISPATCH_ACTIONS.CLEAR_FORM,
      payload: INITIAL_REVIEW_SCORE,
    });

  return {
    state: { name, review, score },
    actions: { setName, setReview, increaseScore, decreaseScore, clearForm },
  };
};
