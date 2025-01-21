import { useState } from 'react';
import { Restaurant } from './Restaurant';

export const Restaurants = ({ restaurants }) => {
  const [currentRestaurant, setCurrentRestaurant] = useState(restaurants[0]);

  const changeRestaurant = (id) => {
    setCurrentRestaurant(
      restaurants.find((restaurant) => restaurant.id === id)
    );
  };

  return (
    <>
      {restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => changeRestaurant(restaurant.id)}
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
