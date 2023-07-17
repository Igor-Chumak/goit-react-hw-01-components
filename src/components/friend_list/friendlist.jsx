import PropTypes from 'prop-types';

//       Emotion
// import styled from '@emotion/styled'

// export const FriendList = ({ friends }) => {
//   return (
//     <ul className="friendList">
//       {friends.map(({ id, avatar, name, isOnline }) => (
//         <li className="item" key={id}>
//           <span className={`status ${isOnline ? 'isOnline' : ''}`}></span>
//           <img className="avatar" src={avatar} alt="User avatar" width="48" />
//           <p className="name">{name}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

//  CSS module
import css from './friendlist.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline = false }) => (
        <li className={css.item} key={id}>
          <span
            className={`${css.status} ${isOnline ? css.isOnline : ''}`}
          ></span>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ),
};
