import PropTypes from 'prop-types';
import { Table, TableHead, THead, TBodyRow, TData } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <THead>Type</THead>
          <THead>Amount</THead>
          <THead>Currency</THead>
        </tr>
      </TableHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TBodyRow key={id}>
            <TData>{type}</TData>
            <TData>{amount}</TData>
            <TData>{currency}</TData>
          </TBodyRow>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
