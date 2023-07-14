import PropTypes from 'prop-types';
import styles from './friendlist.module.css';
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

//     CSS module
export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={styles.item} key={id}>
          <span
            className={`${styles.status} ${isOnline ? styles.isOnline : ''}`}
          ></span>
          <img
            className={styles.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
