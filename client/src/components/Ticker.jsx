import { useEffect, useRef, useState } from 'react';


export const TickerData = ({ ticker }) => {
  const currentPriceRef = useRef(null);
  const [priceChange, setPriceChange] = useState(null);

  useEffect(() => {
    if (currentPriceRef.current !== null) {
      const change = ticker.price - currentPriceRef.current;
      setPriceChange(change);
    }
    currentPriceRef.current = ticker.price;
  }, [ticker.price]);

  return (
    <>
      <tr className="tr">
        <td className="td">
          <button
            className="button is-fullwidth"
          >
            {ticker.ticker}
          </button>
        </td>
        <td>
          {ticker.price}
          {priceChange && (
            <sup
              className={`td ${
                priceChange > 0 ? 'has-text-success' : 'has-text-danger'
              }`}
            >
              {priceChange > 0
                ? ` +${priceChange.toFixed(2)}$`
                : ` ${priceChange.toFixed(2)}$`}
            </sup>
          )}
        </td>
        <td className="td">{ticker.exchange}</td>
        <td className="td">{ticker.change}</td>
        <td className="td">{ticker.change_percent}</td>
        <td className="td">{ticker.dividend}</td>
        <td className="td">{ticker.yield}</td>
      </tr>
    </>
  );
};