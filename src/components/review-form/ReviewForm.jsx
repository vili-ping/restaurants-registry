import { useReducer } from 'react';
import { CounterButton } from '../counter-button/CounterButton';
import {
  formReducer,
  DISPATCH_EVENTS,
  INITIAL_FORM_REVIEW,
} from './hooks/useReviewForm';
import {
  INITIAL_REVIEW_SCORE,
  MAX_REVIEW_SCORE,
  MIN_REVIEW_SCORE,
} from './constants/counter';
import { useCount } from '../../hooks/useCount';

export const ReviewForm = () => {
  const [formState, dispatch] = useReducer(formReducer, INITIAL_FORM_REVIEW);
  const {
    count: scoreValue,
    increment: incrementScore,
    decrement: decrementScore,
  } = useCount(INITIAL_REVIEW_SCORE, MAX_REVIEW_SCORE, MIN_REVIEW_SCORE);

  const setName = (inputValue) =>
    dispatch({ type: DISPATCH_EVENTS.SET_NAME, payload: inputValue });
  const setReview = (inputValue) =>
    dispatch({ type: DISPATCH_EVENTS.SET_REVIEW, payload: inputValue });
  const clearForm = () => dispatch({ type: DISPATCH_EVENTS.CLEAR_FORM });

  const { name, review } = formState;

  return (
    <form>
      <div>
        <label>
          Your name:
          <input
            type="text"
            value={name}
            placeholder="Your name"
            onChange={(event) => setName(event.target.value)}
          ></input>
        </label>
      </div>

      <div>
        <label>
          Your review text:
          <textarea
            placeholder="Your review"
            value={review}
            onChange={(event) => setReview(event.target.value)}
          ></textarea>
        </label>
      </div>

      <span>Your score:</span>
      <CounterButton
        value={scoreValue}
        onDecrement={decrementScore}
        onIncrement={incrementScore}
      />

      <div>
        <button
          type="button"
          onClick={clearForm}
        >
          Clear form
        </button>
      </div>
    </form>
  );
};
