import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 300px;
  border: 1px solid grey;
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);
  background-color: white;
  margin: 0 auto;
  padding: 12px;
  transition: transform var(--animation-duration) var(--timing-function),
    box-shadow var(--animation-duration) var(--timing-function);

  :hover, :focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    cursor: pointer;
    transform: scale(1.03);
  }
`;
