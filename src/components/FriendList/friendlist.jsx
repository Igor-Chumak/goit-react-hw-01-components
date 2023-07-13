import PropTypes from 'prop-types';

export const FriendList = friends => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <span className="status" className="{friend.isOnline}"></span>
          <img
            className="avatar"
            src="{friend.avatar}"
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.id}</p>
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
