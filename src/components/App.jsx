import { Profile } from './Profile/profile';
import user from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';

export const App = () => {
  return (
    <>
      <h1>Home Work 1</h1>
      <h2>1 - Профиль социальной сети</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2>2- Секция статистики</h2>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <h2>3 - Список друзей</h2>
      <h2>4 - История транзакций</h2>
    </>
  );
};
