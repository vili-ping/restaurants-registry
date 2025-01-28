import { useReviewForm } from './hooks/useReviewForm';
import { CounterButton } from '../counter-button/CounterButton';

const SCORE_REVIEW_ID_ELEMENT = 'score-review';

export const ReviewForm = () => {
  const { state, actions } = useReviewForm();

  console.log(state);

  return (
    <form>
      <div>
        <label>
          Your name
          <input
            type="text"
            value={state.name}
            placeholder="Your name"
            onChange={(event) => actions.setName(event.target.value)}
          ></input>
        </label>
      </div>

      <div>
        <label>
          Your review text
          <textarea
            placeholder="Your review"
            value={state.review}
            onChange={(event) => actions.setReview(event.target.value)}
          ></textarea>
        </label>
      </div>

      <label htmlFor={SCORE_REVIEW_ID_ELEMENT}>Your score</label>
      <CounterButton
        id={SCORE_REVIEW_ID_ELEMENT}
        value={state.score}
        decrement={actions.decreaseScore}
        increment={actions.increaseScore}
      />

      <div>
        <button
          type="button"
          onClick={actions.clearForm}
        >
          Clear form
        </button>
      </div>
    </form>
  );
};
