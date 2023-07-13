import PropTypes from 'prop-types';
import './friendlist.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friendList">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className="item" key={id}>
          <span
            className={({ isOnline } === true
              ? ['status'].push('isOnline')
              : ['status']
            ).join(' ')}
          ></span>
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

//   { isOnline } === true
//     ? ['status', 'isOnline']
//     : ['status'].join(' ')
//  }
//   const classNameSpan = ['status'];
//   if ({ isOnline }) classNameSpan.push('isOnline');
