import PropTypes from 'prop-types';

//        Styled-components
// import styled from 'styled-components';

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

//          CSS module
import css from './friendlist.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
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
  friends: PropTypes.array,
};
