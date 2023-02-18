import styled from 'styled-components';

export const Container = styled.section`
  margin: 80px auto;
  width: 440px;
`;

export const Title = styled.h2`
  font-weight: bold;
  padding: 32px 0;
  text-transform: uppercase;
  text-align: center;
  background-color: white;
  color: grey;
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  flex-basis: ${props => `calc(100% / ${props.count})`};
  text-align: center;
  background-color: ${props => getRandomHexColor()};
  color: white;
`;

export const StatLabel = styled.p`
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const StatValue = styled.p`
  font-size: 20px;
  margin-bottom: 16px;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
