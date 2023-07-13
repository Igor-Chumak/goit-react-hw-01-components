import PropTypes from 'prop-types';

export const FriendList = friends => {
  return (
    <ul className="friend_list">
      {friends.map(({ id, name }) => (
        <li className="item" key={id}>
          <span className="status"></span>
          <img className="avatar" src="" alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

// export const FriendList = friends => {
//   return (
//     <ul className="friend-list">
//       {friends.map(friend => (
//         <li className="item" key={friend.id}>
//           <span className="status {friend.isOnline}"></span>
//           <img
//             className="avatar"
//             src={friend.avatar}
//             alt="User avatar"
//             width="48"
//           />
//           <p className="name">{friend.name}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

FriendList.propTypes = {
  friends: PropTypes.array,
};
