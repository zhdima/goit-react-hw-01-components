import PropTypes from 'prop-types';
import { Layout } from './Layout';
import { Profile } from './Profile/Profile';
import user from '../data/user.json';

export const App = () => {
  return (
    <Layout>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Layout>
  );
};
