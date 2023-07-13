import { Profile } from './profile/profile';
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
      <h1>Home Work 1</h1>
      <h2>1 - Profile social net</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2>2- Statistics section</h2>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <h2>3 - Friend list</h2>
      <FriendList friends={friends} />
      <h2>4 - Transaction history</h2>
      <TransactionHistory items={transactions} />;
    </>
  );
};
