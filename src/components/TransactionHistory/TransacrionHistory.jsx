import PropTypes from 'prop-types';
import {
  Table,
  TableRow,
  Title,
  Type,
  Amount,
  Currency,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <TableRow>
          <Title>Type</Title>
          <Title>Amount</Title>
          <Title>Currency</Title>
        </TableRow>
      </thead>

      <tbody>
        {items.map(item => (
          <TableRow key={item.id}>
            <Type>{item.type}</Type>
            <Amount>{item.amount}</Amount>
            <Currency>{item.currency}</Currency>
          </TableRow>
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
  ),
};