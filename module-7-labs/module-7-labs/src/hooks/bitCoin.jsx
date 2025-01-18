import { useState, useEffect } from "react";

export function useBitcoinPrice(initialCurrency = 'USD') {
  const [currency, setCurrency] = useState(initialCurrency);
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch Bitcoin price.');
        }
        const data = await response.json();
        setBitcoinPrice(data.bitcoin[currency.toLowerCase()]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBitcoinPrice();
  }, [currency]);

  return { currency, setCurrency, bitcoinPrice, loading, error };
}