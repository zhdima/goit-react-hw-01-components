import styled from 'styled-components';

export const Status = styled.span`
  width: 16px;
  height: 16px;
  background-color: ${props => (props.isOnline?'green':'red')};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 48px;
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
