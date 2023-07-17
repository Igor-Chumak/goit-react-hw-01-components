//       Emotion
import styled from '@emotion/styled';

export const FriendCard = styled.li`
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding: 10px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 6px 6px 6px 1px rgba(0, 0, 0, 0.3);
  outline: transparent;
`;

export const FriendAvatar = styled.img`
  display: block;
  width: 75px;
  height: 75px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: inherit;
`;

export const FriendName = styled.p`
  width: 100%;
  max-width: 100px;
  font-weight: 500;
  font-size: 26px;
  line-height: calc(30 / 26);
  text-transform: capitalize;
  text-shadow: none;
  color: colorCardProfile;
`;

export const FriendStatus = styled.span`
  display: block;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${setBgColorIsOnline};
  /* background-color: ${({ isOnline }) =>
    isOnline === true ? 'green' : 'red'}; */
`;

function setBgColorIsOnline({ isOnline }) {
  return isOnline === true ? 'green' : 'red';
}
