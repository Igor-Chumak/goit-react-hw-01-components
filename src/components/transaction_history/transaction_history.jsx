import PropTypes from 'prop-types';

export const TransactionHistory = items => {
  return (
    <table className="transactionHistory">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Invoice</td>
          <td>125</td>
          <td>USD</td>
        </tr>
        <tr>
          <td>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr>
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
