import styled from 'styled-components';

export const Container = styled.section`
  margin: 80px auto;
  width: 480px;
`;

export const Title = styled.h2`
  font-weight: bold;
  margin-bottom: 16px;
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  flex-basis: ${props => `calc(100% / ${props.count})`};
  text-align: center;
  background-color: #eeeeee;
  border: 1px solid lightgrey;
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
