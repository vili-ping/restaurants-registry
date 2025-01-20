import { restaurants } from '../constants/mock';
import { Layout } from './layout/Layout';

export const App = () => {
  return (
    <Layout>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <h2>{restaurant.name}</h2>
          <h3>Menu</h3>
          <ul>
            {restaurant.menu.map((food) => (
              <li key={food.id}>{food.name}</li>
            ))}
          </ul>
          <h3>Reviews</h3>
          <ul>
            {restaurant.reviews.map((review) => (
              <li key={review.id}>
                {review.user}: {review.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Layout>
  );
};
