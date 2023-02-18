import PropTypes from 'prop-types';
import { Status, Avatar, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
