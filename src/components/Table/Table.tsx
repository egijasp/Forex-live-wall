import { FC } from 'react';
import './Table.scss';
import { CurrencyData } from '../../helpers/types';

type TableProps = {
  data: CurrencyData[]
}

const Table: FC<TableProps> = ({ data }) => (
  <div className="container">
    <table className="table">
      <thead>
        <tr className="table--heading">
          <th className="table__cell">Pair</th>
          <th className="table__cell">BID</th>
          <th className="table__cell">ASK</th>
          <th className="table__cell">Changes %</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map(({
          ticker, bid, ask, changes,
        }) => (
          <tr
            key={bid}
          >
            <td
              className="table__cell"
            >
              {ticker}
            </td>
            <td className="table__cell">{bid}</td>
            <td className="table__cell">{ask}</td>
            <td
              className="table__cell"
              style={{ color: changes > 0 ? 'darkgreen' : 'darkred' }}
            >
              {changes && changes.toFixed(3)}
              %
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
