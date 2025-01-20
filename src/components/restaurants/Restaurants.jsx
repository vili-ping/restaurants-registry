import { Restaurant } from './Restaurant';

export const Restaurants = ({ restaurants }) => {
  return (
    <>
      {restaurants.map(({ id, name, menu, reviews }) => (
        <Restaurant
          key={id}
          name={name}
          menu={menu}
          reviews={reviews}
        />
      ))}
    </>
  );
};
