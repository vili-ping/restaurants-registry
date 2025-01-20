import { restaurants } from '../constants/mock';
import { Layout } from './layout/Layout';
import { Restaurants } from './Restaurants/Restaurants';

export const App = () => {
  return (
    <Layout>
      <Restaurants restaurants={restaurants} />
    </Layout>
  );
};
