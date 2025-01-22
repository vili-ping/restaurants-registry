import { Dish } from '../dish/Dish';

export const Menu = ({ menu }) => {
  return (
    <ul>
      {menu.map((food) => (
        <li key={food.id}>
          <Dish foodName={food.name} />
        </li>
      ))}
    </ul>
  );
};
