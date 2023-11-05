import { TickerData } from "./Ticker";

export const TickerList = ({ tickers }) => {

  let statedDate;

  if (tickers.length > 0) {
    const tradeDate = tickers[0].last_trade_time;
    const date = new Date(tradeDate);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    statedDate = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
  }

  return (
    <div className="column">
      <div className="box table-container">
        {tickers.length > 0 && (
          <h2 className="subtitle is-4">Last trade time: {statedDate}</h2>
        )}
        <table className="table is-striped is-hoverable is-narrow is-fullwidth">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Price</th>
              <th>Exchange</th>
              <th>Change</th>
              <th>Change%</th>
              <th>Dividend</th>
              <th>Yield</th>
            </tr>
          </thead>

          <tbody>
              {tickers.map(ticker => (
                <TickerData key={ticker.ticker} ticker={ticker} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}