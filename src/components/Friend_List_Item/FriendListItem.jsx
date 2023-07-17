import PropTypes from 'prop-types';

//       Emotion

import {
  FriendCard,
  FriendAvatar,
  FriendName,
  FriendStatus,
} from 'components/Friend_List_Item/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline = false }) => {
  return (
    <FriendCard>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
};

FriendListItem.propTypes = PropTypes.shape({
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
});
