import './App.css';
import { TickerList } from './components/TickerList';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import 'bulma/css/bulma.css';

export const App = () => {
  const [tickers, setTickers] = useState([]);
  const socket = io('http://localhost:4000');

  useEffect(() => {
    socket.connect();
    socket.emit('start');
    socket.on('ticker', (response) => {
      setTickers(response);
    })

    return () => {
      socket.close();
    };
  }, []);

  return (
    <TickerList tickers={tickers} />
  );
}

export default App;
