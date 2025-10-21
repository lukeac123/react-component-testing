import { useEffect, useState } from "react";

function parseData(data) {
  const obj = JSON.parse(data);
  return obj.data.p;
}

export const WebsocketApp = () => {
  const [price, setPrice] = useState(0);

  // This needs to be unmounted
  // Needs error handling for disconnections / reconnections

  const wsUri =
    "wss://fstream.binance.com/stream?streams=bnbusdt@aggTrade/btcusdt@markPrice";

  useEffect(() => {
    const ws = new WebSocket(wsUri);

    ws.onmessage = (event) => {
      const data = parseData(event.data);
      setPrice(Math.round(data));
    };
  });

  return <div> MKT Price: {price}</div>;
};
