import PropTypes from 'prop-types';

//       Emotion

import {
  FriendsList,
  FriendCard,
  FriendAvatar,
  FriendName,
  FriendStatus,
} from 'components/Friend_list/Friendlist.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendCard key={id}>
          <FriendStatus isOnline={isOnline}></FriendStatus>
          <FriendAvatar src={avatar} alt="User avatar" width="48" />
          <FriendName>{name}</FriendName>
        </FriendCard>
      ))}
    </FriendsList>
  );
};

//  CSS module

// import css from './friendlist.module.css';

// export const FriendList = ({ friends }) => {
//   return (
//     <ul className={css.friendList}>
//       {friends.map(({ id, avatar, name, isOnline = false }) => (
//         <li className={css.item} key={id}>
//           <span
//             className={`${css.status} ${isOnline ? css.isOnline : ''}`}
//           ></span>
//           <img
//             className={css.avatar}
//             src={avatar}
//             alt="User avatar"
//             width="48"
//           />
//           <p className={css.name}>{name}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

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
