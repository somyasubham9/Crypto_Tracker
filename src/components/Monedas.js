import React from "react";
import './Monedas.css'
const Monedas = ({
  name,
  image,
  symbol,
  price,
  volume,
  mkt_cap,
  price_change,
}) => {
  return (
    <div className="mon-container">
      <div className="mon-row">
        <div className="mon">
          <img src={image} alt={name}></img>
          <h1>{name}</h1>
          <p className="symbol">{symbol}</p>
        </div>
        <div className="data">
          <p className="price">${price.toLocaleString()}</p>
          <p className="volume">${volume.toLocaleString()}</p>
          {price_change < 0 ? (
            <p className="mon-percent red">{price_change.toFixed(2)}%</p>
          ) : (
            <p className="mon-percent green">{price_change.toFixed(2)}%</p>
          )}
          <p className="mkt_cap">Market Cap:${mkt_cap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Monedas;
