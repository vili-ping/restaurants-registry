import { useReducer } from 'react';
import {
  INITIAL_REVIEW_SCORE,
  MAX_REVIEW_SCORE,
  MIN_REVIEW_SCORE,
} from '../constants/counter';
import { useCount } from '../../../hooks/useCount';

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
  const { increment, decrement, setCount } = useCount(
    INITIAL_REVIEW_SCORE,
    MAX_REVIEW_SCORE,
    MIN_REVIEW_SCORE
  );

  const setName = (inputValue) =>
    dispatch({ type: DISPATCH_ACTIONS.SET_NAME, payload: inputValue });

  const setReview = (inputValue) =>
    dispatch({ type: DISPATCH_ACTIONS.SET_REVIEW, payload: inputValue });

  const increaseScore = () => {
    const score = increment();
    dispatch({
      type: DISPATCH_ACTIONS.INCREASE_SCORE,
      payload: score,
    });
  };

  const decreaseScore = () => {
    const score = decrement();
    dispatch({
      type: DISPATCH_ACTIONS.DECREASE_SCORE,
      payload: score,
    });
  };

  const clearForm = () => {
    const newCount = setCount(INITIAL_REVIEW_SCORE);
    dispatch({
      type: DISPATCH_ACTIONS.CLEAR_FORM,
      payload: newCount,
    });
  };

  const { name, review, score } = formState;

  return {
    state: { name, review, score },
    actions: { setName, setReview, increaseScore, decreaseScore, clearForm },
  };
};
