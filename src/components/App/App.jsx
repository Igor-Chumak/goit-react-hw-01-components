import { Profile } from '../Profile/Profile';
import getRandomHexColor from '../../utils';
import user from '../../data/user.json';
import { Statistics } from '../Statistics/Statistics.jsx';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import { FriendList } from '../Friend_list/Friendlist';
import transactions from '../../data/transactions.json';
import { TransactionHistory } from '../Transaction_history/Transaction_history';

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
