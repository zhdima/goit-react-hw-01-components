import PropTypes from 'prop-types';
import {Container, Description, Avatar, Name, Info, StatsList, StatItem, StatLabel, StatValue} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes}}) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <StatsList>
        <StatItem key="followers">
          <StatLabel>Followers</StatLabel>
          <StatValue>{followers}</StatValue>
        </StatItem>
        <StatItem key="views">
          <StatLabel>Views</StatLabel>
          <StatValue>{views}</StatValue>
        </StatItem>
        <StatItem key="likes">
          <StatLabel>Likes</StatLabel>
          <StatValue>{likes}</StatValue>
        </StatItem>
      </StatsList>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
