import { useState } from 'react';
import { Restaurant } from '../restaurant/Restaurant';

export const Restaurants = ({ restaurants }) => {
  const [currentRestaurant, setCurrentRestaurant] = useState(restaurants[0]);

  const changeRestaurant = (restaurant) => {
    setCurrentRestaurant(restaurant);
  };

  return (
    <>
      {restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => changeRestaurant(restaurant)}
        >
          {restaurant.name}
        </button>
      ))}

      <Restaurant
        key={currentRestaurant.id}
        name={currentRestaurant.name}
        menu={currentRestaurant.menu}
        reviews={currentRestaurant.reviews}
      />
    </>
  );
};
