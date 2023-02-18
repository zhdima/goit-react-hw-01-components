import styled from 'styled-components';

export const Table = styled.table`
  table-layout: fixed;
  margin: 80px auto 0 auto;
  text-align: center;
`;

export const TableHead = styled.thead`
  background-color: deepskyblue;
  color: white;
`;
 
export const THead = styled.th`
  width: 240px;
  padding: 12px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 1px;
`;

export const TBodyRow = styled.tr`

  &:nth-child(odd) {
    background-color: white;
  }

  &:nth-child(even) {
    background-color: #eeeeee;
  }

  color: grey;
`;

export const TData = styled.td`
  padding: 12px;
`;
