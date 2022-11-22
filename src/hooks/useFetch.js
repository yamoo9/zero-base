/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react';

export function useFetch(endpoint) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { loading, data, error };
}
