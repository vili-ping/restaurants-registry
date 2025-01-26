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

export const ReviewForm = () => {
  const [formState, dispatch] = useReducer(formReducer, INITIAL_FORM_REVIEW);

  const setName = (inputValue) =>
    dispatch({ type: DISPATCH_EVENTS.SET_NAME, payload: inputValue });
  const setReview = (inputValue) =>
    dispatch({ type: DISPATCH_EVENTS.SET_REVIEW, payload: inputValue });
  const setScore = (inputValue) =>
    dispatch({ type: DISPATCH_EVENTS.SET_SCORE, payload: inputValue });
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
        initialNumber={INITIAL_REVIEW_SCORE}
        minNumber={MIN_REVIEW_SCORE}
        maxNumber={MAX_REVIEW_SCORE}
        onChange={(scoreValue) => setScore(scoreValue)}
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
