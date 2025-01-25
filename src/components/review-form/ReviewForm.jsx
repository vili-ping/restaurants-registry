import { CounterButton } from '../counter-button/CounterButton';

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
        Your score: <CounterButton />
      </label>

      <div>
        <button type="button">Clear form</button>
      </div>
    </form>
  );
};
