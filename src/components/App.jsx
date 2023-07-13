import { Profile } from './Profile/profile';
import user from '../data/user.json';
import { Statistics } from './Statistics/statistics';
import data from '../data/data.json';
import friends from '../data/friends.json';
import { FriendList } from './FriendList/friendlist';

export const App = () => {
  return (
    <>
      <h1>Home Work 1</h1>
      <h2>1 - Profile social net</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2>2- Statistics Section</h2>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <h2>3 - Friend list</h2>
      <FriendList friends={friends} />;<h2>4 - Transaction History</h2>
    </>
  );
};
