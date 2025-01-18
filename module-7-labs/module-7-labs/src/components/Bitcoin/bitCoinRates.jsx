import React from "react";
import { useBitcoinPrice } from "../../hooks/bitCoin";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const { currency, setCurrency, bitcoinPrice, loading, error } = useBitcoinPrice('USD');

  const options = currencies.map(curr => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency: 
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {loading && <p>Loading price...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && bitcoinPrice !== null && (
        <p>
          The current price of 1 Bitcoin in <strong>{currency}</strong> is <strong>{bitcoinPrice}</strong>{" "}
          {currency}.
        </p>
      )}
    </div>
  );
}

export default BitcoinRates;