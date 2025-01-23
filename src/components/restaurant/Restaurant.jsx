import { Menu } from '../menu/Menu';
import { Reviews } from '../reviews/Reviews';

export const Restaurant = ({ name, menu, reviews }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>Menu</h3>
      {menu.length ? (
        <Menu menu={menu} />
      ) : (
        <p>Sorry, we haven&apos;t food &#128546;</p>
      )}
      <h3>Reviews</h3>
      {reviews.length ? (
        <Reviews reviews={reviews} />
      ) : (
        <p>Sorry, we haven&apos;t reviews &#128546;</p>
      )}
    </div>
  );
};
