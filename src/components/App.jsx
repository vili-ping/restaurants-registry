import { restaurants } from '../constants/mock';
import { Layout } from './layout/Layout';
import { Restaurants } from './Restaurants/Restaurants';

export const App = () => {
  return (
    <Layout>
      {restaurants.length ? (
        <Restaurants restaurants={restaurants} />
      ) : (
        <p>Sorry, restaurants not found &#128546;</p>
      )}
    </Layout>
  );
};
