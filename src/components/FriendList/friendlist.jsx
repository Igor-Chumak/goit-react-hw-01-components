import PropTypes from 'prop-types';

export const FriendList = friends => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="item">
          <span className="status"></span>
          <img className="avatar" src="" alt="User avatar" width="48" />
          <p className="name"></p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

const FriendListItem = () => {
  return;
};
