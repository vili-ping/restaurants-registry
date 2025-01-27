import { useReviewForm } from './hooks/useReviewForm';
import { CounterButton } from '../counter-button/CounterButton';

export const ReviewForm = () => {
  const { state, actions } = useReviewForm();

  console.log(state);

  return (
    <form>
      <div>
        <label>
          Your name:
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
          Your review text:
          <textarea
            placeholder="Your review"
            value={state.review}
            onChange={(event) => actions.setReview(event.target.value)}
          ></textarea>
        </label>
      </div>

      <span>Your score:</span>
      <CounterButton
        value={state.score}
        onDecrement={actions.decreaseScore}
        onIncrement={actions.increaseScore}
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
