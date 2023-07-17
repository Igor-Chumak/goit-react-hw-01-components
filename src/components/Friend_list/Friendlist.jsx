import PropTypes from 'prop-types';

//       Emotion
import { FriendListItem } from '../Friend_List_Item/FriendListItem';
import { FriendsList } from 'components/Friend_list/Friendlist.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ id, avatar, name, isOnline = false }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
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
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ),
};
