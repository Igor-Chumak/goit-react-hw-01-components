import PropTypes from 'prop-types';
// import style from './friendlist.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friendList">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className="item" key={id}>
          <span className={`status ${isOnline ? 'isOnline' : ''}`}></span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
