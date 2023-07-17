import { Profile } from './profile/profile';
import getRandomHexColor from './js/random_hex_color.js';
import user from '../data/user.json';
import { Statistics } from './statistics/statistics';
import data from '../data/data.json';
import friends from '../data/friends.json';
import { FriendList } from './friend_list/friendlist';
import transactions from '../data/transactions.json';
import { TransactionHistory } from './transaction_history/transaction_history';

export const App = () => {
  return (
    <>
      <h1 style={{ color: getRandomHexColor() }}>Home Work 1</h1>
      <h2 style={{ color: getRandomHexColor() }}>
        1 - Profile social net /Vanilla CSS/
      </h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2 style={{ color: getRandomHexColor() }}>
        2- Statistics section /Styled Components/
      </h2>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <h2 style={{ color: getRandomHexColor() }}>3 - Friend list /Emotion/</h2>
      <FriendList friends={friends} />
      <h2 style={{ color: getRandomHexColor() }}>
        4 - Transaction history /CSS Modules/
      </h2>
      <TransactionHistory items={transactions} />
    </>
  );
};
