import { CounterButton } from '../counter-button/CounterButton';

const INITIAL_REVIEW_SCORE = 1;
const MAX_REVIEW_SCORE = 5;
const MIN_REVIEW_SCORE = 1;

export const ReviewForm = () => {
  return (
    <form>
      <div>
        <label>
          Your name:
          <input
            type="text"
            placeholder="Your name"
          ></input>
        </label>
      </div>

      <div>
        <label>
          Your review text:
          <textarea placeholder="Your review"></textarea>
        </label>
      </div>

      <label>
        Your score:
        <CounterButton
          initialNumber={INITIAL_REVIEW_SCORE}
          minNumber={MIN_REVIEW_SCORE}
          maxNumber={MAX_REVIEW_SCORE}
        />
      </label>

      <div>
        <button type="button">Clear form</button>
      </div>
    </form>
  );
};
