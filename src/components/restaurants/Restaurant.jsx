import { Food } from './Food';

export const Restaurant = ({ name, menu, reviews }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>Menu</h3>
      <ul>
        {menu.length ? (
          menu.map((food) => (
            <li key={food.id}>
              <Food foodName={food.name} />
            </li>
          ))
        ) : (
          <p>Sorry, we haven&apos;t food &#128546;</p>
        )}
      </ul>
      <h3>Reviews</h3>
      <ul>
        {reviews.length ? (
          reviews.map((review) => (
            <li key={review.id}>
              {review.user}: {review.text}
            </li>
          ))
        ) : (
          <p>Sorry, we haven&apos;t reviews &#128546;</p>
        )}
      </ul>
    </div>
  );
};
