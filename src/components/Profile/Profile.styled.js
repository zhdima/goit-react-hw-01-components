import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 320px;
`;

export const Description = styled.div`
  background-color: white;
  text-align: center;
  padding: 32px;
  border: 1px solid darkgrey;
`;

export const Avatar = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin: 0 auto;
  border: 1px solid darkgrey;
`;

export const Name = styled.div`
  margin-top: 16px;
  font-weight: bold;
  font-size: 24px;
`;

export const Info = styled.div`
  margin-top: 12px;
  font-size: 18px;
  color: darkgrey;
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  flex-basis: calc(100% / 3);
  text-align: center;
  background-color: #eeeeee;
  border: 1px solid darkgrey;
`;

export const StatLabel = styled.p`
  margin-top: 16px;
  margin-bottom: 4px;
  color: darkgrey;
`;

export const StatValue = styled.p`
  font-weight: bold;
  margin-bottom: 16px;
`;
